// const msg = 'Bye';

// switch (msg) {
// 	case 'Hello':
// 		console.log('ok');
// 		break;
// 	case 'Bye':
// 		console.log('no');
// 		break;
// }

// let car = {
// 	name: '',
// 	color: '',
// 	speed: 0,
// 	price: 0,
// }

// let numbers = [23, 53, 64, 75, 86, 10];

// for (let val in car) {
// 	console.log(val);
// }
// for (let val of numbers) {
// 	console.log(val);
// }

// let random = Math.round(Math.random() * (5 - 1) + 1);

// switch (random) {
//   case 1:
//     console.log("Мало", random);
//     break;
//   case 2:
//     console.log("не хватает", random);
//     break;
//   case 3:
//     console.log("почти", random);
//     break;
//   case 4:
//     console.log("готово", random);
//     break;
//   case 5:
//     console.log("перебор", random);
//     break;
// }


// let car = {
// 	fuel: 100,
// 	run: function () {
// 		this.fuel += 20;
// 	}
// }
// car.run();
// car.run();
// console.log(car.fuel);


// let batman = {
// 	hp: 100,
// 	armor: 50,
// 	power: 10,
// 	attack: function () {
// 		superman.hp -= this.power;
// 	},
// 	getDamage: function (damage) {
// 		this.hp -= damage;
// 	}
// }
// let superman = {
// 	hp: 100,
// 	armor: 50,
// 	power: 30,
// 	attack: function () {
// 		return this.power;
// 	}
// }
// batman.attack();
// superman.attack();
// console.log(batman.hp);
// console.log(superman.hp);


// const phone = {
// 	model: 'Nokia 3310',
// 	call: function (name = 'NoName') {
// 		console.log(`набираю номер ${name}`);
// 	}
// }
// const user = {
// 	name: 'Bob',
// 	age: 21,
// 	celebrateBirthday: function () {
// 		this.age++;
// 	}
// }
// phone.call(user.name)


function getAccess(user) {
	switch (this.role) {
		case 'Admin':
			return 'Админский доступ';
		case 'User':
			return 'Добро пожаловать';
		case 'Guest':
			return 'Авторизируйтесь';
	}
}
let user = {
	name: 'bob',
	role: 'Admin',
	login: getAccess(user.role),
}
// console.log(user.login);

function canLogin(user) {
	return user.login();
}
console.log(canLogin())
// console.log(getAccess(user.login))