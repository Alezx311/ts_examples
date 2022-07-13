import { A, B, N, O, S, U, P } from "../global";
import fs, { promises as fsPromise } from "fs";
import path = require("path");

export const fsOptions: { encoding: "utf8" } = { encoding: "utf8" };

export class FileSystemHelpers {
  static DIR = __dirname;
  static FILE = __filename;
  static ROOT = path.resolve(this.DIR, "../");

  static resolve = (pathStr: S) => path.resolve(this.DIR, pathStr);
  static join = (pathStr: S) => path.join(this.DIR, pathStr);

  static readDir = async (dirPath: S): P<fs.Dirent[]> =>
    await fsPromise.readdir(dirPath, {
      encoding: "utf8",
      withFileTypes: true,
    });

  static isExists = (pathStr: S): B => fs.existsSync(pathStr);

  static readFile = async (filePath: S): P<S> =>
    await fsPromise.readFile(filePath, { encoding: "utf8" });
  static writeFile = async (filePath: S, data: S) =>
    await fsPromise.writeFile(filePath, data, { encoding: "utf8" });
  static appendFile = async (filePath: S, data: S) =>
    await fsPromise.appendFile(filePath, data, { encoding: "utf8" });
  static removeFile = async (filePath: S) => await fsPromise.rm(filePath);

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

FileSystemHelpers.SHOW();
