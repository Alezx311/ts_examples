import { getClassStats } from "../shortcuts";
import { Constants } from "../constants";

const moduleObj = Constants;
const desc = moduleObj?.name ?? moduleObj?.constructor?.name;
const obj = { ...moduleObj, desc };
const stats = getClassStats(obj);
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

  it(`${desc} -> Constants`, () => {
    const { constants } = stats;
    expect(constants).toBeDefined();
    expect(constants.length).toBeGreaterThan(0);
  });

  it(`${desc} -> Objects`, () => {
    const { objects } = stats;
    expect(objects).toBeDefined();
    expect(objects.length).toBeGreaterThan(0);
  });
});

// Manual Tests
describe(`${desc} -> Manual`, () => {
  const PROPERTIES = Object.keys(Constants).filter(Boolean);

  it("Have properties", () => {
    expect(PROPERTIES).toBeDefined();
    expect(PROPERTIES.length).toBeGreaterThan(0);
  });

  PROPERTIES.map((key) => {
    it(`Constants -> ${key}`, () => {
      expect(key.length).toBeGreaterThan(0);
      expect(Constants).toHaveProperty(key);
      expect(Constants[key as keyof Constants]).toBeDefined();
    });
  });
});
