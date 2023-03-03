import { I18nAble } from "../i18n/I18n";
import { PrimitiveType } from "./Primitives";

export type DataElementType = PrimitiveType;

export type DataElement<DATATYPE extends DataElementType = DataElementType> = {
    name: I18nAble,
    type: DATATYPE
}

export type InferDataType<DATATYPE extends DataElementType> = DATATYPE extends "string" ? string : number
export type ConvertDataElementToType<DATAELEMENT extends DataElement> = InferDataType<DATAELEMENT["type"]>

export function createDataElement<DATATYPE extends DataElementType>(type: DATATYPE, properties: Omit<DataElement<DATATYPE>, "type">): DataElement<DATATYPE> {
    return {
        ...properties,
        type
    };
}