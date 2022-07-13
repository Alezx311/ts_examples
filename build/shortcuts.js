"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassStats = exports.OBJ_STATS = exports.objEntries = exports.objValues = exports.objKeys = exports.initStats = void 0;
const initStats = (desc) => {
    const time = Date.now();
    const timestamp = new Date(time);
    const filename = __filename;
    const dirname = __dirname;
    return { desc, time, timestamp, filename, dirname };
};
exports.initStats = initStats;
const objKeys = (obj) => Object.keys(obj);
exports.objKeys = objKeys;
const objValues = (obj) => Object.values(obj);
exports.objValues = objValues;
const objEntries = (obj) => Object.entries(obj);
exports.objEntries = objEntries;
const OBJ_STATS = (obj, opt) => ({
    obj,
    name: opt?.name || obj?.name || obj?.constructor?.name,
    path: opt?.path || __filename,
    depth: opt?.depth || 0,
    keys: Object.keys(obj),
    values: Object.values(obj),
});
exports.OBJ_STATS = OBJ_STATS;
const getClassStats = (classObj) => {
    const name = `${classObj?.name ?? classObj?.constructor?.name ?? __filename}`;
    const initInfo = (0, exports.initStats)(name);
    const pathMain = `${initInfo.filename} -> ${name}`;
    const depth = 0;
    const typeOf = typeof classObj;
    const keys = Object.keys(classObj);
    const values = keys
        .map((key, index) => ({
        key,
        value: classObj[key],
        index,
        path: `${pathMain} -> ${key}`,
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
    const constants = values.filter((v) => v.isObject === false && v.isMethod === false);
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
exports.getClassStats = getClassStats;
