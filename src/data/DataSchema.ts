import { ConvertDataElementToType, DataElement } from "./DataElement";

export type DataSchema = Record<string, DataElement>

export function addFieldToSchema<
    ELEMENT_KEY extends string,
    DATA_ELEMENT extends DataElement,
    EXISTING_SCHEMA extends DataSchema,
> (
    key: ELEMENT_KEY,
    dataElement: DATA_ELEMENT,
    existing: EXISTING_SCHEMA
):
    EXISTING_SCHEMA & Record<ELEMENT_KEY, DATA_ELEMENT>
{
    return {
        ...existing,
        [key]: dataElement
    };
}

export type DataSchemaBuilder<EXISTING_SCHEMA extends DataSchema> = {
    dataSchema: EXISTING_SCHEMA,
    addField: <
        ELEMENT_KEY extends string, 
        DATA_ELEMENT extends DataElement
    > (
        key: ELEMENT_KEY,
        dataElement: DATA_ELEMENT
    ) => DataSchemaBuilder<EXISTING_SCHEMA & Record<ELEMENT_KEY, DATA_ELEMENT>>
}

function createDataSchemaBuilder<DATA_SCHEMA extends DataSchema>(dataSchema: DATA_SCHEMA): DataSchemaBuilder<DATA_SCHEMA>{
    return {
        addField: (key, element) => createDataSchemaBuilder(addFieldToSchema(key,element,dataSchema)),
        dataSchema
    };
}

export function createDataSchema(): DataSchemaBuilder<DataSchema> {
    return createDataSchemaBuilder({});
}

export type ConvertDataSchemaToType<DATA_SCHEMA extends DataSchema> = {
    [K in keyof DATA_SCHEMA]: ConvertDataElementToType<DATA_SCHEMA[K]>
}