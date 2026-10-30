import en from "./en";
import fa from "./fa";
import { DEFAULT_LOCALE } from "@/lib/site";

const dictionaries = { en, fa };

export function getDictionary(lang) {
  return dictionaries[lang] ?? dictionaries[DEFAULT_LOCALE];
}
