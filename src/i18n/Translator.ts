import { I18nAble, I18nCulture, I18nLanguage } from "./I18n";

function getLanguageFromCulture(culture:I18nCulture):I18nLanguage{
    return culture.split("_")[0] as I18nLanguage;
}

function determineBestSupportedCulture(requestedCulture: I18nCulture, supportedCultures: I18nCulture[]):I18nCulture{
    if(supportedCultures.includes(requestedCulture)){
        return requestedCulture;
    }

    const requestedLanguage = getLanguageFromCulture(requestedCulture);
    const supportedLanguage = supportedCultures.find(culture => getLanguageFromCulture(culture) === requestedLanguage);
    if(supportedLanguage){
        return supportedLanguage;
    }

    return supportedCultures[0];
}

export function translate(translations:I18nAble, requestedLanguage: I18nCulture):string{
    const supportedCultures = Object.keys(translations) as I18nCulture[];
    if(supportedCultures.length === 0){
        throw new Error("No translations available");
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return translations[determineBestSupportedCulture(requestedLanguage, supportedCultures)]!;
}