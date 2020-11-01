const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    return matrix.reduce((accum, array) => {
        return array.reduce((innerAccum, item) => item === '^^' ? innerAccum + 1 : innerAccum, accum);
    }, 0);
};
