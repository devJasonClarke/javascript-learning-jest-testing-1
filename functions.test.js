const functions = require("./functions");

// Function should be equal to 4
test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2,2)).toBe(4);
});

// Function should not be equal to 4
test("Add 2 + 2 to not equal 4", () => {
  expect(functions.add(2,3)).not.toBe(4);
});

// Function should return null
test("Is null", () => {
  expect(functions.isnull()).toBeNull();
});

// Function should return undefined
test("Is Undefined", () => {
  expect(functions.isNotDefined()).toBeUndefined();
});

//  Should test if value to truthy
test("Should be falsy", () => {
  expect(functions.checkValue(1)).toBeTruthy();
});

// User's last name should be equal to clarke
test("User should be Jason Clarke object", () => {
  expect(functions.createUser().lastName).toEqual('Clarke');
});

// User should return an object
test("User should be an object", () => {
  expect(functions.isObject()).toEqual({});
});