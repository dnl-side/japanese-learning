"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "/",            label: "Inicio",      jp: "ホーム",  icon: "⌂" },
  { href: "/hiragana",    label: "Hiragana",    jp: "ひらがな", icon: "あ" },
  { href: "/katakana",    label: "Katakana",    jp: "カタカナ", icon: "ア" },
  { href: "/kanji",       label: "Kanji",       jp: "漢字",    icon: "字" },
  { href: "/gramatica",   label: "Gramática",   jp: "文法",    icon: "文" },
  { href: "/vocabulario", label: "Vocabulario", jp: "語彙",    icon: "册" },
  { href: "/jlpt",        label: "JLPT",        jp: "JLPT",   icon: "◎" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 hidden md:block"
      style={{
        background: "rgba(250,248,245,0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 1px 12px rgba(26,26,46,0.06)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="char-display text-2xl font-bold transition-colors duration-200"
            style={{ color: "var(--red-japan)" }}
          >
            日
          </span>
          <span
            className="text-sm font-semibold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            Japanese<br />
            <span style={{ color: "var(--sakura-dark)" }}>Learning</span>
          </span>
        </Link>

        {/* Nav items */}
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 text-xs font-medium transition-all duration-200 hover:bg-white"
                style={{ color: active ? "var(--red-japan)" : "var(--ink-soft)" }}
              >
                <span
                  className="char-display text-base leading-none"
                  style={{ opacity: active ? 1 : 0.6 }}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>

                {/* Active indicator */}
                {active && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full"
                    style={{ background: "var(--red-japan)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side — future: user avatar */}
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:brightness-110"
            style={{ background: "var(--red-japan)" }}
          >
            Mi progreso
          </Link>
        </div>
      </div>
    </header>
  );
}