import { A, N, O, S, U } from "../global";

export const initStats = (desc: S) => {
  const time = Date.now();
  const timestamp = new Date(time);
  const filename = __filename;
  const dirname = __dirname;

  return { desc, time, timestamp, filename, dirname };
};

export const objKeys = <T extends O, K extends keyof T>(obj: T): A<K> =>
  Object.keys(obj) as A<K>;
export const objValues = <T extends O, K extends keyof T>(obj: T): A<T[K]> =>
  Object.values(obj) as A<T[K]>;
export const objEntries = <T extends O, K extends keyof T>(
  obj: T
): A<[K, T[K]]> => Object.entries(obj) as A<[K, T[K]]>;

export const OBJ_STATS = <T extends O>(obj: T, opt?: O) => ({
  obj,
  name: opt?.name || obj?.name || obj?.constructor?.name,
  path: opt?.path || __filename,
  depth: opt?.depth || 0,
  keys: Object.keys(obj),
  values: Object.values(obj),
});

export const getClassStats = <T extends O, K extends keyof T>(classObj: T) => {
  const name = `${classObj?.name ?? classObj?.constructor?.name ?? __filename}`;
  const initInfo = initStats(name);
  const pathMain = `${initInfo.filename} -> ${name}`;
  const depth = 0;
  const typeOf = typeof classObj;
  const keys = Object.keys(classObj) as A<K>;
  const values = keys
    .map((key, index: N) => ({
      key,
      value: classObj[key],
      index,
      path: `${pathMain} -> ${key as S}`,
      depth: depth + 1,
      typeOf: typeof classObj[key],
    }))
    .map((v) => ({
      ...v,
      isMethod: v.typeOf === "function",
      isObject: v.typeOf === "object",
      keys: Object.keys(v) || [],
    }));
  const methods = values.filter((v) => v.isMethod === true);
  const objects = values.filter((v) => v.isObject === true);
  const constants = values.filter(
    (v) => v.isObject === false && v.isMethod === false
  );
  const stats = {
    initInfo,
    classObj,
    name,
    pathMain,
    depth,
    typeOf,
    keys,
    values,
    methods,
    objects,
    constants,
  };

  return stats;
};
