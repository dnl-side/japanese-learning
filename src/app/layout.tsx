//src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import BottomNav from "./components/layout/BottomNav";

export const metadata: Metadata = {
  title: "日本語を学ぼう | Japanese Learning",
  description:
    "Aprende japonés de forma seria — hiragana, katakana, kanji, gramática y vocabulario estructurado para complementar tus clases.",
  keywords: ["japonés", "hiragana", "katakana", "kanji", "JLPT", "aprender japonés"],
  openGraph: {
    title: "日本語を学ぼう",
    description: "Plataforma de aprendizaje de japonés",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Shippori+Mincho:wght@400;500;700&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain min-h-[100dvh]">
        <div className="flex min-h-[100dvh] flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
            <div
              className="md:hidden"
              style={{ height: "calc(var(--bottom-nav-height) + env(safe-area-inset-bottom))" }}
              aria-hidden="true"
            />
          </main>

          <BottomNav />
        </div>
      </body>
    </html>
  );
}