import { I18nAble } from "../i18n/I18n"

export type Option<VALUETYPE extends any = string> = {
    value: VALUETYPE,
    text: I18nAble
}