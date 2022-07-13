"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemHelpers = exports.fsOptions = void 0;
const fs_1 = __importStar(require("fs"));
const path = require("path");
exports.fsOptions = { encoding: "utf8" };
class FileSystemHelpers {
    static DIR = __dirname;
    static FILE = __filename;
    static ROOT = path.resolve(this.DIR, "../");
    static resolve = (pathStr) => path.resolve(this.DIR, pathStr);
    static join = (pathStr) => path.join(this.DIR, pathStr);
    static readDir = async (dirPath) => await fs_1.promises.readdir(dirPath, {
        encoding: "utf8",
        withFileTypes: true,
    });
    static isExists = (pathStr) => fs_1.default.existsSync(pathStr);
    static readFile = async (filePath) => await fs_1.promises.readFile(filePath, { encoding: "utf8" });
    static writeFile = async (filePath, data) => await fs_1.promises.writeFile(filePath, data, { encoding: "utf8" });
    static appendFile = async (filePath, data) => await fs_1.promises.appendFile(filePath, data, { encoding: "utf8" });
    static removeFile = async (filePath) => await fs_1.promises.rm(filePath);
    static SHOW = async () => {
        const PATHS = {
            ROOT: this.ROOT,
            DIR: this.DIR,
            FILE: this.FILE,
        };
        const DIR_CONTENT = {
            ROOT: await this.readDir(this.ROOT),
            CURRENT: await this.readDir(this.DIR),
        };
        const FILE_CONTENT = {
            CURRENT: await this.readFile(this.FILE),
        };
        return { PATHS, DIR_CONTENT, FILE_CONTENT };
    };
}
exports.FileSystemHelpers = FileSystemHelpers;
FileSystemHelpers.SHOW();
