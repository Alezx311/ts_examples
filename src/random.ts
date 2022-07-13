import { A, B, N, O, S } from "../global";
import { Constants } from "./constants";

const {
  RANDOM_SIZE: SIZE,
  RANDOM_MAX: MAX,
  RANDOM_MIN: MIN,
  RANDOM_BOOL: BOOL,
  RANDOM_INTEGER: INT,
} = Constants;

export class Random {
  static DESC = "Random";
  static VALUES = { SIZE, MAX, MIN, BOOL, INT };

  //* For Simple random value, without function calling
  static get random() {
    return Math.random();
  }

  static array = <T extends A>(size: N = SIZE): A<N> =>
    Array(size).fill(this.random);

  //* For simple integer generation
  static value = (max: N = MAX, min: N = MIN) =>
    ~~(this.random * (max - min) + min);

  //* Returns random values
  static valueMany = (size: N = SIZE, max: N = MAX, min: N = MIN): A<N> =>
    this.array(size).map((v) => this.value(max, min));

  //* Returns random power of two
  static powerOfTwo = (min: N = MIN, max: N = 10): N =>
    2 ** ~~this.value(min, max);

  //* Boolean with given chance
  static boolean = (chance: N = 50): B => this.random * 100 > chance;

  //* Random index from given arr
  static arrayIndex = (arr: A): N =>
    arr.length > 0 ? this.value(arr?.length - 1, 0) : 0;

  //* Random Element from given arr
  static arrayElement = <T extends A>(arr: T): T[N] =>
    arr?.[this.arrayIndex(arr)] ?? undefined;

  //* Array of random elements from given arr... GENIUS BLYAT
  static arrayValues = <T extends A>(arr: T, size = SIZE): A<T[N]> =>
    this.array(size).map(() => this.arrayElement(arr));

  //* Only unical values
  static arrayUnicals = (arr: A): A => [...new Set(arr)];

  //* Shuffle elements
  static arrayShuffle = (arr: A): A => [
    ...arr.sort(() => (this.boolean(80) ? -1 : 1)),
  ];

  //* Random part of arr
  static arrayPart<T extends A>(arr: T): A<A[N]> {
    if (arr.length < 3) {
      return arr.length > 1 ? arr.slice(0, 1) : [];
    }
    const indexes = [this.value(arr.length - 1), this.value(arr.length - 1)];
    const start = Math.min(...indexes);
    const end = Math.max(...indexes);
    return arr.slice(start, end);
  }

  //* Return random string, created from given strings arr
  static joinedStrings(parts: A<S>, size: N = SIZE): S {
    const str = parts.filter(String).map((s) => s.trim().matchAll(/[a-z]/gim));
    return this.arrayValues(str, size).join("_");
  }

  //* Return random lines from given text
  static textLines = (text: S, size?: N): A<S> =>
    this.arrayValues(text.split("\n"), size);

  //* Returns random objectKey
  static objectKey = <T extends O>(obj: T): keyof T => {
    const keys = Object.keys(obj);
    return this.arrayElement(keys);
  };

  //* Returns random objectValue
  static objectValue = <T extends O>(obj: T): T[keyof T] => {
    const values = Object.values(obj) as A<T[keyof T]>;
    return this.arrayElement(values);
  };

  //* Returns random objectEntry
  static objectEntry = <T extends O, K extends keyof T>(obj: T): [K, T[K]] => {
    const arr = Object.entries(obj) as A<[K, T[K]]>;
    return this.arrayElement(arr);
  };
}
