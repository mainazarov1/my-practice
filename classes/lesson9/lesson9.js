// let usersList = [
// 	{
// 		name: 'Bob',
// 		age: 23,
// 		isAdmin: false
// 	},
// 	{
// 		name: 'Dag',
// 		age: 13,
// 		isAdmin: true
// 	},
// 	{
// 		name: 'Kate',
// 		age: 13,
// 		isAdmin: false
// 	},
// 	{
// 		name: 'Dylan',
// 		age: 33,
// 		isAdmin: false
// 	},
// 	{
// 		name: 'Min',
// 		age: 17,
// 		isAdmin: true
// 	}
// ]

// function canLogin(user) {
// 	if ((user.age > 18) || (user.isAdmin == true)) {
// 		console.log(`Добро пожаловать ${user.name}`)
// 	}
// }
// for (let i = 0; i < usersList.length; i++) {
// 	canLogin(usersList[i]);
// }


// function count(a, b) {
// 	return a + b
// }
// console.log(count(5, 6))

let result = 0;
function count(a, b) {
	return a + b;
}

for (let i = 0; i < 100; i++) {
	result = count(result, i)
}
console.log(result)

// let result = 0;
// function count(a, b) {
// 	result += a;
// 	return result;
// }

// for (let i = 0; i < 100; i++) {
// 	count(i)
// }
// console.log(result)
