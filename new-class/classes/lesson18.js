// .reduce, practice, Math, Date
//!
// const numbers = [1, 2, 3, '4', 5];
// const result = numbers.reduce((acc, cur) => {
// 	console.log('acc: ', acc, ' cur: ', cur);
// 	return acc + +cur;
// })
// console.log(result);
// !
// const numbers1 = [1, 2, 3, '4s', 5];
// const result1 = numbers1.reduce((acc, cur) => {
// 	if (!isNaN(cur)) {
// 		console.log('acc: ', acc, ' cur: ', cur);
// 		return acc + +cur;
// 	} else {
// 		return acc;
// 	}
// })
// console.log(result1);
//!
// const numbers2 = [1, 2, 3, '4s', 5];
// const result2 = numbers2.reduce((acc, cur) => !isNaN(+cur) ? acc + +cur : acc)
// console.log(result2);
//!
// const numbers3 = [1, 2, 3, '4s', 5, -5];
// const result3 = numbers3.reduce((acc, cur) => acc + (+cur || 0))
// console.log(result3);
//!
// const users = [
// 	{ name: 'Islam', age: 27, login: 'mainazarov1', password: 'admin123' },
// 	{ name: 'Bek', age: 13, login: 'beks', password: 'user123' },
// 	{ name: 'Arthur', age: 35, login: 'arthur001', password: 'moder123' },
// 	{ name: 'Dan', age: 25, login: 'dancho', password: 'qwerty' },
// ]
// const usersTotalAge = users.reduce((acc, cur) => acc + cur.age, 0)
// console.log(usersTotalAge);
//!
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.round(2.5)); // 3
// console.log(Math.ceil(2.5)); // 3
// console.log(Math.floor(2.5)); // 2 
// console.log(Math.trunc(2.5)); // 2
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.sqrt(16)); // 4 * 4 = 16
//!
// const date = new Date()
// console.log(date);

const users = [
	{ name: 'Adilet', age: 20, login: 'amaterasuuuu', password: 'admin123' },
	{ name: 'Samat', age: 25, login: 'kotoamatsukami', password: '12345678' },
	{ name: 'Akyl', age: 23, login: 'chidori', password: '87654321' },
	{ name: 'Beksultan', age: 17, login: 'izanami', password: '123admin' },
]

// ? 1. Создайте новый массив, в котором будут те же самые пользователи, но только без поля password, используя метод массива map

// const usersNoPass = users.map(user => {
// // // 	delete user.password;
// // // 	return user;
// return {name: user.name, age: user.age, login: user.login}
// })
// console.log(usersNoPass);

// ? 2. Создайте новый массива, в котором будут только те пользователи, возраст которых больше 18 и логин которых содержит более 8 символов, используя метод массива filter

// const adultUsers = users.filter(user => {
// 	if (user.age >= 18 && user.login.length > 8){
// 		return user
// 	};
// })
// console.log(adultUsers);

// ? 3. Создайте новый массив, в котором будут только те пользователи, в имене которых есть буква "s"

// const sLetterUsers = users.filter(user => user.name.toLowerCase().includes('s'))
// console.log(sLetterUsers);