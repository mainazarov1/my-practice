// function Car(name, speed) {
// 	this.name = name;
// 	this.speed = speed;
// }
// let car1 = new Car('BMW', 240);
// console.log(car1);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.pop();
// console.log(arr);

// arr.push(10);
// console.log(arr);

// arr.shift();
// console.log();

// arr.unshift(0);
// console.log(arr);

// arr.reverse();
// console.log(arr);

// arr.splice(3, 1, 5);
// console.log(arr);

// let newArr = arr.slice(3, 5);
// console.log(newArr);


// function showMessage(message) {
// 	return `My message: ${message}`
// }

// function setMessage(callback, message) {
// 	return callback(message);
// }

// let message = setMessage(showMessage, 'Hello')
// console.log(message);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((item, index, arr) => {
// 	console.log(item);
// 	console.log(index);
// 	console.log(arr);
// })


let fruits = [
	{
		name: 'Apple'
	},
	{
		name: 'Orange'
	},
	{
		name: 'Banan'
	},
	{
		name: 'Watermelon'
	},
	{
		name: 'Pineapple'
	},
	{
		name: 'Cherry'
	}
]

fruits.forEach((item, index) => {
	item.price = Math.round(Math.random() * 100);
	console.log(`${index}: ${item.name} - ${item.price}`);
})