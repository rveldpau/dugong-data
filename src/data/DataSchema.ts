import { I18nAble } from "../i18n/I18n";

export type DataType = "string";

export type DataField = {
    name: I18nAble,
    type: DataType
}

export type DataSchema = {
    fields: DataField[]
}