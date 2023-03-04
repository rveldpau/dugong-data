import { DataSchema } from "../data/DataSchema";
import { Entity } from "../entity/Entity";

export type Command<CommandId extends string, PROPERTIES extends Record<string, unknown>> = PROPERTIES & {
    commandId: CommandId,
};

export type CommandApplier<
    DATA_SCHEMA extends DataSchema,
    COMMANDID extends string,
    PROPERTIES extends Record<string, unknown>,
> = (entity:Entity<string, DATA_SCHEMA>, command: Command<COMMANDID, PROPERTIES>) => Entity<string, DATA_SCHEMA>