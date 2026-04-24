import type { JlptLevel, JlptMockBlueprint } from "./types";

export const JLPT_MOCK_BLUEPRINTS: Record<JlptLevel, JlptMockBlueprint> = {
  N5: {
    level: "N5",
    title: "Mini simulacro N5",
    description: "Versión inicial generada desde el banco propio. El tamaño se puede ampliar cuando el pool crezca.",
    sections: [
      {
        section: "vocabulary",
        minutes: 20,
        items: [
          { itemType: "kanji-reading", count: 2 },
          { itemType: "orthography", count: 1 },
          { itemType: "context-expression", count: 2 },
        ],
      },
      {
        section: "grammar",
        minutes: 40,
        items: [
          { itemType: "form-selection", count: 2 },
          { itemType: "sentence-composition", count: 1 },
          { itemType: "text-grammar", count: 1 },
        ],
      },
      {
        section: "reading",
        minutes: 20,
        items: [
          { itemType: "short-passage", count: 2 },
          { itemType: "information-retrieval", count: 1 },
        ],
      },
      {
        section: "listening",
        minutes: 15,
        items: [
          { itemType: "task-based-listening", count: 1 },
          { itemType: "quick-response", count: 1 },
        ],
      },
    ],
  },
  N4: {
    level: "N4",
    title: "Mini simulacro N4",
    description: "Blueprint preparado para cuando se agregue el banco N4.",
    sections: [],
  },
  N3: {
    level: "N3",
    title: "Mini simulacro N3",
    description: "Blueprint preparado para cuando se agregue el banco N3.",
    sections: [],
  },
  N2: {
    level: "N2",
    title: "Mini simulacro N2",
    description: "Blueprint preparado para cuando se agregue el banco N2.",
    sections: [],
  },
  N1: {
    level: "N1",
    title: "Mini simulacro N1",
    description: "Blueprint preparado para cuando se agregue el banco N1.",
    sections: [],
  },
};
