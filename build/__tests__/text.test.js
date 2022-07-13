"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const shortcuts_1 = require("../shortcuts");
const text_1 = require("../text");
const moduleObj = text_1.Text;
const desc = moduleObj?.name ?? moduleObj?.constructor?.name ?? "Text";
const obj = { ...moduleObj, desc };
const stats = (0, shortcuts_1.getClassStats)(obj);
const jsonObj = JSON.stringify(obj, null, "\t");
const jsonStats = JSON.stringify(stats, null, "\t");
describe("Module Stats and auto checks", () => {
    it(`${desc} -> Is Defined`, () => {
        expect(obj).toBeDefined();
    });
    it(`${desc} -> Stats`, () => {
        expect(stats).toBeDefined();
    });
    it(`${desc} -> JSON`, () => {
        expect(jsonObj).toBeDefined();
    });
    it(`${desc} -> JsonStats`, () => {
        expect(jsonStats).toBeDefined();
    });
    it(`${desc} -> Text`, () => {
        const { constants } = stats;
        expect(constants).toBeDefined();
        expect(constants.length).toBeGreaterThan(0);
    });
    it(`${desc} -> Objects`, () => {
        const { objects } = stats;
        expect(objects).toBeDefined();
    });
});
// Manual Tests
describe(`${desc} -> Manual`, () => {
    const PROPERTIES = Object.keys(obj).filter(Boolean);
    it("Have properties", () => {
        expect(PROPERTIES).toBeDefined();
        expect(PROPERTIES.length).toBeGreaterThan(0);
    });
    const TEXT = constants_1.Constants.RANDOM_TEXT;
    const LINES = constants_1.Constants.RANDOM_LINES;
    PROPERTIES.map((key) => {
        it(`Text -> ${key}`, () => {
            const value = obj[key];
            expect(key.length).toBeGreaterThan(0);
            expect(value).toBeDefined();
            expect(obj).toHaveProperty(key);
            expect(typeof value).toBeTruthy();
            if (typeof value === "function") {
            }
        });
    });
    it("Test output results", () => { });
});
