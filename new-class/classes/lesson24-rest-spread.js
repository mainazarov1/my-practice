// // spread, rest

// const numbers = [1, 2, 3, 4, 5];
// const letters = ['a', 'b', 'c', 'd'];
// //
// const arr = [numbers, letters];
// console.log('arr :', arr);
// //
// const arr2 = [];
// for (let number of numbers) {
// 	arr2.push(number);
// };
// for (let letter of letters) {
// 	arr2.push(letter);
// };
// console.log('arr2 :', arr2);
// //
// const arr3 = [];
// const concatArray = (arr = [], args = []) => {
// 	for (let item of args) {
// 		arr.push(item);
// 	}
// }
// concatArray(arr3, numbers);
// concatArray(arr3, letters);
// console.log('arr3 :', arr3);
// //
// const arr4 = numbers.concat(letters);
// console.log('arr4 :', arr4);
// //
// const arr5 = [...numbers, ...letters];
// console.log('arr5 :', arr5);
// //

// const person1 = {
//   name: "Adilet",
//   age: 20,
//   job: "JS Developer",
// };
// const person2 = JSON.parse(JSON.stringify(person1));
// person2.name = "Andrey";
// console.log(person1);
// console.log(person2);
// //

const person1 = {
  name: "Adilet",
  age: 20,
  job: "JS Developer",
};
const person2 = {
	hobby: 'volleyball',
	birthday: '19-05',
}
// const person3 = { ...person1, ...person2 }
// console.log(person3);
Object.assign(person1, person2)
console.log(person1);
// //

// const person1 = {
//   name: "Adilet",
//   age: 20,
//   job: "JS Developer",
// };
// const person2 = {...person1};
// person2.name = "Andrey";
// console.log(person1);
// console.log(person2);

// //


// function sum() {
// 	const items = Object.values(arguments);
// 	console.log(items);
// 	return items
// 		.filter(el => el === +el)
// 		.reduce((acc, cur) => acc + cur, 0);
// 	// let sum = 0;
// 	// for (let num of items) {
// 	// 	sum += num;
// 	// }
// 	// return sum
// }
// console.log(sum(1,2,3,4,5));

// function sum2(...args) {
// //  return args.reduce((acc,cur)=>acc+cur,0);
// 	console.log(args);
// 	let sum = 0;
// 	for (let num of args) {
// 		sum += num;
// 	}
// 	return sum
// }
// console.log(sum2(1,2,3,4,5));