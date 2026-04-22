// src/data/grammar/formality-hub.ts

import type { RubySegment } from "@/app/components/ui/Ruby";

export interface FormalityHubMeta {
  title: string;
  jp: string;
  reading: string;
  badge: string;
  description: string;
}

export interface FormalityHubStat {
  label: string;
  value: string;
}

export interface FormalityHubExample {
  label: string;
  segments: RubySegment[];
}

export interface FormalityHubModuleCard {
  href: string;
  eyebrow: string;
  title: string;
  jp: string;
  color: string;
  accent: string;
  desc: string;
  bullets: string[];
  examples: FormalityHubExample[];
  cta: string;
}

export interface FormalityHubStudyStep {
  step: string;
  title: string;
  desc: string;
}

export interface FormalityHubQuickGuide {
  title: string;
  items: string[];
}

export interface FormalityHubSummary {
  registro: string;
  keigo: string;
}

export interface FormalityHubContent {
  meta: FormalityHubMeta;
  stats: FormalityHubStat[];
  modules: FormalityHubModuleCard[];
  studyFlow: FormalityHubStudyStep[];
  quickGuide: FormalityHubQuickGuide[];
  summary: FormalityHubSummary;
}

export const FORMALITY_HUB: FormalityHubContent = {
  meta: {
    title: "Formalidad",
    jp: "話し方",
    reading: "はなしかた",
    badge: "Formalidad · Vista general",
    description:
      "Este módulo quedó dividido en dos rutas complementarias: Registro, para entender cómo cambia el japonés entre informal, neutro y formal base, y Keigo, para estudiar la capa alta de respeto, humildad y expresiones profesionales.",
  },

  stats: [
    { label: "Módulos", value: "2" },
    { label: "Ruta recomendada", value: "Registro → Keigo" },
    { label: "Meta", value: "Elegir el tono correcto" },
  ],

  modules: [
    {
      href: "/gramatica/formalidad/registro",
      eyebrow: "Registro",
      title: "Informal · Neutro · Formal base",
      jp: "話し方",
      color: "#CFD8DC",
      accent: "#37474F",
      desc:
        "Aquí estudias cómo cambia una misma idea entre japonés casual, japonés neutro y una formalidad más segura para la vida diaria.",
      bullets: [
        "plain form vs です・ます",
        "copula, verbos, pasado y negativo",
        "cuándo una frase suena demasiado casual o demasiado rígida",
        "comparaciones directas entre registros",
      ],
      examples: [
        {
          label: "Informal",
          segments: [
            { text: "今日", ruby: "きょう" },
            { text: "は" },
            { text: "行", ruby: "い" },
            { text: "かない。" },
          ],
        },
        {
          label: "Neutro",
          segments: [
            { text: "今日", ruby: "きょう" },
            { text: "は" },
            { text: "行", ruby: "い" },
            { text: "きません。" },
          ],
        },
      ],
      cta: "Ir a Registro",
    },
    {
      href: "/gramatica/formalidad/keigo",
      eyebrow: "Keigo",
      title: "丁寧語 · 尊敬語 · 謙譲語",
      jp: "敬語",
      color: "#EDE7F6",
      accent: "#6D28D9",
      desc:
        "Aquí estudias la capa alta de formalidad: cómo elevar al otro, bajar lo propio y usar expresiones naturales en trabajo, atención, teléfono y correo.",
      bullets: [
        "sonkeigo y kenjougo",
        "verbos especiales y patrones productivos",
        "frases fijas de oficina, llamada y servicio",
        "errores típicos y decisiones según contexto",
      ],
      examples: [
        {
          label: "Respetuoso",
          segments: [
            { text: "先生", ruby: "せんせい" },
            { text: "が" },
            { text: "お話", ruby: "はな" },
            { text: "しになります。" },
          ],
        },
        {
          label: "Humilde",
          segments: [
            { text: "私", ruby: "わたし" },
            { text: "がご" },
            { text: "説明", ruby: "せつめい" },
            { text: "いたします。" },
          ],
        },
      ],
      cta: "Ir a Keigo",
    },
  ],

  studyFlow: [
    {
      step: "01",
      title: "Empieza por Registro",
      desc:
        "Primero deja sólido el salto entre plain form y です・ます. Ese puente es el más frecuente en conversación real.",
    },
    {
      step: "02",
      title: "Después entra a Keigo",
      desc:
        "Cuando ya distingues informal y neutro, keigo se entiende mejor como la capa alta del registro y no como una lista aislada.",
    },
    {
      step: "03",
      title: "Vuelve y compara",
      desc:
        "Lo ideal es contrastar siempre la misma idea en varios niveles: casual, neutro, formal alto y keigo.",
    },
  ],

  quickGuide: [
    {
      title: "Ve a Registro si...",
      items: [
        "te cuesta pasar de casual a です・ます",
        "quieres entender cuándo usar plain forms",
        "necesitas ordenar informal, neutro y formal base",
      ],
    },
    {
      title: "Ve a Keigo si...",
      items: [
        "te confundes entre 尊敬語 y 謙譲語",
        "quieres hablar con profesor, jefe o cliente",
        "necesitas frases de teléfono, email o atención",
      ],
    },
  ],

  summary: {
    registro:
      "Aquí se define la diferencia entre hablar casualmente, hablar en neutro con です・ます y reconocer cuándo una frase ya empieza a subir de nivel.",
    keigo:
      "Aquí ya entras en decisiones más finas: elevar al otro, bajar lo propio, elegir verbos especiales y usar expresiones naturales en contextos profesionales.",
  },
};