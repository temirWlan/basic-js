const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // if (!arr.length) return [];

  if (!Array.isArray(arr)) {
    throw new Error();
  }

  // const array = Array.from(new Set(arr));
  const newArr = [];


  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-prev":
        newArr.pop();
        break;
      case "--discard-next":
        arr[i + 2] && arr[i + 2].toString().includes("-prev")
          ? (i += 2)
          : (i += 1);
        break;
      case "--double-prev":
        arr[i - 1] !== undefined ? newArr.push(arr[i - 1]) : null;
        break;
      case "--double-next":
        arr[i + 1] !== undefined ? newArr.push(arr[i + 1]) : null;
        break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }
  
  return newArr;
};
