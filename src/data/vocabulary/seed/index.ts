
import type { VocabularyEntry } from "../types";
import { BODY_VOCAB } from "./body";
import { COLOR_VOCAB } from "./colors";
import { CORE_NOUN_VOCAB } from "./core-nouns";
import { COUNTRY_VOCAB } from "./countries";
import { EMOTION_VOCAB } from "./emotions";
import { FAMILY_VOCAB } from "./family";
import { GREETING_VOCAB } from "./greetings";
import { NATIONALITY_VOCAB } from "./nationalities";
import { PROFESSION_VOCAB } from "./professions";
import { TRANSPORT_VOCAB } from "./transport";

export const MANUAL_VOCAB_ENTRIES: VocabularyEntry[] = [
  ...CORE_NOUN_VOCAB,
  ...COUNTRY_VOCAB,
  ...NATIONALITY_VOCAB,
  ...PROFESSION_VOCAB,
  ...COLOR_VOCAB,
  ...FAMILY_VOCAB,
  ...BODY_VOCAB,
  ...EMOTION_VOCAB,
  ...TRANSPORT_VOCAB,
  ...GREETING_VOCAB,
];
