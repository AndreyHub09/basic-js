const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }

  return arr.reduce((accumulator, item, index, array) => {

    if (item === '--discard-prev' || item === '--double-next' || item === '--double-prev' || item === '--discard-next') {
      switch (item) {
        case '--discard-prev':
          accumulator = accumulator.slice(0, accumulator.length - ((index > 1 && array[index - 2] === '--discard-next') ? 0 : 1));
          break;
        case '--double-next':
          if (index !== array.length - 1) {
            accumulator.push(array[index + 1]);
          }
          break;
        case '--double-prev':
          if (index !== 0 && !(index > 1 && array[index - 2] === '--discard-next')) {
            accumulator.push(array[index - 1]);
          }
          break;
        default:
          break;
      }
      return accumulator;
    }

    if (index === 0 || typeof array[index - 1] !== 'string' || array[index - 1] !== '--discard-next') {
      accumulator.push(item);
    }

    return accumulator;
  }, []);
};
