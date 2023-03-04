import { DataSchema } from "../data/DataSchema";
import { CommandDefinition, generateCommandDefinition } from "./Command";

export type EntityCommands<DATA_SCHEMA extends DataSchema> = Record<string, CommandDefinition<string, DATA_SCHEMA, DataSchema>>;

export type EntityCommandsBuilder<DATA_SCHEMA extends DataSchema, EXISTING_COMMANDS extends EntityCommands<DATA_SCHEMA>> = {
    commands: EXISTING_COMMANDS,
    addComand: <COMMAND_KEY extends string, PROPERTIES extends DataSchema
    > (
        key: Parameters<typeof generateCommandDefinition<COMMAND_KEY, DATA_SCHEMA, PROPERTIES>>[0],
        command: Parameters<typeof generateCommandDefinition<COMMAND_KEY, DATA_SCHEMA, PROPERTIES>>[1]
    ) => EntityCommandsBuilder<DATA_SCHEMA, EXISTING_COMMANDS & Record<COMMAND_KEY, CommandDefinition<COMMAND_KEY, DATA_SCHEMA, PROPERTIES>>>
}

function createEntityCommandsBuilder<DATA_SCHEMA extends DataSchema, COMMANDS extends EntityCommands<DATA_SCHEMA>>(entityCommands: COMMANDS): EntityCommandsBuilder<DATA_SCHEMA, COMMANDS>{
    return {
        addComand: (key, command) => createEntityCommandsBuilder({
            ...entityCommands,
            [key.command]: generateCommandDefinition(key,command)
        }),
        commands: entityCommands
    };
}

export function createEntityCommands<DATA_SCHEMA extends DataSchema>(schema: DATA_SCHEMA) : EntityCommandsBuilder<DATA_SCHEMA, Record<string, never>> {
    console.log(schema);
    return createEntityCommandsBuilder({});
}


