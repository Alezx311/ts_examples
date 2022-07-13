"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortcuts_1 = require("../shortcuts");
const random_1 = require("../random");
const constants_1 = require("../constants");
const { RANDOM_SIZE, RANDOM_BOOL, RANDOM_VALUE, RANDOM_INTEGER, RANDOM_MAX, RANDOM_MIN, RANDOM_ARRAY, RANDOM_TEXT, RANDOM_STRING, INIT_INFO, } = constants_1.Constants;
const obj = { ...random_1.Random, name: "Random" };
const stats = (0, shortcuts_1.getClassStats)(obj);
const jsonObj = JSON.stringify(obj, null, "\t");
const jsonStats = JSON.stringify(stats, null, "\t");
describe("Module Stats and auto checks", () => {
    it(`${obj.name} -> IsDefined`, () => {
        expect(obj).toBeDefined();
    });
    it(`${obj.name} -> Stats`, () => {
        expect(stats).toBeDefined();
        expect(stats.initInfo).toBeDefined();
    });
    it(`${obj.name} -> JSON`, () => {
        expect(jsonObj).toBeDefined();
    });
    it(`${obj.name} -> JsonStats`, () => {
        expect(jsonStats).toBeDefined();
    });
    it(`${obj.name} -> Constants`, () => {
        const { constants } = stats;
        expect(constants).toBeDefined();
        expect(constants.length).toBeGreaterThan(0);
    });
    it(`${obj.name} -> Objects`, () => {
        const { objects } = stats;
        expect(objects).toBeDefined();
        expect(objects.length).toBeGreaterThan(0);
    });
});
describe(`${obj.name}`, () => {
    it(`${obj.name} is defined`, () => {
        expect(random_1.Random).toBeDefined();
    });
    it(`${obj.name} -> value`, () => {
        const value = random_1.Random.value(RANDOM_MAX, RANDOM_MIN);
        expect(value).toBeDefined();
        expect(value).toBeGreaterThanOrEqual(RANDOM_MIN);
        expect(value).toBeLessThanOrEqual(RANDOM_MAX);
    });
    it(`${obj.name} -> array`, () => {
        const value = random_1.Random.array(RANDOM_SIZE);
        expect(value).toBeDefined();
        expect(value.length).toEqual(RANDOM_SIZE);
        value.map((v) => {
            expect(v).toBeGreaterThan(0);
            expect(v).toBeLessThan(1);
        });
    });
    it(`${obj.name} -> value`, () => {
        const value = random_1.Random.value(RANDOM_MAX, RANDOM_MIN);
        expect(value).toBeDefined();
        expect(value).toBeGreaterThanOrEqual(RANDOM_MIN);
        expect(value).toBeLessThanOrEqual(RANDOM_MAX);
    });
    it(`${obj.name} -> valueMany`, () => {
        const values = random_1.Random.valueMany(RANDOM_SIZE, RANDOM_MAX, RANDOM_MIN);
        expect(values).toBeDefined();
        expect(values.length).toBeGreaterThan(0);
        values.map((v) => {
            expect(v).toBeTruthy();
            expect(v).toBeGreaterThanOrEqual(RANDOM_MIN);
            expect(v).toBeLessThanOrEqual(RANDOM_MAX);
        });
    });
    it(`${obj.name} -> powerOfTwo`, () => {
        const value = random_1.Random.powerOfTwo();
        expect(value).toBeDefined();
        expect(value).toBeTruthy();
        expect(value).toBeGreaterThanOrEqual(2);
    });
    it(`${obj.name} -> boolean`, () => {
        const value = random_1.Random.boolean();
        expect(value).toBeDefined();
        expect(typeof value === "boolean").toBe(true);
    });
    it(`${obj.name} -> arrayIndex`, () => {
        const value = random_1.Random.arrayIndex(RANDOM_ARRAY);
        expect(value).toBeDefined();
        expect(RANDOM_ARRAY[value]).toBeDefined();
    });
    it(`${obj.name} -> arrayElement`, () => {
        const value = random_1.Random.arrayElement(RANDOM_ARRAY);
        expect(value).toBeDefined();
        expect(RANDOM_ARRAY).toContain(value);
    });
    it(`${obj.name} -> arrayValues`, () => {
        const values = random_1.Random.arrayValues(RANDOM_ARRAY);
        expect(values).toBeDefined();
        expect(values.length).toBeGreaterThan(0);
        values.map((v) => {
            expect(RANDOM_ARRAY).toContain(v);
        });
    });
    it(`${obj.name} -> arrayUnicals`, () => {
        const value = random_1.Random.arrayUnicals(RANDOM_ARRAY);
        expect(value).toBeDefined();
        expect(value.length).toBeGreaterThan(0);
    });
    it(`${obj.name} -> arrayShuffle`, () => {
        const arr = Array(10)
            .fill(1)
            .map(() => Math.random() * Date.now());
        const value = random_1.Random.arrayShuffle(arr);
        expect(value).toBeDefined();
        expect(value.length).toEqual(arr.length);
        expect(arr).not.toBe(value);
    });
    it(`${obj.name} -> arrayPart`, () => {
        const value = random_1.Random.arrayPart(RANDOM_ARRAY);
        expect(value).toBeDefined();
        expect(value.length).toBeGreaterThanOrEqual(0);
    });
    it(`${obj.name} -> joinedStrings`, () => {
        const value = random_1.Random.joinedStrings(["SomeStr"], 2);
        expect(value).toBeDefined();
        expect(value.length).toBeGreaterThan(0);
    });
    it(`${obj.name} -> textLines`, () => {
        const value = random_1.Random.textLines(RANDOM_TEXT);
        expect(value).toBeDefined();
        expect(value).toBeTruthy();
    });
    it(`${obj.name} -> objectKey`, () => {
        const value = random_1.Random.objectKey(INIT_INFO);
        expect(value).toBeDefined();
        expect(value).toBeTruthy();
        expect(value.length).toBeGreaterThan(0);
        expect(INIT_INFO).toHaveProperty(value);
        expect(Object.keys(INIT_INFO)).toContain(value);
    });
    it(`${obj.name} -> objectValue`, () => {
        const value = random_1.Random.objectValue(INIT_INFO);
        expect(value).toBeDefined();
        expect(value).toBeTruthy();
        expect(Object.values(INIT_INFO)).toContain(value);
    });
    it(`${obj.name} -> objectEntry`, () => {
        const value = random_1.Random.objectEntry(INIT_INFO);
        expect(value).toBeDefined();
        expect(value).toBeTruthy();
        expect(value.length).toBeGreaterThan(1);
        expect(INIT_INFO).toHaveProperty(value[0]);
    });
});
