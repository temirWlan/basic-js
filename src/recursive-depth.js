const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    
    let str = JSON.stringify(arr);
    str = str.replace(/[^/\[|\]]/g, "").replace(/[/\[]]/g, "");
    if (!str.length) return 1;
    return 1 + this.calculateDepth(str);
  }
    
}
