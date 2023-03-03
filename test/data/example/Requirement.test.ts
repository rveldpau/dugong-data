import { createDataElement } from "../../../src/data/DataElement";
import { addFieldToSchema, ConvertDataSchemaToType, createDataSchema, DataSchema } from "../../../src/data/DataSchema";

describe("Domain Unit: Requirement Example", () => {
    test("Create schema", () => {
        const schema = createDataSchema()
            .addField("id", createDataElement("number", { name: {en: "A unique identifier"}}))
            .addField("name", createDataElement("string", { name: {en: "String"}}))
            .dataSchema

        const value: ConvertDataSchemaToType<typeof schema> = {
            id: 5,
            name: "Some name"
        }

        expect(value.id).toEqual(5);
        expect(value.name).toEqual("Some name");
    });
});