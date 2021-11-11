/*
Задание 1.
// Написать классы:
// Car - состоит из свойств: name, speed, color, details.
// Detail -  состоит из свойств: name, type, power.
// DriftCar - наследуется от Car, новое св-во - hasTune: boolean, и метод drift().
При создании экземпляра класса Car в поле details передать экземпляры класса Detail. (details - массив деталей )


Задание 3. (доп)
Так же как и в задании 1.
Добавить get price классу Car. 
Скорость машины вычислить от силы ее деталей. // детали у машины 3: мотор, коробка, тормоза. На скорость машины влияет Мотор и Коробка (мотор оказывает в 2 раза больше влияния, чем коробка)
Управление машины - зависит от коробки и тормозов (тормоза дают в 2 раза больше чем коробка)
Цена высчитывается суммой всех ее деталей + Зависит от скорости и управления.
Классы DriftCar, StandardCar, PremiumCar: наследуются от Car, но price этих классов берет price родителя и прибавляет к нему свою сумму (в зависимости от типа)
У DriftCar есть доп. деталь ( nitro поле в details) .
*/

class Car {
  constructor(name, color, details) {
    this.name = name;
    this.speed = 200;
    this.color = color;
    this.details = details;

    details.forEach((detail) => {
      if (detail.name === "мотор" || detail.name === "коробка") {
        if (detail.type === "important") {
          this.speed += (detail.power * 2);
        } else this.speed += detail.power;
      }
		});
    return this.speed;
  }
  get price() {
		details.forEach((detail) => {
			this.price = 10000
			detail.price = 300;
			if (this.speed > 300) {
				this.price += detail.price
			}
    });
    return this.speed;
  }
}
class Detail {
  constructor(options) {
		this.name = options.name;
		this.type = options.type;
    this.power = options.power;
  }
}
class DriftCar extends Car {
  constructor(name, color, details) {
    super(name, color, details);
    this.hasTune = true;
  }
  drift() {}
}
const details = [
  {
    name: "мотор",
    type: "important",
    power: 50,
  },
  {
    name: "коробка",
    type: "standart",
    power: 50,
  },
  {
    name: "тормоза",
    type: "important",
    power: 50,
  },
];
let newDetails;
function createDetails() {
  return (newDetails = details.map((detail) => new Detail(detail)));
}
// createDetails();
// console.log(newDetails);
// const det = new Detail(details[0]);
// console.log(det);
// function carSpeed() {
// 	let speed = 0;
// 	if (details[0] )
// }
let a = new Car("bmw", "red", createDetails());
console.log(a);

console.log(new DriftCar("Mazda", "black", createDetails()));

/*
Задание 2.
Написать класс Animal. свойства - name, age. методы breathe() и sleep().
класс WildAnimal. наследуется от Animal, доп. свойсвто - isHungry: boolean. Метод breath() должен вызвать родительский метод и потом что то вывести в консоль.
*/
/*
class Animal{
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	breathe() {
		console.log('breathe')
	}
	sleep() {
	}
}
class WildAnimal extends Animal{
	constructor(options, boolean) {
		super(options);
		this.isHungry = boolean;
	}
	breath() {
		breathe()
	}
}

let lion = new Animal('Lion', 20)
let tiger = new WildAnimal('Tiger', 10, true);
console.log(lion);
console.log(tiger);
*/

/*
Задание 4. (доп)
Мифическое сражение.
классы - Witcher, Dragon, Item, Spell; (Ведьмак Дракон Предмет Способность)
У предмета есть прочность. Используем ее - предмет портится. От прочности зависит эффективность предмета (шлем лучше защищает, меч - больше урона)
У Ведьмака есть здоровье, энергия, сила, предметы и заклинания.
Когда Ведьмак произносит заклинание - тратится энергия. Нельзя произнести заклинание, которое требует 10 энергии имея 9.
Дракон так же имеет здоровье, энергию. Может дышать огнем тратя энергию. Может взлететь в воздух и восполнить энергию. (когда Дракон в воздухе, ведьмак может поразить его только заклинанием).
Предметы так же могут обладать доп эффектами. Вроде отразить атаку нападающего, Восполнять здоровье, энергию и т.д.
*/
class Witcher{

	constructor() {
		this.health = health;
		this.energy = energy;
		this.power = power;
		this.items = new Item().use();
		this.spell = new Spell();
	}
}
class Dragon{
	constructor() {
		this.health = health;
		this.energy = energy;
	}
}
class Item{
	constructor(strength) {
		this.strength = strength;
	}
	use() {
		this.strength -= 10;
	}
}
class Spell{

}
