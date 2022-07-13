import { O } from "../global";
import util from "util";

export const { random } = Math;
export class Constants {
  static DESC = "Constants";

  static STRING = "string";
  static BOOLEAN = true;
  static NUMBER = 42;
  static ARRAY = [42, 311];
  static OBJECT: O = { name: "ObjectExampleConstant", value: 42 };
  static FUNCTION = () => {};
  static VALUES_PRIMITIVE = {
    NULL: null,
    UNDEFINED: undefined,
    NAN: Number.NaN,
    STRING: this.STRING,
    BOOLEAN: this.BOOLEAN,
    NUMBER: this.NUMBER,
    ARRAY: this.ARRAY,
    OBJECT: this.OBJECT,
    FUNCTION: this.FUNCTION,
  };

  static FILENAME = __filename;
  static DIRNAME = __dirname;
  static DATE = Date.now();
  static DATESTAMP = new Date();
  static INIT_INFO = {
    FILENAME: this.FILENAME,
    DIRNAME: this.DIRNAME,
    DATE: this.DATE,
    DATESTAMP: this.DATESTAMP,
  };
  static INIT_DESC = JSON.stringify(this.INIT_INFO, null, "\t");

  static RANDOM_SIZE = 10;
  static RANDOM_MAX = 100;
  static RANDOM_MIN = 1;
  static RANDOM_STRING = `${parseInt(`${~~(random() * 1000000000)}`, 36)}`;
  static RANDOM_TEXT = util.inspect(this.INIT_INFO);
  static RANDOM_LINES = this.RANDOM_TEXT.split("\n").filter(String);
  static RANDOM_ARRAY = [this.RANDOM_STRING, this.RANDOM_TEXT, 42, 311];
  static RANDOM_VALUE = random();
  static RANDOM_INTEGER = this.RANDOM_VALUE * this.RANDOM_MAX;
  static RANDOM_BOOL = this.RANDOM_VALUE > 0.5;

  static NUMBER_NEGATIVE = -1;
  static NUMBER_0 = 0;
  static NUMBER_42 = 42;
  static NUMBER_311 = 311;
  static NUMBER_T = 1000;
  static NUMBER_M = 1000000;
  static NUMBER_B = 1000000000;

  static NUMBER_MAX = Number.MAX_VALUE;
  static NUMBER_MIN = Number.MIN_VALUE;
  static NUMBER_NAN = Number.NaN;
  static NUMBER_INFINITY = Infinity;
  static NUMBER_INFINITY_POSITIVE = Number.POSITIVE_INFINITY;
  static NUMBER_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;

  static MAX_LINE_LENGTH = 80;
  static MIN_LINE_LENGTH = 1;
  static MIN_DIV_LENGTH = 3;

  static CHAR_DIV_TITLE = "#";
  static CHAR_DIV_BLOCK = "*";
  static CHAR_DIV_VERTICAL = "|";
  static CHAR_DIV_HORIZONTAL = "-";
  static CHAR_LINE = "\n";
  static CHAR_SPACE = "s";
  static CHAR_TAB = "\t";
  static CHAR_EMPTY = "";
  static CHAR_ARROW_RIGHT = "->";
  static CHAR_ARROW_LEFT = "<-";
  static CHAR_NEXT_AND_TAB = "\n\t";
}
