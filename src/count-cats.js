const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  var count = 0;
  for (const item in arr) {
    for (const item2 in arr[item]) {
      if (arr[item][item2] === '^^') {
        count += 1;
      }
    }
  }
return count;
};
