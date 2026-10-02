// Languages offered through Google Translate. English, French and Portuguese are the
// program's core languages, Swahili is widely spoken across the region, and the rest
// complete the ten most widely spoken languages.
export const SOURCE_LANGUAGE = "en";

export const LANGUAGES = [
  { code: "en", name: "English", native: "English" },
  { code: "fr", name: "French", native: "Français" },
  { code: "pt", name: "Portuguese", native: "Português" },
  { code: "sw", name: "Swahili", native: "Kiswahili" },
  { code: "es", name: "Spanish", native: "Español" },
  { code: "ar", name: "Arabic", native: "العربية" },
  { code: "zh-CN", name: "Chinese", native: "中文" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "ru", name: "Russian", native: "Русский" },
  { code: "ur", name: "Urdu", native: "اردو" },
] as const;
