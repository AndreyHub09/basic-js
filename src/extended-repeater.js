const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  const repeatTimes = options.repeatTimes || 1;
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    const additionRepeatTimes = options.additionRepeatTimes === undefined && options.addition !== undefined ? 1 : options.additionRepeatTimes;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += options.addition === false || options.addition === null ? options.addition : options.addition || '';
      if (j !== additionRepeatTimes - 1) {
        result += options.additionSeparator || '|';
      }
    }
    if (i !== repeatTimes - 1) {
      result += options.separator || '+';
    }
  }
  return result;
};
