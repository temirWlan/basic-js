const CustomError = require("../extensions/custom-error");

const MONTHS = {
  "0": "January",
  "1": "February",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December",
}

const SEASONS = {
  "winter": ["December", "January", "February"],
  "spring": ["March", "April", "May"],
  "summer": ["June", "July", "August",],
  "autumn": ["September", "October", "November"]
};

module.exports = function getSeason(date) {
  if (!date) { 
    return 'Unable to determine the time of year!';
  }

  if (typeof date != 'object') {
    throw new Error('Wrong date format!');
  }

  if (Object.prototype.toString.call(date) != "[object Date]"){
    throw new Error();
  }
  
  const findKey = (object, value) => Object.keys(object).find(key => object[key] === value); 

  const month = date.getMonth();

  for (let n of Object.keys(MONTHS)) {
    if (+n === month) {
      for (let k of Object.values(SEASONS)) {
        for (let i of k) {
          if (MONTHS[n] === i) {
            return findKey(SEASONS, k);
          }
        }
      }
    }
  }
}
 