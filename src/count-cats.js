

module.exports = function countCats(matrix) {
  return matrix.flat().reduce((sum, elem) => {
    return elem == '^^' ? ++sum : sum;
  }, 0)
};
