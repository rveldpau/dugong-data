export const SupportedLanguages = ["en"] as const;
export const SupportedLocales = ["CA", "US"] as const;

export type I18nLanguage = typeof SupportedLanguages[number];
export type I18nLocale = typeof SupportedLocales[number];
export type I18nCulture = I18nLanguage | `${I18nLanguage}_${I18nLocale}`;

export const SupportedCultures: I18nCulture[] = SupportedLanguages.flatMap(lang => SupportedLocales.map(locale => `${lang}_${locale}` as I18nCulture ) );

export type I18nAble = Partial<Record<I18nCulture, string>>;