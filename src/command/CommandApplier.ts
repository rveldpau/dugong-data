import { Entity } from "../entity/Entity";

export type Command<CommandId extends string, PROPERTIES extends Record<string, unknown>> = PROPERTIES & {
    commandId: CommandId,
};

export type CommandApplier<
    ENTITY extends Entity<string, Record<string, unknown>>,
    COMMANDID extends string,
    PROPERTIES extends Record<string, unknown>,
> = (entity:ENTITY, command: Command<COMMANDID, PROPERTIES>) => ENTITY