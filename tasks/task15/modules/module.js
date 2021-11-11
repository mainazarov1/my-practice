module.exports = {
  checkNum(num) {
    if (num % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  },
  range(a, b, c) {
    if (c > a && c < b) {
      console.log(true);
    } else {
      console.log(false);
    }
  },
};
