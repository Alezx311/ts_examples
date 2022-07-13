import { A, B, N, O, S, U } from "../global";

export class Validate {
  static isNumber = (v: U): v is N => typeof v === "number";
  static isString = (v: U): v is S => typeof v === "string";
  static isObject = (v: U): v is O => typeof v === "object";
  static isArray = (v: U): v is A => typeof v === "object" && Array.isArray(v);
  static isFunction = (v: U): v is Function => typeof v === "function";
  static isBoolean = (v: U): v is B => typeof v === "boolean";
  static isNull = (v: U): v is null => typeof v === "object" && v === null;
  static isUndefined = (v: U): v is undefined => typeof v === "undefined";
  static isTruthy = (v: U): v is NonNullable<any> => !!v;
  static isEqual = (v: U, v2: U = null): v is typeof v2 =>
    typeof v === typeof v2 && v === v2;
  static isExists = (v: U) => typeof v !== "undefined";
  static isEmpty = (v: U) => this.isString(v) && !v.length;
}
