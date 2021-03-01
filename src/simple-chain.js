const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
   this.chain.push(`( ${value} )`);
   return this;
  },
  removeLink(position) {
    if (position % 1 === 0 && position > 0 && typeof position !== "string") {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error('Position Error');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let outputChain = this.chain.join('~~');
    this.chain = [];
    return outputChain;
  }
};

module.exports = chainMaker;
