// let a = 0;

// (a > 5) ? console.log('no') : console.log('no');



// const speed = 150;
// if (speed > 100 || speed == 150) {
// 	console.log('fast');
// }

// const age = 5

// if (age >= 18) {
// 	console.log('совершеннолетний');
// } else if (age >= 12 && age < 18) {
// 	console.log('подросток');
// } else {
// 	console.log('малыш');
// }

// const temp = -18;

// if (temp > 0 && temp <= 10) {
// 	console.log('надень куртку');
// } else if (temp > 10 && temp <= 20) {
// 	console.log('не надевай куртку');
// }	else if (temp > 20 && temp <= 40) {
// 	console.log('на ИКа');
// }	else if (temp > -20 && temp <= 0) {
// 	console.log('посиделки у камина');
// } else {
// 	console.log('сиди дома!');
// }



// let user1 = 'Martin', user2 = 'Bob', user3 = 'tutut';
// let age1 = 14, age2 = 16, age3 = 29;
// let isAdmin1 = true, isAdmin2 = false, isAdmin3 = false;

// if (age1 >= 18 || isAdmin1) {
// 	console.log(user1)
// }
// if (age2 >= 18 || isAdmin2) {
// 	console.log(user2)
// }
// if (age3 >= 18 || isAdmin3) {
// 	console.log(user3)
// }



// let a = 15;
// let b = true;
// let c = '12';

// a === 15 ? console.log('равно') : console.log('не равно');
// b ? console.log('true') : console.log('false');
// c ? console.log('не пустая строка') : console.log('пусто');






// let car = {
// 	name: 'BMW',
// 	color: 'red',
// 	speed: 320
// }

// if (car.speed > 180) {
// 	console.log('fast');
// }


// let user1 = {
// 	name: 'Martin',
// 	age: 14,
// 	isAdmin: true
// }
// let user2 = {
// 	name: 'Bob',
// 	age: 16,
// 	isAdmin: false
// }
// let user3 = {
// 	name: 'Leo',
// 	age: 29,
// 	isAdmin: false
// }

// if (user1.age >= 18 || user1.isAdmin) {
// 	console.log(user1.name)
// }
// if (user2.age >= 18 || user2.isAdmin) {
// 	console.log(user2.name)
// }
// if (user3.age >= 18 || user3.isAdmin) {
// 	console.log(user3.name)
// }



let car1 = {
	name: 'BMW',
	color: 'red',
	speed: 320,
	price: 15000
}
let car2 = {
	name: 'Audi',
	color: 'white',
	speed: 300,
	price: 14000
}
let car3 = {
	name: 'MB',
	color: 'black',
	speed: 360,
	price: 16000
}
let car4 = {
	name: 'Volvo',
	color: 'green',
	speed: 200,
	price: 10000
}
let car5 = {
	name: 'Toyota',
	color: 'grey',
	speed: 160,
	price: 5000
}
let result = ((car1.speed + car2.speed + car3.speed + car4.speed + car5.speed) / 5);
console.log(result);

if (car1.speed >= 300) {
	car1.price += 2000;
};
if (car2.speed >= 300) {
	car2.price += 2000;
};
if (car3.speed >= 300) {
	car3.price += 2000;
};
if (car4.speed >= 300) {
	car4.price += 2000;
};
if (car5.speed >= 300) {
	car5.price += 2000;
};
let totalPrice = (car1.price + car2.price + car3.price + car4.price + car5.price);
console.log(totalPrice)

let moto = {
	color: 'blue',
	price: 5000,
	name: 'Bike'
}

moto.color = 'red';
moto.price = 6000;

console.log(moto);
