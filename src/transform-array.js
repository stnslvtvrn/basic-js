const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw 'Error';

  let array = [...arr];

  arr.forEach((elem, index) => elem === '--double-next' ? array.splice(index, 1, arr[index + 1]) :
                               elem === '--double-prev' ? array.splice(index, 1, array[index - 1]) :
                               elem === '--discard-next' ? array.splice(index + 1, 1, null) :
                               elem === '--discard-prev' ? array.splice(index - 1 < 0 ? 0 : index - 1, 1, null) : elem);

  return array.filter(el => el !== null && el !== undefined && el !== '--discard-prev' && el !== '--discard-next');
};
