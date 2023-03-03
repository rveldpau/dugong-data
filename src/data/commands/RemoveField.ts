import { generateCommandDefinition } from "../../command/Command";
import { DomainUnit } from "../DomainUnit";

export const RemoveFieldCommand = generateCommandDefinition({
    command: "removeField",
    entityType: "domainUnit",
    properties: {
        "fieldName": "string"
    }
}, (entity:DomainUnit, command) => {
    return {...entity,
        data: {
            fields: entity.data.fields.filter(field => field.name !== command.fieldName)
        }
    };
});
