import { Option } from "./Option";

const Primitives = [{
    value:"string",
    text: { en : "Text"}
},{
    value:"number",
    text: { en : "Number"}
}] as const;

export type PrimitiveType = typeof Primitives[number]["value"];
export const PrimitiveOptions = Primitives as Readonly<Option[]>;