import { Locale, LocaleInfo, Dictionary } from "./types";
import { en } from "./en";
import { tr } from "./tr";

export * from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  tr,
};

export const locales: LocaleInfo[] = [
  {
    code: "en",
    label: "English",
    nativeName: "English",
    flag: "🇬🇧",
  },
  {
    code: "tr",
    label: "Turkish",
    nativeName: "Türkçe",
    flag: "🇹🇷",
  },
];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
