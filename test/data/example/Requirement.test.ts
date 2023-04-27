import { createEntityCommands } from "../../../src/command/EntityCommands";
import { createDataElement } from "../../../src/data/DataElement";
import { ConvertDataSchemaToType, createDataSchema } from "../../../src/data/DataSchema";
import { Entity } from "../../../src/entity/Entity";

describe("Domain Unit: Requirement Example", () => {
    test("Create Data schema", () => {
        const schema = createDataSchema()
            .addField("id", createDataElement("number", { name: {en: "A unique identifier"}}))
            .addField("name", createDataElement("string", { name: {en: "String"}}))
            .dataSchema;

        const value: ConvertDataSchemaToType<typeof schema> = {
            id: 5,
            name: "Some name"
        };

        expect(value.id).toEqual(5);
        expect(value.name).toEqual("Some name");
    });

    test("Create Commands", () => {
        const schema = createDataSchema()
            .addField("id", createDataElement("number", { name: {en: "A unique identifier"}}))
            .addField("name", createDataElement("string", { name: {en: "String"}}))
            .dataSchema;

        const commands = createEntityCommands(schema)
            .addComand({ command: "update", dataSchema: schema, properties: { 
                "element": { name: {en:"Element"}, type:"string"}, 
                "value": { name: {en:"Value"}, type:"string"}, 
            } }, (entity, command) => {
                return {
                    ...entity,
                    name: command.value
                };
            })
            .addComand({ command: "doSomething", dataSchema: schema, properties: {} }, (entity) => {
                return entity;
            })
            .commands;

        const value: Entity<"req",typeof schema> = {
            entityType: "req",
            entityId: "12-31-2-4-3",
            id: 5,
            name: "Some name"
        };

        const result = commands.update.apply(value, { commandId: "update", element: "name", value:"Something New" });

        expect(result.name).toEqual("Something New");
    });
});