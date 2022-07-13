import { Constants } from "../constants";
import { getClassStats } from "../shortcuts";

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

  describe("Validate types", () => {
    const validateKeys = Object.keys(Validate);
    const values = Object.keys(Constants.VALUES_PRIMITIVE).map((key) => {
      const value = Constants.VALUES_PRIMITIVE[key];
      const type = typeof value;
      const truthy = !!value;

      return { key, value, type, truthy };
    });

    it("Simple values test", () => {
      values.map((v) => {
        expect(Validate.isString(v.key)).toBe(true);
        expect(Validate.isTruthy(v.value)).toBe(v.truthy);
        expect(Validate.isExists(v.value)).not.toBeNull();
        expect(Validate.isEqual(v.type, typeof v.value)).toBe(true);
      });
    });

    it("All", () => {
      const stats = values.map(({ value }) => ({
        value,
        type: typeof value,
        isString: Validate.isString(value),
        isNumber: Validate.isNumber(value),
        isObject: Validate.isObject(value),
        isArray: Validate.isArray(value),
        isFunction: Validate.isFunction(value),
        isBoolean: Validate.isBoolean(value),
        isNull: Validate.isNull(value),
        isUndefined: Validate.isUndefined(value),
        isTruthy: Validate.isTruthy(value),
        isEqual: Validate.isEqual(value, null),
        isExists: Validate.isExists(value),
        isEmpty: Validate.isEmpty(value),
      }));

      console.dir(stats);
    });

    validateKeys.map((key) => {
      it(key, () => {
        const doneChecks = values.map((v) => {
          const result = Validate[key](v.value);
          expect(result).not.toBeNull();
          return { ...v, result };
        });
        console.log(doneChecks);
      });
    });
  });

  describe("Validate Manual", () => {
    it("All", () => {
      const value = 42;
      expect(Validate.isString(value)).not.toBeNull();
      expect(Validate.isNumber(value)).not.toBeNull();
      expect(Validate.isObject(value)).not.toBeNull();
      expect(Validate.isArray(value)).not.toBeNull();
      expect(Validate.isFunction(value)).not.toBeNull();
      expect(Validate.isBoolean(value)).not.toBeNull();
      expect(Validate.isNull(value)).not.toBeNull();
      expect(Validate.isUndefined(value)).not.toBeNull();
      expect(Validate.isTruthy(value)).not.toBeNull();
      expect(Validate.isEqual(value, value)).not.toBeNull();
      expect(Validate.isExists(value)).not.toBeNull();
      expect(Validate.isEmpty(value)).not.toBeNull();
    });
  });
});
