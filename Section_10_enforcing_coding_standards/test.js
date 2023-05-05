// making assert available in Mocha
const assert = require("assert");

//Making chai and expect available
const chai = require("chai");
const expect = chai.expect;

// making chai should available
const should = chai.should();

// making chai Assert available
const chaiAssert = chai.assert;

describe("Math suite", function () {
  // some tetsing variables
  const fname = "Wilco";
  const bool = true;
  const arr = [1, 2, 3, 4, ""];
  //============================================================

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
  //============================================================

  //hooks:
  //before. To run before all tests.
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

  //afterEach: runs after each test
  afterEach(function () {
    console.log("After Each");
  });

  //============================================================

  //test using Chai Expect
  it("should pass expect", function () {
    expect(fname).to.be.equal("Wilco");
  });

  it("Should pass expect with boolean", function () {
    expect(bool).to.be.true;
  });

  it("should pass expect with arr", function () {
    for (let i = 0; i < arr.length; i++) {
      expect(arr[i]).to.be.equal(3); // we want everything to be 3 but only one thing is going to be 3.
    }
  });

  //============================================================
  // Tests using Chai Should

  it("Should pass should with fname", function () {
    fname.should.equal("Wilco", "If test fails error message here");
  });

  it("Should pass should with boolean", function () {
    bool.should.equal(true);
  });

  //============================================================
  // Tests using Chai Assert

  it("Should pass Chai assert with fname", function () {
    chaiAssert.equal(fname, "Wilco", "Error message if test fails");
  });

  //============================================================

  //tests using pure Mocha
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

  it("Pending test"); // a pending empty test
});
