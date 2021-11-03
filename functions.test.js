const functions = require("./functions");

test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2,2)).toBe(4);
});
test("Add 2 + 2 to not equal 4", () => {
  expect(functions.add(2,3)).not.toBe(4);
});
test("Is null", () => {
  expect(functions.isnull()).toBeNull();
});
test("Is Undefined", () => {
  expect(functions.isNotDefined()).toBeUndefined();
});