// let numbers = [32, 53, 23, 3, 64, 12, 87, 45, 33, 49, 10, 11, 53];
// let min = 0;
// let max = 0;
// let sum = 0;
// let allSum = 0;
// for (let i = 0; i < numbers.length; i++) {
// 	if (i === 0) {
// 		min = numbers[0];
// 		max = numbers[0];
// 	}
// 	if (numbers[i] > max) {
// 		max = numbers[i];
// 	}
// 	if (numbers[i] < min) {
// 		min = numbers[i];
// 	}
// 	sum += numbers[i];
// 	allSum = sum / numbers.length;
// }

// console.log(max);
// console.log(min);
// console.log(sum);
// console.log(allSum);


// for (let i = 0; i < numbers.length; i++){
// 	if (numbers[i] % 2 == 0) {
// 		console.log(numbers[i] + ' = ping')
// 	} else {
// 		console.log(numbers[i] + ' = p0ng')
// 	}
// }


// let i = 0;
// while (i < 3) {
// 	console.log('number: ', i)
// 	i++
// }


let users = [
	{
		name: 'Jhon',
		age: 16,
		isAdmin: true
	},
	{
		name: 'Tom',
		age: 12,
		isAdmin: false
	},
	{
		name: 'Arthur',
		age: 18,
		isAdmin: false
	},
	{
		name: 'Kiley',
		age: 53,
		isAdmin: false
	},
	{
		name: 'Von',
		age: 36,
		isAdmin: false
	}
];
for (let i = 0; i < users.length; i++){
	if (users[i].age >= 18) {
		console.log(users[i].name);
	}
	if (users[i].isAdmin === true) {
		console.log(users[i].name);
	}
}