import { DataSchema } from "./DataSchema";
import { I18nAble } from "../i18n/I18n";
import { Entity } from "../entity/Entity";

export type DomainUnit = Entity<"domainUnit"> & {
    name: I18nAble
    data: DataSchema
}