"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const BOTTOM_ITEMS = [
  { href: "/",            label: "Inicio",  icon: "⌂",  jp: "ホーム"  },
  { href: "/jlpt",        label: "JLPT",    icon: "◎",  jp: "JLPT"   },
  { href: "/kanji",       label: "Kanji",   icon: "字",  jp: "漢字"   },
  { href: "/vocabulario", label: "Vocab",   icon: "册",  jp: "語彙"   },
  { href: "/dashboard",   label: "Usuario", icon: "人",  jp: "ユーザー" },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Hide on drawing/practice pages — full screen canvas
  if (pathname.includes("/practica/")) return null;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t md:hidden"
      style={{
        background: "rgba(250,248,245,0.94)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid var(--border)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="grid h-16 grid-cols-5 items-stretch">
        {BOTTOM_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-1 flex-col items-center gap-0.5 py-2 transition-all duration-200 active:scale-90"
            >
              {/* Active background pill */}
              {active && (
                <motion.div
                  layoutId="bottom-pill"
                  className="absolute inset-x-2 inset-y-0 rounded-2xl"
                  style={{ background: "rgba(242,167,187,0.18)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Icon */}
              <span
                className="relative z-10 char-display text-xl leading-none transition-all duration-200"
                style={{
                  color: active ? "var(--red-japan)" : "var(--ink-soft)",
                  opacity: active ? 1 : 0.5,
                  transform: active ? "scale(1.15)" : "scale(1)",
                }}
              >
                {item.icon}
              </span>

              {/* Label */}
              <span
                className="relative z-10 text-xs font-medium transition-colors duration-200"
                style={{ color: active ? "var(--red-japan)" : "var(--ink-soft)", opacity: active ? 1 : 0.5 }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}