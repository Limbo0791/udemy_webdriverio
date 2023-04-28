const assert = require("assert");

describe("Math suite", function () {
  //reusable functions
  function add(a, b) {
    return a + b;
  }

  //tests
  it("should add 2 numbers correctly", function () {
    const result = 2;

    assert.equal(add(1, 1), result, "The results are not equal."); //assert.equal can take 3 arguments
  });
});
