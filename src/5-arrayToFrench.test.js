// TODO: test arrayToFrench function with one, two and multiple words
import { describe, it, expect } from "vitest";
import { arrayToFrench } from "./5-arrayToFrench";

describe("arrayToFrench", () => {
  it("arrayToFrench retourne un tableau de mots français pour en faire une phrase française", () =>
    expect(arrayToFrench(["un", "deux", "trois", "soleil"])).toBe(
      "un, deux, trois et soleil",
    ));

  it("arrayToFrench retourne un tableau deux mots français pour en faire une phrase française séparé les mots avec un et ", () =>
    expect(arrayToFrench([`noir`, `blanc`])).toBe("noir et blanc"));

  it("arrayToFrench retourne un tableau d'un mot", () =>
    expect(arrayToFrench(["noir"])).toBe("noir"));
});
