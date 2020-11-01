const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Error');
  }

  let month;
  try {
    month = date.getMonth();
  } catch (error) {
    throw new Error('Error');
  }

  if (month > 1 && month <= 4) {
    return 'spring';
  }
  if (month > 4 && month <= 7) {
    return 'summer';
  }
  if (month > 7 && month < 11) {
    return 'autumn';
  }
  return 'winter';
};
