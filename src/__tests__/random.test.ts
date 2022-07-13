import { getClassStats } from "../shortcuts";
import { Random } from "../random";
import { Constants } from "../constants";

const {
  RANDOM_SIZE,
  RANDOM_BOOL,
  RANDOM_VALUE,
  RANDOM_INTEGER,
  RANDOM_MAX,
  RANDOM_MIN,
  RANDOM_ARRAY,
  RANDOM_TEXT,
  RANDOM_STRING,
  INIT_INFO,
} = Constants;

const obj = { ...Random, name: "Random" };
const stats = getClassStats(obj);
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
    expect(Random).toBeDefined();
  });

  it(`${obj.name} -> value`, () => {
    const value = Random.value(RANDOM_MAX, RANDOM_MIN);

    expect(value).toBeDefined();
    expect(value).toBeGreaterThanOrEqual(RANDOM_MIN);
    expect(value).toBeLessThanOrEqual(RANDOM_MAX);
  });

  it(`${obj.name} -> array`, () => {
    const value = Random.array(RANDOM_SIZE);

    expect(value).toBeDefined();
    expect(value.length).toEqual(RANDOM_SIZE);
    value.map((v) => {
      expect(v).toBeGreaterThan(0);
      expect(v).toBeLessThan(1);
    });
  });

  it(`${obj.name} -> value`, () => {
    const value = Random.value(RANDOM_MAX, RANDOM_MIN);

    expect(value).toBeDefined();
    expect(value).toBeGreaterThanOrEqual(RANDOM_MIN);
    expect(value).toBeLessThanOrEqual(RANDOM_MAX);
  });

  it(`${obj.name} -> valueMany`, () => {
    const values = Random.valueMany(RANDOM_SIZE, RANDOM_MAX, RANDOM_MIN);

    expect(values).toBeDefined();
    expect(values.length).toBeGreaterThan(0);

    values.map((v) => {
      expect(v).toBeTruthy();
      expect(v).toBeGreaterThanOrEqual(RANDOM_MIN);
      expect(v).toBeLessThanOrEqual(RANDOM_MAX);
    });
  });

  it(`${obj.name} -> powerOfTwo`, () => {
    const value = Random.powerOfTwo();

    expect(value).toBeDefined();
    expect(value).toBeTruthy();
    expect(value).toBeGreaterThanOrEqual(2);
  });

  it(`${obj.name} -> boolean`, () => {
    const value = Random.boolean();

    expect(value).toBeDefined();
    expect(typeof value === "boolean").toBe(true);
  });

  it(`${obj.name} -> arrayIndex`, () => {
    const value = Random.arrayIndex(RANDOM_ARRAY);

    expect(value).toBeDefined();
    expect(RANDOM_ARRAY[value]).toBeDefined();
  });

  it(`${obj.name} -> arrayElement`, () => {
    const value = Random.arrayElement(RANDOM_ARRAY);

    expect(value).toBeDefined();
    expect(RANDOM_ARRAY).toContain(value);
  });

  it(`${obj.name} -> arrayValues`, () => {
    const values = Random.arrayValues(RANDOM_ARRAY);

    expect(values).toBeDefined();
    expect(values.length).toBeGreaterThan(0);
    values.map((v) => {
      expect(RANDOM_ARRAY).toContain(v);
    });
  });

  it(`${obj.name} -> arrayUnicals`, () => {
    const value = Random.arrayUnicals(RANDOM_ARRAY);
    expect(value).toBeDefined();
    expect(value.length).toBeGreaterThan(0);
  });

  it(`${obj.name} -> arrayShuffle`, () => {
    const arr = Array(10)
      .fill(1)
      .map(() => Math.random() * Date.now());
    const value = Random.arrayShuffle(arr);

    expect(value).toBeDefined();
    expect(value.length).toEqual(arr.length);
    expect(arr).not.toBe(value);
  });

  it(`${obj.name} -> arrayPart`, () => {
    const value = Random.arrayPart(RANDOM_ARRAY);

    expect(value).toBeDefined();
    expect(value.length).toBeGreaterThanOrEqual(0);
  });

  it(`${obj.name} -> joinedStrings`, () => {
    const value = Random.joinedStrings(["SomeStr"], 2);

    expect(value).toBeDefined();
    expect(value.length).toBeGreaterThan(0);
  });

  it(`${obj.name} -> textLines`, () => {
    const value = Random.textLines(RANDOM_TEXT);

    expect(value).toBeDefined();
    expect(value).toBeTruthy();
  });

  it(`${obj.name} -> objectKey`, () => {
    const value = Random.objectKey(INIT_INFO);

    expect(value).toBeDefined();
    expect(value).toBeTruthy();
    expect(value.length).toBeGreaterThan(0);
    expect(INIT_INFO).toHaveProperty(value);
    expect(Object.keys(INIT_INFO)).toContain(value);
  });

  it(`${obj.name} -> objectValue`, () => {
    const value = Random.objectValue(INIT_INFO);

    expect(value).toBeDefined();
    expect(value).toBeTruthy();
    expect(Object.values(INIT_INFO)).toContain(value);
  });

  it(`${obj.name} -> objectEntry`, () => {
    const value = Random.objectEntry(INIT_INFO);

    expect(value).toBeDefined();
    expect(value).toBeTruthy();
    expect(value.length).toBeGreaterThan(1);
    expect(INIT_INFO).toHaveProperty(value[0]);
  });
});
