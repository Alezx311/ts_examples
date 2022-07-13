import { getClassStats } from "../shortcuts";

import { FileSystemHelpers } from "../files";

const obj = { ...FileSystemHelpers, name: "FileSystemHelpers" };
const stats = getClassStats(obj);
const jsonObj = JSON.stringify(obj, null, "\t");
const jsonStats = JSON.stringify(stats, null, "\t");

describe("Module Tests", () => {
  describe("Stats and autotests", () => {
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

  describe(`${obj.name} -> Async Methods`, () => {
    it("Async methods", async () => {
      const testFile = "_writedFile.txt";

      const readDir = await FileSystemHelpers.readDir(__dirname);
      const readFile = await FileSystemHelpers.readFile(__filename);
      const writeFile = await FileSystemHelpers.writeFile(testFile, "Writed");
      const appendFile = await FileSystemHelpers.appendFile(testFile, "Add");
      const removedFile = await FileSystemHelpers.removeFile(testFile);

      expect(readDir).toBeTruthy();
      expect(readFile).toBeTruthy();
      expect(writeFile).toBeFalsy();
      expect(appendFile).toBeFalsy();
      expect(removedFile).toBeFalsy();
    });

    it(`${obj.name} Sync Methods`, async () => {
      const DIR = FileSystemHelpers.DIR;
      const FILE = FileSystemHelpers.FILE;
      const ROOT = FileSystemHelpers.ROOT;
      const resolve = FileSystemHelpers.resolve(__filename);
      const join = FileSystemHelpers.join(__filename);
      const isExists = FileSystemHelpers.isExists(__filename);

      expect(DIR).toBeTruthy();
      expect(FILE).toBeTruthy();
      expect(ROOT).toBeTruthy();

      expect(resolve).toBeTruthy();
      expect(join).toBeTruthy();
      expect(isExists).toBeTruthy();
    });
  });
});
