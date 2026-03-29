import { suite, test, expect } from "vitest";
import {
  myIncludes,
  myIndexOf,
  myStartsWith,
  myRepeat,
  myJoin,
  myObjectKeys,
  myObjectEntries,
} from "./9-myJs";

suite("myJs", () => {
  test("myIncludes", () => {
    expect(myIncludes(["a", "b", "c"], "b")).toBe(true);
    expect(myIncludes(["a", "b", "c"], "d")).toBe(false);
    expect(myIncludes([], "a")).toBe(false);
    expect(myIncludes(["hello"], "hello")).toBe(true);
    expect(myIncludes(["1", "2", "3"], "2")).toBe(true);
  });

  test("myIndexOf", () => {
    expect(myIndexOf(["un", "deux", "trois"], "trois")).toBe(3);
    expect(myIndexOf(["un", "deux", "trois"], "quatre")).toBe(-1);
  });

  test("myStartsWith", () => {
    expect(myStartsWith("bonjour", "bon")).toBe(true);
    expect(myStartsWith("bonjour", "jour")).toBe(false);
  });

  test("myRepeat", () => {
    expect(myRepeat("ha", 3)).toBe("hahaha");
    expect(myRepeat("x", 0)).toBe("");
  });
  // TODO: test myIndexOf
  // TODO: test myStartsWith
  // TODO: test myRepeat

  test("myJoin", () => {
    expect(myJoin(["a", "b", "c"], "-")).toBe("a-b-c");
    expect(myJoin(["hello", "world"], " ")).toBe("hello world");
    expect(myJoin([], ",")).toBe("");
    expect(myJoin(["x"], ",")).toBe("x");
    expect(myJoin(["", ""], ",")).toBe(",");
  });

  test("myObjectKeys", () => {
    expect(myObjectKeys({ a: 1, b: 2 })).toEqual(["a", "b"]);
    expect(myObjectKeys({})).toEqual([]);
    expect(myObjectKeys({ x: undefined, y: null })).toEqual(["x", "y"]);
  });

  // TODO: test myObjectEntries
  test("myObjectEntries", () => {
    expect(myObjectEntries({ a: 1, b: 2 })).toEqual([
      ["a", "1"],
      ["b", "2"],
    ]);
    expect(myObjectEntries({})).toEqual([]);
    expect(myObjectEntries({ x: undefined, y: null })).toEqual([
      ["x", "undefined"],
      ["y", "null"],
    ]);
  });
});
