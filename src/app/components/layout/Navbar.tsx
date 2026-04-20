"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Inicio", jp: "ホーム", icon: "⌂" },
  { href: "/hiragana", label: "Hiragana", jp: "ひらがな", icon: "あ" },
  { href: "/katakana", label: "Katakana", jp: "カタカナ", icon: "ア" },
  { href: "/kanji", label: "Kanji", jp: "漢字", icon: "字" },
  { href: "/gramatica", label: "Gramática", jp: "文法", icon: "文" },
  { href: "/vocabulario", label: "Vocabulario", jp: "語彙", icon: "語" },
  { href: "/jlpt", label: "JLPT", jp: "日本語能力試験", icon: "◎" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 hidden md:block"
      style={{
        background: "rgba(250,248,245,0.86)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 6px 24px rgba(26,26,46,0.06)",
      }}
    >
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(188,0,45,0) 0%, rgba(188,0,45,0.55) 24%, rgba(242,167,187,0.9) 50%, rgba(188,0,45,0.55) 76%, rgba(188,0,45,0) 100%)",
        }}
      />

      <div className="mx-auto grid max-w-[1380px] grid-cols-[minmax(200px,1fr)_minmax(0,860px)_minmax(200px,1fr)] items-center gap-4 px-5 py-3 lg:px-6">
        <div className="justify-self-start">
          <Link href="/" className="group inline-flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.82)",
                borderColor: "rgba(188,0,45,0.14)",
                boxShadow: "0 10px 24px rgba(188,0,45,0.10)",
              }}
            >
              <span
                className="char-display text-3xl font-bold transition-transform duration-300 group-hover:scale-105"
                style={{ color: "var(--red-japan)" }}
              >
                日
              </span>
            </div>

            <div className="leading-tight">
              <div
                className="text-base font-bold"
                style={{ color: "var(--ink)" }}
              >
                Japanese
              </div>
              <div
                className="text-base font-bold"
                style={{ color: "var(--sakura-dark)" }}
              >
                Learning
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full justify-self-center">
          <div
            className="mx-auto w-full rounded-[26px] border p-1"
            style={{
              background: "rgba(255,255,255,0.72)",
              borderColor: "rgba(26,26,46,0.08)",
              boxShadow: "0 12px 30px rgba(26,26,46,0.06)",
            }}
          >
            <nav className="flex items-stretch justify-center gap-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative flex min-w-0 flex-1"
                  >
                    <div className="relative flex w-full flex-col items-center justify-center gap-1 rounded-[20px] px-2 py-1.5 text-center transition-all duration-300">
                      {active && (
                        <>
                          <motion.div
                            layoutId="navbar-active-bg"
                            className="absolute inset-0 rounded-[22px]"
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(188,0,45,0.14) 0%, rgba(242,167,187,0.12) 100%)",
                              boxShadow: "0 10px 24px rgba(188,0,45,0.10)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 34,
                            }}
                          />
                          <motion.div
                            layoutId="navbar-active-border"
                            className="absolute inset-0 rounded-[22px] border"
                            style={{
                              borderColor: "rgba(188,0,45,0.18)",
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
                        className="absolute inset-0 rounded-[22px] opacity-0 transition-all duration-300 group-hover:opacity-100"
                        style={{
                          background: active ? "transparent" : "rgba(255,255,255,0.78)",
                          boxShadow: active ? "none" : "0 8px 18px rgba(26,26,46,0.05)",
                        }}
                      />

                      <div className="relative z-10 flex flex-col items-center gap-1.5">
                        <span
                            className="text-[0.56rem] font-bold uppercase tracking-[0.12em] transition-all duration-300"
                          style={{
                            color: active ? "var(--red-japan)" : "rgba(45,45,68,0.58)",
                          }}
                        >
                          {item.jp}
                        </span>

                        <span
                            className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
                          style={{
                            background: active
                              ? "linear-gradient(135deg, var(--red-japan) 0%, var(--sakura-dark) 100%)"
                              : "rgba(255,255,255,0.92)",
                            borderColor: active
                              ? "rgba(188,0,45,0.08)"
                              : "rgba(26,26,46,0.08)",
                            boxShadow: active
                              ? "0 8px 20px rgba(188,0,45,0.22)"
                              : "0 6px 14px rgba(26,26,46,0.05)",
                          }}
                        >
                          <span
                            className="char-display text-base font-bold leading-none"
                            style={{
                              color: active ? "#fff" : "var(--ink-soft)",
                              opacity: active ? 1 : 0.9,
                            }}
                          >
                            {item.icon}
                          </span>
                        </span>

                        <span
                            className="whitespace-nowrap text-[0.76rem] font-semibold leading-none transition-colors duration-300 lg:text-[0.84rem]"
                          style={{
                            color: active ? "var(--red-japan)" : "var(--ink-soft)",
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="justify-self-end">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: "#fff",
              background:
                "linear-gradient(135deg, var(--red-japan) 0%, var(--sakura-dark) 100%)",
              borderColor: "rgba(188,0,45,0.10)",
              boxShadow: "0 10px 24px rgba(188,0,45,0.18)",
            }}
          >
            <BarChart3 size={16} className="transition-transform duration-300 group-hover:scale-105" />
            <span>Mi progreso</span>
          </Link>
        </div>
      </div>
    </header>
  );
}