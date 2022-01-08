// // function check(word) {
// // 	console.log(`${word[0]}${word.length - 2}${word[word.length - 1]}`)
// // }
// // check('pneumonoultramicroscopicsilicovolcanoconiosis')

// const text = "qwertyuiopasdfghjkl;zxcvbnm,./";
// let newText = [];
// function check(arg, str) {
//   // str.split("").map((el) => {
//   //   if (arg == "R") {
//   //     el.filter((element) => {
//   //         newText.push(element);
//   //     });
//   //   }
//     // for (let i = 0; i < text.length; i++) {
//     //   if (el == text[i]) {
//     //     newText.push(text[i - 1]);
//     //   }
//     // }
//   // });
//   // for (let i = 0; i < text.length - 1; i++){
// 		// console.log(text[i]);
//   	// if (arg == "R") {
// 		// 	for (let j = 0; j < str.length - 1; j++){
// 		// 		if (text[i] == str[j]) {
// 		// 			newText.push(text[i-1])
//   	// 		}
//   	// 	}

//   	// }
//   	// else {

// 			// }
// 		// }
// 		// let result = newText.join("");
// }
// check("R", "s;;upimrrfod;pbr");

// function pow(x, n) {
// 	return (n <= 1) ? x[n - 1] : pow(x, n - 1) * x[n - 1];
// }
// console.log(pow([2, 3, 4, 5], 3))

// function sum(x, n) {
// 	return (n <= 0) ? 0 : sum(x, n - 1) + x[n - 1]; // * РЕКУРСИЯ
// 	// let sum = 0;
// 	// for (let i = 0; i < n; i++){
// 	// 	sum += x[i]
// 	// }
// 	// return sum
// }
// console.log(sum([2, 3, 4, 5], 3))

// function devide(x, n) {
// 	return ()
// }
// console.log(devide([2,3,4,5], 3));

// function myConcat(separator) {
//   var result = "";
//   var i;

//   // iterate through arguments
//   for (i = 1; i < arguments.length; i++) {
//     result += arguments[i] + separator;
//   }
//   return result;
// }
// console.log(myConcat('! ', 'red', 'orange', 'blue'));




// const moveZeros = (arr) => {
// 	return arr
// 		.filter(x => x !== 0)
// 		.concat(arr.filter(x => x === 0));
// }

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
