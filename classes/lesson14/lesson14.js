// function UserConstructor(name, age, gender) {
// 	return {
// 		name,
// 		age,
// 		gender
// 	}
// }

// let user = UserConstructor("Max", 32, "male");
// console.log(user);


// function UserFactory(name, age, gender) {
// 	this.name = name;
// 	this.age = age;
// 	this.gender = gender;
// }

// let userFactory = new UserFactory("Mia", 43, "female");
// console.log(userFactory);

// class Car{
// 	constructor(name, speed, price) {
// 		this.name = name;
// 		this.speed = speed;
// 		this.price = price;
// 		this.isActive = false;
// 	}
// 	run() {
// 		if (this.isActive) {
// 			console.log('Уже заведена');
// 		}
// 		console.log('Завелась');
// 		this.isActive = true;
// 	}
// 	changeActive() {
// 		this.isActive = !this.isActive;
// 		this.isActive ? console.log('Завели') : console.log('Заглушили');;
// 	}
// }

// const bmw = new Car('bmw', 240, 9000);
// // bmw.run();
// // console.log(bmw);
// bmw.changeActive();
// bmw.changeActive();
// bmw.changeActive();
// bmw.changeActive();

// class PremiumCar extends Car{
// 	constructor(name, speed, price, type) {
// 		super(name, speed, price)
// 		this.type = type;
// 	}
// }

// const bentley = new PremiumCar('Bentley', 300, 100000, 'premium')

// console.log(bentley);


class Robot{
	constructor(name, power, isAlive) {
		this.name = name;
		this.power = power;
		this.isAlive = isAlive;
	}

	walk() {
		console.log('сделан шаг');
	}

	fire() {
		console.log(`нанесено ${this.power}`);
	}
}

const walli = new Robot("Wall-i", 50, true)
// walli.walk();
// walli.fire();
// console.log(walli);

class Desepticon extends Robot{
	constructor(name, power, isAlive) {
		super(name, power, isAlive);
	}
	canFly() {
		console.log(`взлёт`);
	}
}
class Autobot extends Robot{
	constructor(name, power, isAlive) {
		super(name, power, isAlive);
		delete this.walk()
	}
	canDrive() {
		console.log(`поехали`);
	}
}
const megatrone = new Desepticon('Megatrone', 100, false)
const optimus = new Autobot('Optimus', 120, true)

console.log(megatrone);
megatrone.canFly();

console.log(optimus);
optimus.canDrive();

