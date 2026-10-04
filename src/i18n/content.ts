import type { Locale } from "./locales";
import type { Content } from "./types";

import { content as en } from "./content/en";
import { content as it } from "./content/it";
import { content as de } from "./content/de";
import { content as fr } from "./content/fr";
import { content as nl } from "./content/nl";
import { content as es } from "./content/es";

const all: Record<Locale, Content> = { en, it, de, fr, nl, es };

export function getContent(locale: Locale): Content {
  return all[locale] ?? all.en;
}
