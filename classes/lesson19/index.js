class Animal{
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}
	run(speed) {
		this.speed = speed;
		console.log(`${this.name} бежит со скоростью ${this.speed}`);
	}
	stop() {
		this.speed = 0;
		console.log(`${this.name} стоит`);
	}
}
class Homosapiens extends Animal{
	whoAmI() {
		console.log(`Привет меня зовут: ${this.name}`);
	}
}
// const person = new Homosapiens('Андрей');
// person.run(21);
// person.whoAmI();


function Machine() {
	this.powered = false;
	this.on = function () {
		this.powered = true;
		console.log('Машина вкл');
	}
	this.off = function () {
		this.powered = false;
		console.log('Машина выкл');
	}
};
function CoffeeMachine(model) {
	Machine.call(this);
	CoffeeMachine.prototype = Machine.prototype;
	this.model = model;
	this.getModel = function () {
		console.log(this.model);
		return this.model;
	}
};
// const coffeeMachine = new CoffeeMachine('mark2');
// coffeeMachine.getModel();
// coffeeMachine.on()

function getName() {
	console.log(this, this.name);
}

const user = {
	name: 'HArry'
}

getName.call(user)