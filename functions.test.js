const functions = require("./functions");

// Function should be equal to 4
test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Function should not be equal to 4
test("Add 2 + 2 to not equal 4", () => {
  expect(functions.add(2, 3)).not.toBe(4);
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
  expect(functions.createUser().lastName).toEqual("Clarke");
});

// User should return an object
test("User should be an object", () => {
  expect(functions.isObject()).toEqual({});
});

// Value should be greater than 5
test("Testing that value is greater than 5", () => {
  expect(functions.checkValue(192)).toBeGreaterThan(5);
});

// * simple REST API call

test("Fetched user name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// * Working with async data
test("Fetched user name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
