// TODO : test analyze_text.js
//  Examples

//  This: analyze_text("Hello world.")
//  Will return:
//  { letters: 10, words: 2, sentences: 1 }

//  This: analyze_text("Hello world. How are you?")
//  Will return:
//  { letters: 21, words: 5, sentences: 2 }

//  This: analyze_text("")
//  Will return:
//  { letters: 0, words: 0, sentences: 0 }
//
import { describe, it, expect } from "vitest";
import { analyze_text } from "./12-analyze_text";

describe("analyze_test", () => {
  it("return number letters, word and sentences", () => {
    expect(analyze_text("Hello world.")).toEqual({
      letters: 10,
      words: 2,
      sentences: 1,
    });
  });
  it("return number letters, word and sentences", () => {
    expect(analyze_text("Hello world. How are you?")).toEqual({
      letters: 19,
      words: 5,
      sentences: 2,
    });
  });
  it("return number letters, word and sentences", () => {
    expect(analyze_text("")).toEqual({
      letters: 0,
      words: 0,
      sentences: 0,
    });
  });
});
