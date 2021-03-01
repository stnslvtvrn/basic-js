const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.forEach(elem => {
      Array.isArray(elem) ? depth = Math.max(depth, this.calculateDepth(elem) + 1) : false;
    });
    return depth;
  }
};