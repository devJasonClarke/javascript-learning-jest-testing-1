const chunkArray = require("./chunkyArray");

test("Test Chunky array", () => {
  expect(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)).toStrictEqual([[1,2],[3,4],[5,6], [7]]);
});
