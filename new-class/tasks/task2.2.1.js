// TODO 1. Напишите собственную функцию, которая будет работать точно также, как метод массива reverse()

// let arr = [1, 2, 3];
// const reverseArr = (arr) => {
//   let newArr = [];
//   for (let i = arr.length; i > 0; i--) {
//     newArr.push(arr.pop());
//   }
//   return newArr;
// };
// console.log(reverseArr([1, 2, 34, 3]));

// TODO 2. Напишите функцию, которая будет принимать какую-либо строку и проверять палиндром ли это, и возвращать true/false

// const isPalindrome = (str) => {
// 	const reversed = str.split("").reverse().join("");
// 	console.log(reversed.split(' ').join(''));
//   return str.toUpperCase().split(' ').join('') == reversed.toUpperCase().split(' ').join('') ? true : false;
// };
// console.log(isPalindrome("Was it a car or a cat I saw"));

// TODO 3*. Напишите собственную функцию, которая будет работать точно также, как метод массива unshift()

let arrayOfNum = [1, 3, 5, 7];
const addToStart = (arr, ...val) => {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val.reverse();
	return arr.flat();
};
console.log(addToStart(arrayOfNum, 2, 3));
console.log(arrayOfNum);

// const addTo = (arguments) => {
// 	var argulength = arguments.length;
// 	var arrLength = this.length;
// 	for (var i = arrLength; i >= 0; i--) {// Здесь должно быть присвоено в обратном порядке, потому что по ходу, если длина аргументов меньше длины исходного массива, то данные исходного массива будут перезаписаны
// 		this[i + argulength - 1] = this[i - 1]
// 	}
// 	for (var i = 0; i < argulength; i++) {
// 		this[i] = arguments[i]
// 	}
// 	return this.length;
// };
// console.log(addTo(arrayOfNum))