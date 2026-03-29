import { suite, expect, test } from "vitest";
import { toCamelCase, toSnakeCase } from "./10-namingConventions";

// TODO: test camelcase with one word, with multiple words and when the input is already camelcase
suite("namingConventions", () => {
  test("Snake_case change toCamelcase", () => {
    expect(toCamelCase("test")).toBe("test");
    expect(toCamelCase("my_function")).toBe("myFunction");
    expect(toCamelCase("to_snake_case")).toBe("toSnakeCase");
  });

  test("Some simple cases for the toSnakeCase function", () => {
    expect(toSnakeCase("test")).toBe("test");
    expect(toSnakeCase("toSnakeCase")).toBe("to_snake_case");
    expect(toSnakeCase("myFunction")).toBe("my_function");
    expect(toSnakeCase("anotherFunction")).toBe("another_function");
  });
});
