"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const constants_1 = require("./constants");
const util_1 = __importDefault(require("util"));
const { MAX_LINE_LENGTH, MIN_LINE_LENGTH, MIN_DIV_LENGTH, RANDOM_MIN, RANDOM_MAX, CHAR_DIV_TITLE, CHAR_DIV_BLOCK, CHAR_DIV_VERTICAL, CHAR_DIV_HORIZONTAL, CHAR_LINE, CHAR_SPACE, CHAR_TAB, CHAR_EMPTY, } = constants_1.Constants;
class Text {
    static TEXT = constants_1.Constants.RANDOM_TEXT;
    static LINES = constants_1.Constants.RANDOM_LINES;
    // Split
    static SPLIT_LINES = (str) => str.split(CHAR_LINE).filter(this.TRIM);
    static SPLIT_WORDS = (str) => str.split(CHAR_SPACE).filter(this.TRIM);
    static SPLIT_CHARS = (str) => str.split(CHAR_EMPTY).filter(this.TRIM);
    // Filters
    static FILTER_VALID = (lines) => [...lines].filter(Boolean);
    static FILTER_LENGTH = (lines, min = 1) => this.FILTER_VALID(lines).filter((l) => !!(~~l?.length > ~~min));
    // Joiners
    static JOIN_LINES = (lines) => [...lines].join(CHAR_LINE);
    static JOIN_WORDS = (lines) => [...lines].join(CHAR_SPACE);
    static JOIN_CHARS = (lines) => [...lines].join(CHAR_EMPTY);
    // Helpers
    static FORMAT = (v) => util_1.default.format(v);
    static INSPECT = (v) => util_1.default.inspect(v);
    static INSPECT_HIDDEN = (v) => util_1.default.inspect(v, true, Infinity, false);
    static TRIM = (str) => str.trim();
    static LEN = (str) => ~~str?.length;
    static LINE_LEN = (str) => this.SPLIT_LINES(str).map(this.LEN);
    static LENGTH_MAX = (str) => Math.max(0, ...this.SPLIT_LINES(str).map(this.LEN));
    static LENGTH_MIN = (str) => Math.min(0, ...this.SPLIT_LINES(str).map(this.LEN));
    static LAST_CHAR_INDEX = (str) => this.LEN(str) - 1;
    static SUBSTR = (str, start = 0, end = this.LAST_CHAR_INDEX(str)) => str.substring(start, end);
    static TO_LINE = (str) => `\n${str.trim()}\n`;
    static TO_STATS = (str, desc = "Description") => {
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
    static TO_INDEXED = (str) => this.SPLIT_LINES(str).map((text, index) => ({ text, index }));
    static TO_INDEXED_LINES = (str) => this.TO_INDEXED(str)
        .map(({ text, index }) => `Line ${~~index}: ${this.TRIM(text)}`)
        .join("\n");
    static CASE_UPPER = (str) => str.trim().toUpperCase();
    static CASE_LOWER = (str) => str.trim().toLowerCase();
    static CASE_TITLE = (str) => {
        const text = this.TRIM(str);
        const first = this.SUBSTR(text, 0, 1).toUpperCase();
        const rest = this.SUBSTR(text, 1, this.length - 1).toLowerCase();
        return `${first}${rest}`;
    };
    static VALIDATE = (str, min = MIN_LINE_LENGTH) => this.LEN(str) > min;
    static INSIDE = (str, div = CHAR_DIV_BLOCK) => `${div} ${str} ${div}`;
    static TO_MAX_LINE_LENGTH = (str) => Math.max(...this.SPLIT_LINES(str).map(this.LEN).filter(Boolean));
    static TO_MIN_LINE_LENGTH = (str) => Math.min(...this.SPLIT_LINES(str).map(this.LEN).filter(Boolean));
    static TO_LINE_LENGTHS = (str) => [
        this.TO_MIN_LINE_LENGTH(str),
        this.TO_MAX_LINE_LENGTH(str),
    ];
    static TO_DIV_CHARS_LENGTH = (maxLen) => typeof maxLen === "string" ? ~~this.LEN(maxLen) + 2 : ~~maxLen;
    static TO_DIV_CHARS = (max, div = CHAR_DIV_BLOCK) => div.repeat(this.TO_DIV_CHARS_LENGTH(max));
    static TO_DIV_LINE = (str, div = CHAR_DIV_BLOCK) => this.INSIDE(str, div);
    static TO_DIV_BLOCK = (str, div = CHAR_DIV_BLOCK) => {
        const divLine = this.TO_DIV_CHARS(str, div);
        const text = this.SPLIT_LINES(str)
            .map((l) => this.TO_DIV_LINE(l, div))
            .join("\n");
        return this.INSIDE(text, this.TO_LINE(divLine));
    };
    static HAS_LENGTH = (str, min = MIN_LINE_LENGTH) => ~~str?.length >= min;
}
exports.Text = Text;
