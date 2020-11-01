const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsCount = Math.pow(2, disksNumber) - 1;
  return { turns: turnsCount, seconds: Math.floor(turnsCount * 3600 / turnsSpeed) };
};
