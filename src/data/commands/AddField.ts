import { generateCommandDefinition } from "../../command/Command";
import { DomainUnit } from "../DomainUnit";

export const AddFieldCommand = generateCommandDefinition({
    command: "addField",
    entityType: "domainUnit",
    properties: {
        "fieldName": "string"
    }
}, (entity:DomainUnit, command) => {
    return {...entity,
        data: {
            fields: [
                ...entity.data.fields, { name: { en: command.fieldName }, type: "string" as const  }
            ]
        }
    };
});
