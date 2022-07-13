export type NO = null | undefined;
export type U = unknown;
export type U = unknown;

export type B = boolean;
export type N = number;
export type S = string;
export type O = Record<S, U>;
export type A<T = U> = Array<T>;
export type P<T> = Promise<T>;
export type F = () => {};
export type Truthy<T> = NonNullable<T>;

// | "string"
// | "number"
// | "bigint"
// | "boolean"
// | "symbol"
// | "undefined"
// | "object"
// | "function";
