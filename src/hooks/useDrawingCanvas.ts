// src/hooks/useDrawingCanvas.ts

"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import type { ScriptType } from "@/types/japanese";

export interface Point { x: number; y: number; }
export interface Stroke { points: Point[]; color: string; width: number; }
export type ValidationState = "idle" | "valid" | "invalid-count" | "invalid-alignment";

export interface SvgGuide {
  path2D: Path2D;
  box: { x: number; y: number; w: number; h: number };
}

const STROKE_COLORS = ["#3B82F6", "#EF4444", "#14B8A6", "#F59E0B", "#8B5CF6", "#22C55E", "#F97316", "#EC4899"];
const CANVAS_SIZE = 600;
const GUIDE_PADDING = 48;

function parseViewBox(value: string | null) {
  if (!value) return null;
  const parts = value.trim().split(/[\s,]+/).map(Number);
  if (parts.length !== 4 || parts.some(Number.isNaN)) return null;
  const [x, y, w, h] = parts;
  return { x, y, w, h };
}

function fitGuide(canvasW: number, canvasH: number, vbW: number, vbH: number, padding = GUIDE_PADDING) {
  const innerW = Math.max(1, canvasW - padding * 2);
  const innerH = Math.max(1, canvasH - padding * 2);
  const scale = Math.min(innerW / vbW, innerH / vbH);
  const drawW = vbW * scale;
  const drawH = vbH * scale;
  const offsetX = (canvasW - drawW) / 2;
  const offsetY = (canvasH - drawH) / 2;

  return { scale, offsetX, offsetY, drawW, drawH };
}

async function loadSvgGuide(svgUrl: string, canvasW: number, canvasH: number): Promise<SvgGuide> {
  const res = await fetch(svgUrl);
  if (!res.ok) throw new Error(`SVG not found: ${svgUrl}`);

  const text = await res.text();
  const doc = new DOMParser().parseFromString(text, "image/svg+xml");
  const svg = doc.querySelector("svg");
  if (!svg) throw new Error("SVG inválido");

  const viewBox = parseViewBox(svg.getAttribute("viewBox"));
  if (!viewBox) throw new Error("viewBox inválido");

  const pathElements = Array.from(doc.querySelectorAll("path"));
  if (pathElements.length === 0) throw new Error("No hay <path> en el SVG");

  const { scale, offsetX, offsetY, drawW, drawH } = fitGuide(canvasW, canvasH, viewBox.w, viewBox.h);

  const matrix = new DOMMatrix([
    scale, 0,
    0, scale,
    offsetX - viewBox.x * scale,
    offsetY - viewBox.y * scale,
  ]);

  const combinedPath = new Path2D();

  for (const el of pathElements) {
    const d = el.getAttribute("d");
    if (!d) continue;

    const transformed = new Path2D();
    transformed.addPath(new Path2D(d), matrix);
    combinedPath.addPath(transformed);
  }

  return {
    path2D: combinedPath,
    box: { x: offsetX, y: offsetY, w: drawW, h: drawH },
  };
}

function buildAcceptanceMask(guide: SvgGuide, tolerance: number) {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // relleno del carácter
  ctx.fillStyle = "#000";
  ctx.fill(guide.path2D, "nonzero");

  // expandir zona válida alrededor del borde
  ctx.strokeStyle = "#000";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = tolerance * 2;
  ctx.stroke(guide.path2D);

  return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
}

function buildAcceptanceMaskForPath(path: Path2D, tolerance: number) {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#000";
  ctx.fill(path, "nonzero");

  ctx.strokeStyle = "#000";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = tolerance * 2;
  ctx.stroke(path);

  return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
}


function pointHitsMask(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  x: number,
  y: number,
) {
  const px = Math.max(0, Math.min(width - 1, Math.round(x)));
  const py = Math.max(0, Math.min(height - 1, Math.round(y)));
  const index = (py * width + px) * 4 + 3;
  return data[index] > 0;
}

