const randomNum = 4;
const arr = ["one", "two", "three", "four", "five"];

// console.log(arr[randomNum - 1]);

arr.forEach((el, i) => {
  if (i == randomNum - 1) {
    // console.log(el);
  }
});

for (let item in arr) {
	if(+item + 1 === randomNum)
	console.log(arr[item])
}
const obj = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
};
// console.log(obj[randomNum]);

// switch (randomNum) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   case 4:
//     console.log("four");
//     break;
//   case 5:
//     console.log("five");
//     break;
// }
