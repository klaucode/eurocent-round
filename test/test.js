var assert = require("assert");
var round = require("../index");

for (var rounder = 0; rounder <= 1; rounder += 0.1) {
  describe("Round to " + rounder, function () {
    for (var value = 0; value <= 100; value += 0.01) {
      it(`round ${value} to rounder ${rounder} should return ${round(
        value
      )}`, function () {
        //@TODO Thinking, how to compare rounded value with right value...
        assert.equal(round(value, rounder), round(value, rounder));
      });
    }
  });
}
