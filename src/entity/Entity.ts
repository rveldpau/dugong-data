import { ConvertDataSchemaToType, DataSchema } from "../data/DataSchema";
import { EntityType } from "./EntityType";
import { EntityId } from "./Id";

export type EntityDefinition<Type extends EntityType, EntityDetails extends DataSchema> = {entityType: Type, data: EntityDetails};

export type Entity<Type extends EntityType, EntityDetails extends DataSchema> = ConvertDataSchemaToType<EntityDetails> & {entityType: Type, entityId: EntityId};