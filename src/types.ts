export type NO = null | undefined;
export type U = unknown;

export type B = boolean;
export type N = number;
export type S = string;
export type O = Record<S, U>;
export type A<T = any> = Array<T>;

export type TypeOf =
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function";
