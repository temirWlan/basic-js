const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { 
    repeatTimes, // повторы
    separator, // разделитель
    addition, // строка к каждому повторению
    additionRepeatTimes, // повторы addition
    additionSeparator // разделитель для addition
  } = options;

  const arr = [];
  const additionArr = [];

  separator = separator ? separator : '+';
  additionSeparator = additionSeparator ? additionSeparator : '|';
  repeatTimes = repeatTimes ? repeatTimes : 1;
  additionRepeatTimes = additionRepeatTimes ? additionRepeatTimes : 1;

  for (let i = 0; i < repeatTimes; i++) {
    arr.push(str);
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionArr.push(addition);
  }

  const additionStr = additionArr.map(item => item = item === null ? `${item}` : item).join(additionSeparator);
  const result = arr.map(item => `${item}${additionStr}`).join(`${separator}`);

  return result;
};
  