function strokeLength(points: Point[]) {
  let len = 0;

  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    len += Math.hypot(dx, dy);
  }

  return len;
}

function trimStrokePoints(points: Point[]) {
  if (points.length <= 10) return points;

  const trim = Math.max(1, Math.floor(points.length * 0.12));
  const start = trim;
  const end = points.length - trim;

  if (end <= start) return points;
  return points.slice(start, end);
}

function resampleStrokePoints(points: Point[], spacing = 8): Point[] {
  if (points.length < 2) return points;

  const result: Point[] = [points[0]];
  let previous = points[0];
  let accumulated = 0;

  for (let i = 1; i < points.length; i++) {
    let current = points[i];
    let dx = current.x - previous.x;
    let dy = current.y - previous.y;
    let segmentLength = Math.hypot(dx, dy);

    if (segmentLength === 0) continue;

    while (accumulated + segmentLength >= spacing) {
      const t = (spacing - accumulated) / segmentLength;
      const nextPoint: Point = {
        x: previous.x + dx * t,
        y: previous.y + dy * t,
      };

      result.push(nextPoint);
      previous = nextPoint;

      dx = current.x - previous.x;
      dy = current.y - previous.y;
      segmentLength = Math.hypot(dx, dy);
      accumulated = 0;

      if (segmentLength === 0) break;
    }

    accumulated += segmentLength;
    previous = current;
  }

  const last = points[points.length - 1];
  const tail = result[result.length - 1];
  if (!tail || tail.x !== last.x || tail.y !== last.y) {
    result.push(last);
  }

  return result;
}

function pointDistance(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function getDetourRatio(points: Point[]) {
  if (points.length < 2) return Infinity;
  const length = strokeLength(points);
  const direct = pointDistance(points[0], points[points.length - 1]);
  return length / Math.max(direct, 1);
}

function getBacktrackRatio(points: Point[]) {
  if (points.length < 2) return 1;

  const start = points[0];
  const end = points[points.length - 1];
  const vx = end.x - start.x;
  const vy = end.y - start.y;
  const mag = Math.hypot(vx, vy);

  if (mag < 1) return 1;

  const ux = vx / mag;
  const uy = vy / mag;

  let forward = 0;
  let backward = 0;

  let prevProj = (points[0].x - start.x) * ux + (points[0].y - start.y) * uy;

  for (let i = 1; i < points.length; i++) {
    const proj = (points[i].x - start.x) * ux + (points[i].y - start.y) * uy;
    const delta = proj - prevProj;

    if (delta >= 0) {
      forward += delta;
    } else {
      backward += -delta;
    }

    prevProj = proj;
  }

  return backward / Math.max(forward + backward, 1);
}

function getTotalTurn(points: Point[]) {
  if (points.length < 3) return 0;

  let total = 0;

  for (let i = 2; i < points.length; i++) {
    const ax = points[i - 1].x - points[i - 2].x;
    const ay = points[i - 1].y - points[i - 2].y;
    const bx = points[i].x - points[i - 1].x;
    const by = points[i].y - points[i - 1].y;

    const aLen = Math.hypot(ax, ay);
    const bLen = Math.hypot(bx, by);

    if (aLen < 0.001 || bLen < 0.001) continue;

    const angleA = Math.atan2(ay, ax);
    const angleB = Math.atan2(by, bx);

    let diff = angleB - angleA;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;

    total += Math.abs(diff);
  }

  return total;
}

function buildOutlineMask(path: Path2D, tolerance: number) {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#000";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = tolerance * 2;
  ctx.stroke(path);

  return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
}

function distance(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function samplePathPoints(path: Path2D, step = 6): Point[] {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return [];

  // truco: Path2D no expone metrics en web como Flutter,
  // así que rasterizamos el stroke y leemos puntos ocupados
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.strokeStyle = "#000";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 2;
  ctx.stroke(path);

  const image = ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE).data;
  const points: Point[] = [];

  for (let y = 0; y < CANVAS_SIZE; y += step) {
    for (let x = 0; x < CANVAS_SIZE; x += step) {
      const i = (y * CANVAS_SIZE + x) * 4 + 3;
      if (image[i] > 0) {
        points.push({ x, y });
      }
    }
  }

  return points;
}

function nearestDistanceToGuide(point: Point, guidePoints: Point[]) {
  let min = Infinity;
  for (const g of guidePoints) {
    const d = distance(point, g);
    if (d < min) min = d;
  }
  return min;
}

function getStrokeBounds(strokes: Stroke[]) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const stroke of strokes) {
    for (const p of stroke.points) {
      minX = Math.min(minX, p.x);
      minY = Math.min(minY, p.y);
      maxX = Math.max(maxX, p.x);
      maxY = Math.max(maxY, p.y);
    }
  }

  if (!Number.isFinite(minX)) return null;

  return {
    x: minX,
    y: minY,
    w: Math.max(1, maxX - minX),
    h: Math.max(1, maxY - minY),
  };
}

