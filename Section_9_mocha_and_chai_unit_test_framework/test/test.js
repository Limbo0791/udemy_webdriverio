const assert = require("assert");

describe("Math suite", function () {
  //reusable functions
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  //hooks: before. To run before all tests.
  before(function () {
    console.log("Before");
  });

  //beforeEach: runs before each test
  beforeEach(function () {
    console.log("BeforeEach");
  });

  //after: runs once after all tests are completed
  after(function () {
    console.log("After");
  });

  //afterEach: runs afteer each test
  afterEach(function () {
    console.log("After Each");
  });

  //tests
  it("should add 2 numbers correctly", function () {
    const result = 2;

    assert.equal(add(1, 1), result, "The results are not equal."); //assert.equal can take 3 arguments
  });

  it.skip("should subtract 2 numbers correctly", function () {
    const result = 0;

    assert.equal(subtract(1, 1), result, "The results are not equal."); //assert.equal can take 3 arguments
  });

  it("should multiply 2 numbers correctly", function () {
    const result = 1;

    assert.equal(multiply(1, 1), result, "The results are not equal."); //assert.equal can take 3 arguments
  });

  it("should divide 2 numbers correctly", function () {
    const result = 1;

    assert.equal(divide(1, 1), result, "The results are not equal."); //assert.equal can take 3 arguments
  });

  it("Pending test");
});
