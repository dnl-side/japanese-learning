# 🌸 Japanese Learning Platform

> Una plataforma web para aprender japonés de verdad — diseñada para complementar clases presenciales y superar los límites de apps genéricas como Duolingo.

---

## 📌 Visión del Proyecto

Esta plataforma nace desde la experiencia directa en el aula: los estudiantes necesitan una herramienta que **refuerce lo que aprenden en clases**, que no mezcle contenidos de forma aleatoria, y que tenga un valor pedagógico real. El objetivo es construir una plataforma escalable, con identidad propia, que eventualmente pueda operar como un complemento profesional para profesores de japonés.

### Objetivos principales
- Complementar clases presenciales con ejercicios estructurados y progresivos
- Sistema de práctica de escritura con validación de trazos (hiragana, katakana, kanji)
- Quizzes y trivia personalizables por nivel y categoría
- Gramática explicada con ejemplos contextualizados
- Vocabulario organizado por nivel JLPT
- Sistema de usuarios con seguimiento de progreso
- Escalable hacia: clases en vivo, generación de tareas por IA, rankings entre alumnos

---

## 🛠️ Stack Tecnológico

### Decisiones de arquitectura

| Tecnología | Rol | Por qué |
|---|---|---|
| **Next.js 14** (App Router) | Framework principal | SSR/SSG para SEO, API Routes, layouts anidados, Cloudflare Pages compatible |
| **TypeScript** | Lenguaje | Los datos son complejos (kanji, conjugaciones, SVG paths) — type safety es obligatorio |
| **Tailwind CSS** | Estilos | Rapidez, responsive design, fácil de mantener |
| **Framer Motion** | Animaciones | Animación sakura, transiciones de página, feedback visual |
| **Zustand** | Estado global | Ligero, simple, perfecto para progreso del usuario y preferencias |
| **Canvas API** | Práctica de escritura | Reemplaza el CustomPainter de Flutter — mismo concepto, HTML nativo |
| **Supabase** | Base de datos + Auth | PostgreSQL gratuito, auth integrado, ideal para progreso de usuarios |
| **Cloudflare Pages** | Hosting | Edge global, gratis en plan básico, integración directa con Git |

### Por qué NO otras opciones
- **Vite/React puro**: Sin SSR, dificulta SEO en páginas de lecciones
- **Vue/Nuxt**: Ecosistema más pequeño, menos recursos para este dominio
- **Remix**: Excelente pero menos documentación para Cloudflare Pages
- **Firebase**: Más caro a escala, menos flexible que Supabase

---

## 📁 Arquitectura del Proyecto

