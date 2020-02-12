
import { stringify } from "./stringify";
import { parse,replacer, isArray, isString, isObject, isBufferLike} from "./parser";

module.exports = {
    parse,
    stringify,
    replacer,
    isArray,
    isString,
    isObject,
    isBufferLike
}