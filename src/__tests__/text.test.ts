import { Constants } from "../constants";
import { getClassStats } from "../shortcuts";
import { Text } from "../text";

const moduleObj = Text;
const desc = moduleObj?.name ?? moduleObj?.constructor?.name ?? "Text";
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

  const TEXT = Constants.RANDOM_TEXT;
  const LINES = Constants.RANDOM_LINES;

  PROPERTIES.map((key) => {
    it(`Text -> ${key}`, () => {
      const value = obj[key as keyof typeof obj];
      expect(key.length).toBeGreaterThan(0);
      expect(value).toBeDefined();
      expect(obj).toHaveProperty(key);
      expect(typeof value).toBeTruthy();
      if (typeof value === "function") {
      }
    });
  });

  it("Test output results", () => {});
});
