"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortcuts_1 = require("../shortcuts");
const validate_1 = require("../validate");
const obj = { ...validate_1.Validate, name: "Validate" };
const stats = (0, shortcuts_1.getClassStats)(obj);
const jsonObj = JSON.stringify(obj, null, "\t");
const jsonStats = JSON.stringify(stats, null, "\t");
describe("Module Stats and auto checks", () => {
    describe("Stats", () => {
        it(`${obj.name} Exists`, () => {
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
        });
        it(`${obj.name} -> Objects`, () => {
            const { objects } = stats;
            expect(objects).toBeDefined();
        });
        it(`${obj.name} -> Keys`, () => {
            Object.keys(obj).map((key) => {
                expect(key).toBeDefined();
                expect(obj[key]).toBeDefined();
            });
        });
    });
    describe("Validate", () => {
        it("isNumber", () => {
            expect(validate_1.Validate.isNumber(123)).toBe(true);
        });
        it("isString", () => {
            expect(validate_1.Validate.isString(123)).toBe(false);
        });
        it("isObject", () => {
            expect(validate_1.Validate.isObject(123)).toBe(false);
        });
        it("isArray", () => {
            expect(validate_1.Validate.isArray(123)).toBe(false);
        });
        it("isFunction", () => {
            expect(validate_1.Validate.isFunction(123)).toBe(false);
        });
        it("isBoolean", () => {
            expect(validate_1.Validate.isBoolean(123)).toBe(false);
        });
        it("isNull", () => {
            expect(validate_1.Validate.isNull(123)).toBe(false);
        });
        it("isUndefined", () => {
            expect(validate_1.Validate.isUndefined(123)).toBe(false);
        });
        it("isTruthy", () => {
            expect(validate_1.Validate.isTruthy(0)).toBe(false);
        });
        it("isEqual", () => {
            expect(validate_1.Validate.isEqual(123, 124)).toBe(false);
        });
        it("isExists", () => {
            expect(validate_1.Validate.isExists(undefined)).toBe(false);
        });
        it("isEmpty", () => {
            expect(validate_1.Validate.isEmpty(123)).toBe(false);
        });
    });
});