function getKanjiFolder(level?: number) {
  if (level === 1) return "nivel_uno";
  if (level === 2) return "nivel_dos";
  return "";
}

function buildSvgPath(svgFilename: string, scriptType: ScriptType, kanjiLevel?: number) {
  if (scriptType === "kanji") {
    const folder = getKanjiFolder(kanjiLevel);
    if (!folder) return `/svg/${scriptType}/${svgFilename}.svg`;
    return `/svg/kanji/${folder}/${svgFilename}.svg`;
  }

  return `/svg/${scriptType}/${svgFilename}.svg`;
}


export function useDrawingCanvas(
  svgFilename: string,
  scriptType: ScriptType,
  requiredStrokes: number,
  kanjiLevel?: number
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);

  const [guide, setGuide] = useState<SvgGuide | null>(null);
  const [guideLoading, setGuideLoading] = useState(true);
  const [guideError, setGuideError] = useState(false);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [strokeWidth, setStrokeWidth] = useState(14);
  const [validation, setValidation] = useState<ValidationState>("idle");
  const [attempts, setAttempts] = useState(0);
  const [hintOpacity, setHintOpacity] = useState(0.7);

  const strokeCount = strokes.length;

  const registerFail = useCallback(() => {
    const next = attempts + 1;
    setAttempts(next);
    setHintOpacity(next === 1 ? 0.8 : next === 2 ? 0.9 : 1);
    setValidation("invalid-alignment");
    return "invalid-alignment" as const;
  }, [attempts]);

  useEffect(() => {
  setGuideLoading(true);
  setGuideError(false);
  setGuide(null);

  const svgPath = buildSvgPath(svgFilename, scriptType, kanjiLevel);

  loadSvgGuide(svgPath, CANVAS_SIZE, CANVAS_SIZE)
    .then((g) => {
      setGuide(g);
      setGuideLoading(false);
    })
    .catch(() => {
      setGuideError(true);
      setGuideLoading(false);
    });
}, [svgFilename, scriptType, kanjiLevel]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const ctx = overlay.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, overlay.width, overlay.height);

    if (!guide) return;

    ctx.save();
    ctx.fillStyle = `rgba(120,120,120,${Math.min(0.92, Math.max(0.2, hintOpacity * 0.7))})`;
    ctx.fill(guide.path2D, "nonzero");
    ctx.restore();
  }, [guide, hintOpacity]);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.strokeStyle = "rgba(100,149,237,0.35)";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    for (const stroke of strokes) {
      if (stroke.points.length < 2) continue;

      ctx.save();
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);

      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }

      ctx.stroke();
      ctx.restore();
    }

    if (currentStroke.length >= 2) {
      ctx.save();
      ctx.strokeStyle = STROKE_COLORS[colorIndex % STROKE_COLORS.length];
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(currentStroke[0].x, currentStroke[0].y);

      for (let i = 1; i < currentStroke.length; i++) {
        ctx.lineTo(currentStroke[i].x, currentStroke[i].y);
      }

      ctx.stroke();
      ctx.restore();
    }
  }, [strokes, currentStroke, colorIndex, strokeWidth]);

  useEffect(() => {
    render();
  }, [render]);

  const getPoint = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();

    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDrawing(true);
    setValidation("idle");
    setCurrentStroke([getPoint(e)]);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    setCurrentStroke((prev) => [...prev, getPoint(e)]);
  }, [isDrawing]);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    setIsDrawing(false);

    const finalPoints = [...currentStroke, getPoint(e)];
    if (finalPoints.length < 2) {
      setCurrentStroke([]);
      return;
    }

    setStrokes((prev) => [
      ...prev,
      {
        points: finalPoints,
        color: STROKE_COLORS[colorIndex % STROKE_COLORS.length],
        width: strokeWidth,
      },
    ]);

    setCurrentStroke([]);
    setColorIndex((prev) => prev + 1);
  }, [isDrawing, currentStroke, colorIndex, strokeWidth]);

  const validate = useCallback((): ValidationState => {
  if (strokes.length === 0) return "idle";

  if (strokeCount !== requiredStrokes) {
    setValidation("invalid-count");
    return "invalid-count";
  }

  if (!guide) {
    setValidation("valid");
    return "valid";
  }

  const tolerance = 25;
  const minStrokeLength = 24;
  const minHitRatio = 0.72;

  const outlineMask = buildOutlineMask(guide.path2D, tolerance);
  if (!outlineMask) return "idle";

  let totalPoints = 0;
  let validPoints = 0;

  for (const stroke of strokes) {
    const usablePoints = resampleStrokePoints(trimStrokePoints(stroke.points), 8);

    const detourRatio = getDetourRatio(usablePoints);
    const backtrackRatio = getBacktrackRatio(usablePoints);
    const totalTurn = getTotalTurn(usablePoints);

    console.log("shape debug", {
    detourRatio,
    backtrackRatio,
    totalTurn,
    });

    if (usablePoints.length < 2) {
      return registerFail();
    }

    if (strokeLength(usablePoints) < minStrokeLength) {
      return registerFail();
    }

    if (detourRatio > 2.05) {
    return registerFail();
    }

    if (backtrackRatio > 0.16) {
    return registerFail();
    }

    if (totalTurn > Math.PI * 2.25) {
    return registerFail();
    }

    for (let i = 0; i < usablePoints.length; i += 2) {
      const p = usablePoints[i];
      totalPoints++;

      if (pointHitsMask(outlineMask, CANVAS_SIZE, CANVAS_SIZE, p.x, p.y)) {
        validPoints++;
      }
    }
  }

  const hitRatio = totalPoints === 0 ? 0 : validPoints / totalPoints;
  const isValid = hitRatio >= minHitRatio;

  setValidation(isValid ? "valid" : "invalid-alignment");
  return isValid ? "valid" : registerFail();
}, [strokes, strokeCount, requiredStrokes, guide, registerFail]);

  const clear = useCallback(() => {
    setStrokes([]);
    setCurrentStroke([]);
    setColorIndex(0);
    setValidation("idle");
    setHintOpacity(0.7);
    setAttempts(0);
  }, []);

  const resetAfterSuccess = useCallback(() => {
    setStrokes([]);
    setCurrentStroke([]);
    setColorIndex(0);
    setValidation("idle");
    setHintOpacity(0.7);
    setAttempts(0);
  }, []);

  return {
    canvasRef,
    overlayRef,
    guide,
    guideLoading,
    guideError,
    strokes,
    strokeCount,
    strokeWidth,
    setStrokeWidth,
    validation,
    attempts,
    hintOpacity,
    isDrawing,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    validate,
    clear,
    resetAfterSuccess,
  };
}