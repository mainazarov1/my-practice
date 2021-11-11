// function showMessage() {
// 	console.log(this);
// }
// const yo = {
// 	showMessage: function show() {
// 		console.log(this);
// 	},
// 	arrowMessage: () => {
// 		console.log(this);
// 	}
// }
// yo.showMessage();
// yo.arrowMessage()

// let obj = {
// 	message: function () {
// 		console.log('sss');
// 	}
// };
// let obj2 = {
// 	message: function () {
// 		console.log('sss');
// 	}
// };
// let obj3 = {
// 	message: function () {
// 		console.log('sss');
// 	}
// };
// showMessage.call(obj);
// showMessage.call(obj2);
// showMessage.call(obj3);

// function show(message) {
// 	console.log(message);
// }

// function getText(callback) {
// 	return callback('Hello!');
// }

// getText(show)

// function counter() {
// 	let num = 0;

// 	return function () {
// 		return ++num;
// 	}
// }
// let count = counter();

// console.log(count());
// console.log(count());
// console.log(count());

// let arr = [
//   {
//     name: "Go-Go",
//     age: 25,
//   },
//   {
//     name: "Ko-Ko",
//     age: 16,
//   },
//   {
//     name: "Lo-Ko",
//     age: 18,
//   },
//   {
//     name: "MoTo",
//     age: 11,
//   },
//   {
//     name: "Ko",
//     age: 36,
//   },
//   {
//     name: "Mo",
//     age: 56,
//   },
//   {
//     name: "So-Ksssso",
//     age: 9,
//   },
//   {
//     name: "Ko-Kso",
//     age: 23,
//   },
// ];

// let adultObj = arr.filter((obj) => obj.age > 20);
// let adultObj = arr.filter(function(obj) {return obj.age > 20 });
// console.log(adultObj);

// arr.forEach((obj) => obj.age = 20);
// console.log(arr);

// let nameObj = arr.filter((obj) => obj.name.length > 3);
// let nameObj = arr.filter(function (obj) { return obj.name.length > 3 });
// console.log(nameObj);

// let newArr = arr.map((obj) => {
// 	if (obj.age > 30) {
// 		obj.age -= 10;
// 		return obj
// 	}
// })

// console.log(newArr);


// let i = 0;
// while (i < arr.length) {
//   arr[i].name = i;
//   console.log(arr[i]);
//   i++;
// }
// console.log(arr[i]);

// for (let i = 0; i < arr.length; i++){
// 	arr[i].name = i
// }
// console.log(arr);

// for (let i in arr) {
// 	arr[i].name = i;
// }
// console.log(arr);

// arr.forEach((i,index) => {
// 	i.name = index})
// console.log(arr);

// let newArr = arr.map((i, index) => {
// 	i.name = index
// })
// console.log(arr);


let msg = 'Hello my dear friend!';

const test = msg.split('').reverse().join('');
console.log(test);