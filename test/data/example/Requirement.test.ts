import { DataSchema } from "../../../src/data/DataSchema";

describe("Domain Unit: Requirement Example", () => {
    test("Create schema", () => {
        const requirementSchema: DataSchema = {
            fields: [
                { name: {en_CA: "Name"}, type: "string" }
            ]
        };
        console.log("Schema", requirementSchema);
    });
});