import { Locale, LocaleInfo, Dictionary } from "./types";
import { en } from "./en";
import { tr } from "./tr";

export * from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  tr,
  en,
};

export const locales: LocaleInfo[] = [
  {
    code: "tr",
    label: "Turkish",
    nativeName: "Türkçe",
    flag: "🇹🇷",
  },
  {
    code: "en",
    label: "English",
    nativeName: "English",
    flag: "🇬🇧",
  },
];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.tr;
}
