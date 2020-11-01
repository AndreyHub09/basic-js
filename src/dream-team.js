const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let dreamTeam = members.reduce((accumulation, item) => {
    if (typeof (item) !== "string") {
      return accumulation;
    }
    accumulation.push(item.trim()[0].toUpperCase())
    return accumulation;
  }, []);
  return dreamTeam.sort((a, b) => a > b ? 1 : -1).join('');
};
