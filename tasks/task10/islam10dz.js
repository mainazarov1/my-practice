function CarFactory(name = "", color = "", speed = 0) {
  this.name = name;
  this.color = color;
  this.speed = speed;
  this.startCar = false;
  this.run = () => {
    if (this.startCar === true) {
      console.log("Машина уже заведена");
    } else {
			console.log("Машина завелась");
			this.startCar = true;
    }
  };
  this.stop = () => {
    if (this.startCar === false) {
      console.log("Машина уже заглушена");
    } else {
			console.log("Машина заглушена");
			this.startCar = false;
    }
  };
  this.setName = (name) => {
    this.name.toString(name);
  };
  this.setColor = (color) => {
    this.color = color;
  };
  this.setSpeed = (speed) => {
    this.speed = +speed;
  };
  this.getCarInfo = () => {
    console.log(this.name);
    console.log(this.color);
    console.log(this.speed);
  };
}
let honda = new CarFactory("Honda", 'red', 300);
honda.getCarInfo();



// Task 2 / AnimalFactory

let meet = 300;
let weed = 500;

let animals = [];
function AnimalFactory(name, type) {
  this.name = name;
  this.type = type;
  if (this.type === "хищник") {
    this.food = "мясо";
  } else if (this.type === "млекопит") {
    this.food = "трава";
  }
  if (this.type === "хищник") {
    this.lifeTime = 100;
  } else if (this.type === "млекопит") {
    this.lifeTime = 150;
  }
  if (this.lifeTime === 0) {
    this.isAlive = false;
  } else this.isAlive = true;
  this.die = () => {
    if (this.isAlive === false) {
      console.log(`${this.name} is DIED`);
    } else if (this.isAlive === true) {
      console.log(`Остаток жизни: ${this.lifeTime}`);
    }
  };
  this.getAnimalInfo = () => {
    console.log(`name: ${this.name}`);
    console.log(`type: ${this.type}`);
    console.log(`food: ${this.food}`);
    // console.log(`lifeTime: ${this.lifeTime}`);
    // console.log(`isAlive: ${this.isAlive}`);
    this.die();
  };
	this.skipTime = skipTime();
  this.eat = () => {
    if (this.food === "мясо") {
      meet -= 10;
    }
    if (this.food === "трава") {
      weed -= 10;
    }
  };
  animals.push(this);
}
function skipTime() {
  animals.forEach((animal) => {
		animal.lifeTime -= 30;
		if (meet > 0 || weed > 0) {
			animal.eat();
		}
	});
}

let tiger = new AnimalFactory("Tiger", "хищник");
let lion = new AnimalFactory("Lion", "хищник");
let cow = new AnimalFactory("Cow", "млекопит");
let lama = new AnimalFactory("Lama", "млекопит");