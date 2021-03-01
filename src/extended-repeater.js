const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options.addition === undefined) {
        options.addition = '';
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }
    let newStr = '';
    str = String(str);
    options.addition = String(options.addition);
    for (let i = 0; i < options.repeatTimes; i++) {
        newStr += str;
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            if (j == (options.additionRepeatTimes - 1)) {
                newStr += options.addition;
            } else {
                newStr += options.addition + options.additionSeparator;
            }
        }
        if (i < (options.repeatTimes - 1)) newStr += options.separator;
    }
    return newStr;
};
