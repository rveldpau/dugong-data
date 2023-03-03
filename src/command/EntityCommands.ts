import { Entity } from "../entity/Entity";
import { CommandDefinition, CommandPropertyStructure } from "./Command";

export type EntityCommands<EntityType extends Entity<string>> = [
    CommandDefinition<string, EntityType, CommandPropertyStructure>
]
