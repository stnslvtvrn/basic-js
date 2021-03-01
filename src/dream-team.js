const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = '';
  if (!Array.isArray(members)) return false;
  members.forEach(elem => {
    typeof elem !== 'string' ? true : teamName = teamName + elem.trim()[0];
  });
  if (teamName === '') return false
  return teamName.toUpperCase().split('').sort().join('');
};
