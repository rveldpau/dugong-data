import { I18nCulture } from "../../src/i18n/I18n";
import { translate } from "../../src/i18n/Translator";

describe("Translator", () => {
    test("Perfect match", () => {
        const result = translate({"en_CA": "Test", "en_US": "Not good"}, "en_CA");
        expect(result).toEqual("Test");
    });

    test("Perfect match on Second", () => {
        const result = translate({"en_CA": "Not good", "en_US": "Test"}, "en_US");
        expect(result).toEqual("Test");
    });

    test("Match on Language", () => {
        const result = translate({"en": "Language Match"}, "en_US");
        expect(result).toEqual("Language Match");
    });

    test("Similar language match", () => {
        const result = translate({"en_CA": "Default"}, "en_US");
        expect(result).toEqual("Default");
    });

    test("No match", () => {
        const result = translate({"en_CA": "Default"}, "ru_RU" as I18nCulture);
        expect(result).toEqual("Default");
    });

    test("No translations", () => {
        try{
            translate({}, "en");
            fail("Should have thrown an exception because we need translations");
        }catch(e){
            expect((e as Error).message).toEqual("No translations available");
        }
    });
});