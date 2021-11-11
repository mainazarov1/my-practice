module.exports = {
  includes(arr, val) {
    const include = arr.find((el) => el === val);
    if (include === val) {
      console.log(true);
    } else console.log(false);
  },
  reverse(arr) {
    let reverseArr = [];
    arr.forEach((el) => {
      reverseArr.unshift(el);
    });
    console.log(reverseArr);
  },
};
