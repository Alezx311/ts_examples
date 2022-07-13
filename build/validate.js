"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
class Validate {
    static isNumber = (v) => typeof v === "number";
    static isString = (v) => typeof v === "string";
    static isObject = (v) => typeof v === "object";
    static isArray = (v) => typeof v === "object" && Array.isArray(v);
    static isFunction = (v) => typeof v === "function";
    static isBoolean = (v) => typeof v === "boolean";
    static isNull = (v) => typeof v === "object" && v === null;
    static isUndefined = (v) => typeof v === "undefined";
    static isTruthy = (v) => !!v;
    static isEqual = (v, v2) => typeof v === typeof v2 && v === v2;
    static isExists = (v) => typeof v !== "undefined";
    static isEmpty = (v) => this.isString(v) && !v.length;
}
exports.Validate = Validate;
