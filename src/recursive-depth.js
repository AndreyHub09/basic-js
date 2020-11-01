const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    if (Array.isArray(arr)) {
      depth++;
      const beginDepth = depth;
      arr.forEach(element => {
        const tempDepth = this.calculateDepth(element, beginDepth);
        if (depth < tempDepth) {
          depth = tempDepth;
        }
      });
    }
    return depth;
  }
};
