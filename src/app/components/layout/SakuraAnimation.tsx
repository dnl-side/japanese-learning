"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  swayDuration: number;
  opacity: number;
  rotate: number;
}

export default function SakuraAnimation() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 18 + 20,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 12,
      swayDuration: Math.random() * 3 + 3,
      opacity: Math.random() * 0.25 + 0.45,
      rotate: Math.random() * 360,
    }));
    setPetals(generated);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal absolute"
          style={{
            left: petal.left,
            top: `-${petal.size}px`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.duration}s, ${petal.swayDuration}s`,
            animationDelay: `${petal.delay}s, ${petal.delay}s`,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotate}deg)`,
            filter: "drop-shadow(0 2px 6px rgba(242, 167, 187, 0.18))",
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id={`petalGradient-${petal.id}`} cx="50%" cy="45%" r="65%">
                <stop offset="0%" stopColor="#FDEEF3" />
                <stop offset="55%" stopColor="#F8C8D8" />
                <stop offset="100%" stopColor="#F2A7BB" />
              </radialGradient>

              <radialGradient id={`centerGradient-${petal.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF7C2" />
                <stop offset="100%" stopColor="#E8B84E" />
              </radialGradient>
            </defs>

            <g transform="translate(50 50)">
              {[0, 72, 144, 216, 288].map((angle) => (
                <g key={angle} transform={`rotate(${angle})`}>
                  <path
                    d="M0,-30
                       C10,-42 26,-40 28,-22
                       C30,-8 18,2 0,16
                       C-18,2 -30,-8 -28,-22
                       C-26,-40 -10,-42 0,-30Z"
                    fill={`url(#petalGradient-${petal.id})`}
                  />
                </g>
              ))}

              <circle cx="0" cy="0" r="8" fill={`url(#centerGradient-${petal.id})`} />
              <circle cx="0" cy="0" r="3.5" fill="#D97C96" opacity="0.7" />
            </g>
          </svg>
        </div>
      ))}
    </div>
  );
}