```
japanese-learning/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/
│   │   │   └── dashboard/            # Progreso del usuario
│   │   ├── hiragana/
│   │   │   ├── page.tsx              # Vista general
│   │   │   ├── tabla/page.tsx        # Tabla completa
│   │   │   ├── practica/[char]/page.tsx  # Canvas de dibujo
│   │   │   ├── quiz/page.tsx
│   │   │   └── vocabulario/page.tsx
│   │   ├── katakana/                 # Estructura idéntica a hiragana
│   │   ├── kanji/
│   │   │   ├── page.tsx
│   │   │   ├── [level]/page.tsx      # JLPT N5, N4, N3...
│   │   │   └── [level]/[kanji]/page.tsx
│   │   ├── gramatica/
│   │   │   ├── page.tsx
│   │   │   ├── lecciones/page.tsx
│   │   │   ├── particulas/page.tsx
│   │   │   ├── verbos/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── conjugaciones/page.tsx
│   │   │   │   └── [verb]/page.tsx
│   │   │   ├── adjetivos/page.tsx
│   │   │   ├── contadores/page.tsx
│   │   │   ├── expresiones/page.tsx
│   │   │   ├── condicionales/page.tsx
│   │   │   ├── formalidad/page.tsx
│   │   │   └── tiempo/page.tsx
│   │   ├── vocabulario/
│   │   │   ├── page.tsx
│   │   │   └── [category]/page.tsx
│   │   ├── jlpt/
│   │   │   └── [level]/page.tsx
│   │   ├── quiz/
│   │   │   ├── page.tsx
│   │   │   └── [type]/page.tsx
│   │   ├── api/                      # API Routes (Next.js)
│   │   │   ├── progress/route.ts
│   │   │   ├── quiz/route.ts
│   │   │   └── user/route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx                  # Home / Landing
│   │
│   ├── components/
│   │   ├── ui/                       # Componentes base (Button, Card, Badge...)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── BottomNav.tsx         # Versión mobile (replica Flutter bottom nav)
│   │   │   └── SakuraAnimation.tsx   # Animación de fondo
│   │   ├── hiragana/
│   │   │   ├── HiraganaTable.tsx
│   │   │   └── CharacterCard.tsx
│   │   ├── drawing/
│   │   │   ├── DrawingCanvas.tsx     # Reemplaza PracticeScreen de Flutter
│   │   │   ├── StrokeValidator.ts    # Lógica de validación de trazos
│   │   │   └── SvgGuide.tsx         # Muestra el SVG guía semitransparente
│   │   ├── quiz/
│   │   │   ├── QuizCard.tsx
│   │   │   ├── QuizResult.tsx
│   │   │   └── ParticleQuiz.tsx
│   │   ├── grammar/
│   │   │   ├── ConjugationTable.tsx
│   │   │   ├── ParticleCard.tsx
│   │   │   └── SentenceBuilder.tsx  # ⭐ Nuevo: construcción interactiva de oraciones
│   │   └── progress/
│   │       ├── StreakCounter.tsx
│   │       ├── LevelBadge.tsx
│   │       └── ProgressChart.tsx
│   │
│   ├── data/                         # Migración de constants.dart
│   │   ├── hiragana.ts               # Caracteres, stroke counts, vocabulario
│   │   ├── katakana.ts
│   │   ├── kanji/
│   │   │   ├── n5.ts
│   │   │   ├── n4.ts
│   │   │   └── n3.ts
│   │   ├── grammar/
│   │   │   ├── particles.ts
│   │   │   ├── verbs.ts
│   │   │   ├── conjugations.ts       # Migración de verb_conjugation_utils.dart
│   │   │   └── lessons.ts
│   │   └── vocabulary/
│   │       └── byLevel.ts
│   │
│   ├── hooks/
│   │   ├── useDrawingCanvas.ts       # Lógica de canvas de dibujo
│   │   ├── useQuiz.ts
│   │   ├── useProgress.ts
│   │   └── useSvgPath.ts             # Carga y parseo de SVGs
│   │
│   ├── lib/
│   │   ├── supabase.ts               # Cliente Supabase
│   │   ├── svgParser.ts              # Parseo de d="..." → Path2D
│   │   └── strokeValidator.ts        # Algoritmo de validación de trazos
│   │
│   ├── store/
│   │   ├── userStore.ts              # Zustand: usuario, preferencias
│   │   └── progressStore.ts          # Zustand: progreso por sección
│   │
│   └── types/
│       ├── japanese.ts               # KanjiEntry, VocabEntry, GrammarRule...
│       └── quiz.ts
│
├── public/
│   └── svg/
│       ├── hiragana/                 # あ.svg, い.svg, う.svg...
│       ├── katakana/
│       └── kanji/
│           ├── n5/
│           └── n4/
│
├── supabase/
│   └── migrations/                   # Schema de base de datos
│
├── .env.local
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🗃️ Base de Datos (Supabase / PostgreSQL)

```sql
-- Usuarios
users (id, email, name, created_at, settings jsonb)

-- Progreso por carácter
character_progress (
  user_id, character, script_type,
  attempts int, successes int,
  last_practiced timestamptz,
  stroke_accuracy float
)

-- Progreso de quizzes
quiz_sessions (
  id, user_id, quiz_type, score,
  total_questions, completed_at,
  answers jsonb
)

-- Vocabulario aprendido
vocabulary_progress (
  user_id, vocab_id, known bool,
  review_count int, next_review timestamptz  -- SRS básico
)

-- Asignaciones del profesor (feature futura)
assignments (
  id, teacher_id, student_email,
  type, config jsonb, due_date,
  completed bool
)
```

---

## ✏️ Sistema de Dibujo SVG → Canvas Web

La lógica de `PracticeScreen.dart` se traduce directamente a Web Canvas API:

```typescript
// hooks/useDrawingCanvas.ts
// El SVG d="M154.5,60.75..." se convierte en Path2D nativo del navegador
// Path2D acepta exactamente el mismo formato que Flutter's parseSvgPath()

const path2D = new Path2D(svgPathData) // ← equivalente a parseSvgPath(dAttribute)

