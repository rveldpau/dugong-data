import { Entity } from "../entity/Entity";
import { EntityId } from "../entity/Id";
import { CommandApplier } from "./CommandApplier";

export type CommandPropertyPrimitives = "string" | "number"
export type CommandPropertyStructure = { [key:string]: CommandProperty}
export type CommandPropertyIterables = (CommandPropertyPrimitives | CommandPropertyStructure)[]
export type CommandProperty = CommandPropertyPrimitives | CommandPropertyIterables | CommandPropertyStructure

export type ConvertCommandPropertyToType<prop extends CommandProperty> = 
    prop extends "string" ? string : 
        ( prop extends "number" ? number :
            ( prop extends CommandPropertyIterables ? ConvertCommandPropertyToType<prop[0]>[] : 
                ( prop extends CommandPropertyStructure ? { [key in keyof prop]: ConvertCommandPropertyToType<prop[key]> }
                    : never
                )
            )
        )

export type CommandDefinition<CommandId extends string, EntityType extends Entity<string>, Properties extends CommandPropertyStructure> = {
    command: CommandId,
    entityType: EntityType["type"],
    properties: Properties,
    apply: CommandApplier<EntityType, CommandId, ConvertCommandPropertyToType<Properties>>
}

export function generateCommandDefinition<EntityType extends Entity<string>, CommandId extends string, Properties extends CommandPropertyStructure>(
    definitionMetadata: Omit<CommandDefinition<CommandId, EntityType, Properties>, "apply">,
    apply: CommandApplier<EntityType, CommandId, ConvertCommandPropertyToType<Properties>>
): CommandDefinition<CommandId, EntityType, Properties> {
    return {
        ...definitionMetadata,
        apply
    };
}

