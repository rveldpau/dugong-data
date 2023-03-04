import { ConvertDataSchemaToType, DataSchema } from "../data/DataSchema";
import { CommandApplier } from "./CommandApplier";

export type CommandDefinition<CommandId extends string, DATA_SCHEMA extends DataSchema, Properties extends DataSchema> = {
    command: CommandId,
    dataSchema: DATA_SCHEMA,
    properties: Properties,
    apply: CommandApplier<DATA_SCHEMA, CommandId, ConvertDataSchemaToType<Properties>>
}

export function generateCommandDefinition<CommandId extends string, DATA_SCHEMA extends DataSchema, Properties extends DataSchema>(
    definitionMetadata: Omit<CommandDefinition<CommandId, DATA_SCHEMA, Properties>, "apply">,
    apply: CommandApplier<DATA_SCHEMA, CommandId, ConvertDataSchemaToType<Properties>>
): CommandDefinition<CommandId, DATA_SCHEMA, Properties> {
    return {
        ...definitionMetadata,
        apply
    };
}

