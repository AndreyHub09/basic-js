const CustomError = require("../extensions/custom-error");
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position === undefined || position >= this.array.length || !Number.isInteger(position) || position === 0){
      this.array = [];
      throw new Error('Error');
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = chainMaker;
