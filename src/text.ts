import { A, N, O, S } from "../global";
import { Constants } from "./constants";
import util from "util";

const {
  MAX_LINE_LENGTH,
  MIN_LINE_LENGTH,
  MIN_DIV_LENGTH,
  RANDOM_MIN,
  RANDOM_MAX,
  CHAR_DIV_TITLE,
  CHAR_DIV_BLOCK,
  CHAR_DIV_VERTICAL,
  CHAR_DIV_HORIZONTAL,
  CHAR_LINE,
  CHAR_SPACE,
  CHAR_TAB,
  CHAR_EMPTY,
} = Constants;

export class Text {
  static TEXT = Constants.RANDOM_TEXT;
  static LINES = Constants.RANDOM_LINES;
  // Split
  static SPLIT_LINES = (str: S) => str.split(CHAR_LINE).filter(this.TRIM);
  static SPLIT_WORDS = (str: S) => str.split(CHAR_SPACE).filter(this.TRIM);
  static SPLIT_CHARS = (str: S) => str.split(CHAR_EMPTY).filter(this.TRIM);

  // Filters
  static FILTER_VALID = (lines: S[]) => [...lines].filter(Boolean);
  static FILTER_LENGTH = (lines: A<S>, min: N = 1) =>
    this.FILTER_VALID(lines).filter((l: S) => !!(~~l?.length > ~~min));

  // Joiners
  static JOIN_LINES = (lines: S[]) => [...lines].join(CHAR_LINE);
  static JOIN_WORDS = (lines: S[]) => [...lines].join(CHAR_SPACE);
  static JOIN_CHARS = (lines: S[]) => [...lines].join(CHAR_EMPTY);

  // Helpers
  static FORMAT = (v: any) => util.format(v);
  static INSPECT = (v: any) => util.inspect(v);
  static INSPECT_HIDDEN = (v: any) => util.inspect(v, true, Infinity, false);
  static TRIM = (str: S) => str.trim();
  static LEN = (str: S) => ~~str?.length;
  static LINE_LEN = (str: S) => this.SPLIT_LINES(str).map(this.LEN);
  static LENGTH_MAX = (str: S) =>
    Math.max(0, ...this.SPLIT_LINES(str).map(this.LEN));
  static LENGTH_MIN = (str: S) =>
    Math.min(0, ...this.SPLIT_LINES(str).map(this.LEN));
  static LAST_CHAR_INDEX = (str: S) => this.LEN(str) - 1;
  static SUBSTR = (str: S, start: N = 0, end: N = this.LAST_CHAR_INDEX(str)) =>
    str.substring(start, end);
  static TO_LINE = (str: S) => `\n${str.trim()}\n`;
  static TO_STATS = (str: S, desc: S = "Description") => {
    const text = this.TRIM(str);
    const lines = this.SPLIT_LINES(text);
    const description = this.TRIM(desc);
    const length = this.LEN(text);
    const originalLength = this.LEN(str);
    const [minLineLength, maxLineLength] = this.TO_LINE_LENGTHS(text);
    return {
      lines,
      description,
      length,
      originalLength,
      minLineLength,
      maxLineLength,
    };
  };
  static TO_INDEXED = (str: S) =>
    this.SPLIT_LINES(str).map((text, index) => ({ text, index }));
  static TO_INDEXED_LINES = (str: S) =>
    this.TO_INDEXED(str)
      .map(({ text, index }) => `Line ${~~index}: ${this.TRIM(text)}`)
      .join("\n");
  static CASE_UPPER = (str: S) => str.trim().toUpperCase();
  static CASE_LOWER = (str: S) => str.trim().toLowerCase();
  static CASE_TITLE = (str: S) => {
    const text = this.TRIM(str);
    const first = this.SUBSTR(text, 0, 1).toUpperCase();
    const rest = this.SUBSTR(text, 1, this.length - 1).toLowerCase();
    return `${first}${rest}`;
  };
  static VALIDATE = (str: S, min: N = MIN_LINE_LENGTH) => this.LEN(str) > min;
  static INSIDE = (str: S, div: S = CHAR_DIV_BLOCK) => `${div} ${str} ${div}`;
  static TO_MAX_LINE_LENGTH = (str: S) =>
    Math.max(...this.SPLIT_LINES(str).map(this.LEN).filter(Boolean));
  static TO_MIN_LINE_LENGTH = (str: S) =>
    Math.min(...this.SPLIT_LINES(str).map(this.LEN).filter(Boolean));
  static TO_LINE_LENGTHS = (str: S) => [
    this.TO_MIN_LINE_LENGTH(str),
    this.TO_MAX_LINE_LENGTH(str),
  ];
  static TO_DIV_CHARS_LENGTH = (maxLen: S | N): N =>
    typeof maxLen === "string" ? ~~this.LEN(maxLen) + 2 : ~~maxLen;
  static TO_DIV_CHARS = (max: S | N, div: S = CHAR_DIV_BLOCK) =>
    div.repeat(this.TO_DIV_CHARS_LENGTH(max));
  static TO_DIV_LINE = (str: S, div: S = CHAR_DIV_BLOCK) =>
    this.INSIDE(str, div);
  static TO_DIV_BLOCK = (str: S, div: S = CHAR_DIV_BLOCK) => {
    const divLine = this.TO_DIV_CHARS(str, div);
    const text = this.SPLIT_LINES(str)
      .map((l) => this.TO_DIV_LINE(l, div))
      .join("\n");
    return this.INSIDE(text, this.TO_LINE(divLine));
  };
  static HAS_LENGTH = (str: S, min: N = MIN_LINE_LENGTH) =>
    ~~str?.length >= min;
}
