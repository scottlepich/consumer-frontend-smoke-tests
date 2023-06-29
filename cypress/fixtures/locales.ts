const locales = [
  "de-DE",
  "en-AU",
  "en-CA",
  "en-GB",
  "en-IE",
  "en-US",
  "es-ES",
  "es-MX",
  "fr-CA",
  "fr-FR",
  "it-IT",
  "ja-JP",
  "nl-NL",
  "zh-TW",
] as const;

export default locales;

export type Locale = (typeof locales)[number];
