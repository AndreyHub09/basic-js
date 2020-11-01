const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const ln2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof (sampleActivity) !== "string") {
    return false;
  }
  const activity = parseInt(sampleActivity);
  if (isNaN(activity) || activity < 0) {
    return false;
  }
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (ln2 / HALF_LIFE_PERIOD));
  return result > 0 && isFinite(result) ? result : false;
};
