import { getClassStats } from "../shortcuts";

import { FileSystemHelpers } from "../files";
import { Validate } from "../validate";

const obj = { ...Validate, name: "Validate" };
const stats = getClassStats(obj);
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
      expect(Validate.isNumber(123)).toBe(true);
    });
    it("isString", () => {
      expect(Validate.isString(123)).toBe(false);
    });
    it("isObject", () => {
      expect(Validate.isObject(123)).toBe(false);
    });
    it("isArray", () => {
      expect(Validate.isArray(123)).toBe(false);
    });
    it("isFunction", () => {
      expect(Validate.isFunction(123)).toBe(false);
    });
    it("isBoolean", () => {
      expect(Validate.isBoolean(123)).toBe(false);
    });
    it("isNull", () => {
      expect(Validate.isNull(123)).toBe(false);
    });
    it("isUndefined", () => {
      expect(Validate.isUndefined(123)).toBe(false);
    });
    it("isTruthy", () => {
      expect(Validate.isTruthy(0)).toBe(false);
    });
    it("isEqual", () => {
      expect(Validate.isEqual(123, 124)).toBe(false);
    });
    it("isExists", () => {
      expect(Validate.isExists(undefined)).toBe(false);
    });
    it("isEmpty", () => {
      expect(Validate.isEmpty(123)).toBe(false);
    });
  });
});
