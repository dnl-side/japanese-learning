//src/app/components/layout/BottomNav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "/", label: "Inicio", mobileLabel: "Inicio", icon: "⌂" },
  { href: "/hiragana", label: "Hiragana", mobileLabel: "Hira", icon: "あ" },
  { href: "/katakana", label: "Katakana", mobileLabel: "Kata", icon: "ア" },
  { href: "/kanji", label: "Kanji", mobileLabel: "Kanji", icon: "字" },
  { href: "/gramatica", label: "Gramática", mobileLabel: "Gram.", icon: "文" },
  { href: "/vocabulario", label: "Vocabulario", mobileLabel: "Vocab.", icon: "語" },
  { href: "/jlpt", label: "JLPT", mobileLabel: "JLPT", icon: "◎" },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="pointer-events-none fixed bottom-0 left-1/2 z-50 w-full max-w-[460px] -translate-x-1/2 px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] md:hidden">
      <div className="pointer-events-auto mx-auto w-full">
        <div
          className="pointer-events-auto rounded-[30px] border p-2 shadow-[0_14px_34px_rgba(26,26,46,0.10)]"
          style={{
            background: "rgba(250,248,245,0.90)",
            backdropFilter: "blur(18px)",
            borderColor: "rgba(26,26,46,0.08)",
          }}
        >
          <div
            className="mb-1 h-[2px] w-full rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(188,0,45,0) 0%, rgba(188,0,45,0.38) 22%, rgba(242,167,187,0.85) 50%, rgba(188,0,45,0.38) 78%, rgba(188,0,45,0) 100%)",
            }}
          />

          <nav className="grid grid-cols-7 gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className="group relative flex min-w-0"
                >
                  <div className="relative flex w-full flex-col items-center justify-center gap-1 rounded-[22px] px-1 py-2 text-center transition-all duration-300">
                    {active && (
                      <>
                        <motion.div
                          layoutId="bottomnav-active-bg"
                          className="absolute inset-0 rounded-[22px]"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(188,0,45,0.14) 0%, rgba(242,167,187,0.12) 100%)",
                            boxShadow: "0 10px 22px rgba(188,0,45,0.10)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                          }}
                        />
                        <motion.div
                          layoutId="bottomnav-active-border"
                          className="absolute inset-0 rounded-[22px] border"
                          style={{
                            borderColor: "rgba(188,0,45,0.14)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                          }}
                        />
                      </>
                    )}

                    <div
                      className="absolute inset-0 rounded-[22px] opacity-0 transition-all duration-300 group-active:opacity-100"
                      style={{
                        background: active ? "transparent" : "rgba(255,255,255,0.74)",
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center gap-1">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-active:scale-95"
                        style={{
                          background: active
                            ? "linear-gradient(135deg, var(--red-japan) 0%, var(--sakura-dark) 100%)"
                            : "rgba(255,255,255,0.94)",
                          borderColor: active
                            ? "rgba(188,0,45,0.08)"
                            : "rgba(26,26,46,0.08)",
                          boxShadow: active
                            ? "0 8px 18px rgba(188,0,45,0.22)"
                            : "0 5px 12px rgba(26,26,46,0.05)",
                        }}
                      >
                        <span
                          className="char-display text-[1rem] font-bold leading-none"
                          style={{
                            color: active ? "#fff" : "var(--ink-soft)",
                            opacity: active ? 1 : 0.92,
                          }}
                        >
                          {item.icon}
                        </span>
                      </span>

                      <span
                        className="max-w-full truncate text-[0.63rem] font-semibold leading-none"
                        style={{
                          color: active ? "var(--red-japan)" : "var(--ink-soft)",
                        }}
                      >
                        {item.mobileLabel}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}