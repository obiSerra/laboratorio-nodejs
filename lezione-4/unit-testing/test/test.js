var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });

    it("should return 0 when the value is the first", function () {
      assert.strictEqual([1, 2, 3].indexOf(1), 0);
    });
  });
});
