import { EntityType } from "./EntityType";
import { EntityId } from "./Id";

// eslint-disable-next-line @typescript-eslint/ban-types
export type Entity<Type extends EntityType, EntityDetails extends Record<string, unknown> = {}> = EntityDetails & {type: Type, id: EntityId};