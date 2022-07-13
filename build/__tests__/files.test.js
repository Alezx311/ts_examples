"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortcuts_1 = require("../shortcuts");
const files_1 = require("../files");
const obj = { ...files_1.FileSystemHelpers, name: "FileSystemHelpers" };
const stats = (0, shortcuts_1.getClassStats)(obj);
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
            const readDir = await files_1.FileSystemHelpers.readDir(__dirname);
            const readFile = await files_1.FileSystemHelpers.readFile(__filename);
            const writeFile = await files_1.FileSystemHelpers.writeFile(testFile, "Writed");
            const appendFile = await files_1.FileSystemHelpers.appendFile(testFile, "Add");
            const removedFile = await files_1.FileSystemHelpers.removeFile(testFile);
            expect(readDir).toBeTruthy();
            expect(readFile).toBeTruthy();
            expect(writeFile).toBeFalsy();
            expect(appendFile).toBeFalsy();
            expect(removedFile).toBeFalsy();
        });
        it(`${obj.name} Sync Methods`, async () => {
            const DIR = files_1.FileSystemHelpers.DIR;
            const FILE = files_1.FileSystemHelpers.FILE;
            const ROOT = files_1.FileSystemHelpers.ROOT;
            const resolve = files_1.FileSystemHelpers.resolve(__filename);
            const join = files_1.FileSystemHelpers.join(__filename);
            const isExists = files_1.FileSystemHelpers.isExists(__filename);
            expect(DIR).toBeTruthy();
            expect(FILE).toBeTruthy();
            expect(ROOT).toBeTruthy();
            expect(resolve).toBeTruthy();
            expect(join).toBeTruthy();
            expect(isExists).toBeTruthy();
        });
    });
});
