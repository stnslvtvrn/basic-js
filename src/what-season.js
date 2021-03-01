const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date != 'object') throw new Error();
  let month = date.getUTCMonth();

return (month >= 2 && month <= 4) ? 'spring' :
       (month >= 5 && month <= 7) ? 'summer' :
       (month >= 8 && month <= 10) ? 'autumn' :
       (month == 11 || month <= 1) ? 'winter' : false;


};
