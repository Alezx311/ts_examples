"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const constants_1 = require("./constants");
const { RANDOM_SIZE: SIZE, RANDOM_MAX: MAX, RANDOM_MIN: MIN, RANDOM_BOOL: BOOL, RANDOM_INTEGER: INT, } = constants_1.Constants;
class Random {
    static DESC = "Random";
    static VALUES = { SIZE, MAX, MIN, BOOL, INT };
    //* For Simple random value, without function calling
    static get random() {
        return Math.random();
    }
    static array = (size = SIZE) => Array(size).fill(this.random);
    //* For simple integer generation
    static value = (max = MAX, min = MIN) => ~~(this.random * (max - min) + min);
    //* Returns random values
    static valueMany = (size = SIZE, max = MAX, min = MIN) => this.array(size).map((v) => this.value(max, min));
    //* Returns random power of two
    static powerOfTwo = (min = MIN, max = 10) => 2 ** ~~this.value(min, max);
    //* Boolean with given chance
    static boolean = (chance = 50) => this.random * 100 > chance;
    //* Random index from given arr
    static arrayIndex = (arr) => arr.length > 0 ? this.value(arr?.length - 1, 0) : 0;
    //* Random Element from given arr
    static arrayElement = (arr) => arr?.[this.arrayIndex(arr)] ?? undefined;
    //* Array of random elements from given arr... GENIUS BLYAT
    static arrayValues = (arr, size = SIZE) => this.array(size).map(() => this.arrayElement(arr));
    //* Only unical values
    static arrayUnicals = (arr) => [...new Set(arr)];
    //* Shuffle elements
    static arrayShuffle = (arr) => [
        ...arr.sort(() => (this.boolean(80) ? -1 : 1)),
    ];
    //* Random part of arr
    static arrayPart(arr) {
        if (arr.length < 3) {
            return arr.length > 1 ? arr.slice(0, 1) : [];
        }
        const indexes = [this.value(arr.length - 1), this.value(arr.length - 1)];
        const start = Math.min(...indexes);
        const end = Math.max(...indexes);
        return arr.slice(start, end);
    }
    //* Return random string, created from given strings arr
    static joinedStrings(parts, size = SIZE) {
        const str = parts.filter(String).map((s) => s.trim().matchAll(/[a-z]/gim));
        return this.arrayValues(str, size).join("_");
    }
    //* Return random lines from given text
    static textLines = (text, size) => this.arrayValues(text.split("\n"), size);
    //* Returns random objectKey
    static objectKey = (obj) => {
        const keys = Object.keys(obj);
        return this.arrayElement(keys);
    };
    //* Returns random objectValue
    static objectValue = (obj) => {
        const values = Object.values(obj);
        return this.arrayElement(values);
    };
    //* Returns random objectEntry
    static objectEntry = (obj) => {
        const arr = Object.entries(obj);
        return this.arrayElement(arr);
    };
}
exports.Random = Random;