// Validación de trazos: mismo algoritmo de tolerancia en píxeles
// Se usa ctx.isPointInStroke(path2D, x, y) → más eficiente que el loop de Flutter
```

Los SVGs del proyecto Flutter se migran tal cual a `public/svg/`. El navegador los renderiza nativamente sin librerías adicionales.

---

## 🗺️ Roadmap de Desarrollo

### Fase 1 — Fundación (Semanas 1-3)
- [ ] Setup Next.js 14 + TypeScript + Tailwind
- [ ] Migración de `constants.dart` → archivos TypeScript de datos
- [ ] Landing page con animación sakura (Framer Motion)
- [ ] Navegación principal (desktop + mobile)
- [ ] Tabla de Hiragana interactiva
- [ ] Tabla de Katakana interactiva
- [ ] Sistema de rutas y layouts

### Fase 2 — Núcleo de aprendizaje (Semanas 4-6)
- [ ] Canvas de dibujo (migración de `PracticeScreen.dart`)
  - Carga de SVGs, guía semitransparente
  - Captura de trazos con mouse y touch
  - Validación por tolerancia de píxeles
  - Contador de trazos y feedback visual
- [ ] Quiz de Hiragana y Katakana (4 tipos: selección, escritura, audio, imagen)
- [ ] Vocabulario por lecciones con FlashCards
- [ ] Página de Kanji por nivel JLPT

### Fase 3 — Gramática completa (Semanas 7-9)
- [ ] Migración de todas las pantallas de gramática:
  - Lecciones, Partículas, Oraciones, Verbos, Adjetivos
  - Contadores, Expresiones, Condicionales, Formalidad, Tiempo
- [ ] Tablas de conjugación interactivas (migración de `verb_conjugation_utils.dart`)
- [ ] Quiz de partículas (`ParticleQuizScreen`)
- [ ] Detalle de partículas con ejemplos contextualizados

### Fase 4 — Usuarios y progreso (Semanas 10-11)
- [ ] Auth con Supabase (email + Google)
- [ ] Dashboard de progreso del usuario
- [ ] Seguimiento de práctica de escritura (accuracy por carácter)
- [ ] Streak counter y sistema de rachas
- [ ] Historial de quizzes

### Fase 5 — Features diferenciadoras (Semanas 12-16)
- [ ] **Modo Profesor**: crear asignaciones para estudiantes
- [ ] **SRS básico** (Spaced Repetition System) para vocabulario
- [ ] **Constructor de oraciones** interactivo con arrastrar y soltar
- [ ] **Modo dictado**: reproducir audio y escribir el carácter
- [ ] **Rankings de clase**: tabla de posiciones entre alumnos del mismo profesor

### Fase 6 — Escalabilidad (Futuro)
- [ ] Integración con IA (generación de ejercicios personalizados via Claude API)
- [ ] Contenido N3, N2, N1
- [ ] App PWA (instalable en móvil)
- [ ] Sistema de clases/grupos para profesores
- [ ] Exportar reportes de progreso de alumnos

---

## 🚀 Deployment

```
Git (main branch) → Cloudflare Pages (auto-deploy)
                 → Supabase (base de datos en producción)
```

### Variables de entorno requeridas
```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

### Comandos
```bash
npm install
npm run dev        # Desarrollo local
npm run build      # Build de producción
npm run lint       # TypeScript + ESLint
```

---

## 🌸 Identidad Visual

- **Paleta**: Rosa sakura (#FFB7C5), rojo japón (#BC002D), blanco y negro con acentos dorados
- **Tipografía japonesa**: Noto Sans JP (Google Fonts)
- **Tipografía latina**: Inter o Plus Jakarta Sans
- **Animación de fondo**: pétalos de sakura cayendo (Framer Motion, particles)
- **Modo oscuro**: sí, desde Fase 1

---

## 📊 Diferenciadores vs Duolingo

| Feature | Duolingo | Esta Plataforma |
|---|---|---|
| Práctica de escritura con validación de trazos | ❌ | ✅ |
| Contenido 100% alineado con el profe | ❌ | ✅ |
| Quiz por sección específica del curso | ❌ | ✅ |
| Tablas de conjugación completas | Básico | ✅ Completo |
| Sistema de asignaciones por profesor | ❌ | ✅ (Fase 5) |
| Gramática explicada en profundidad | Superficial | ✅ |
| Sin mezcla de contenidos no vistos | ❌ | ✅ |
| Rankings entre compañeros de clase | ❌ | ✅ (Fase 5) |

---

## 📝 Notas del Desarrollador

- Los archivos SVG del proyecto Flutter (hiragana, katakana, kanji) se migran directamente a `public/svg/`. El browser los renderiza con `Path2D` sin ninguna librería adicional.
- El archivo `constants.dart` (~3866 líneas) se divide en múltiples archivos TypeScript tipados bajo `src/data/`. Esta migración es el primer paso crítico.
- El sistema de validación de trazos usa `CanvasRenderingContext2D.isPointInStroke()` que es más eficiente que el loop manual implementado en Flutter.
- Para touch en móvil se usan eventos `PointerEvent` que unifican mouse, touch y stylus.

---

*Built with ❤️ for Japanese language learners — 日本語を一緒に学ぼう！*
