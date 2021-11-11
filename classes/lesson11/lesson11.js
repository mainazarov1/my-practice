function calcDamage(armor, damage) {
  if (armor < damage) {
    return damage - armor;
  }
  return 0;
}
let desepticon = {
  name: "Megathrone",
  hp: 100,
  armor: 5,
  power: 14,
  attack: function () {
    return autoBot.getDamage(this.power);
  },
  getDamage: function (damage) {
    let partOfDamage = damage / 2;
    let restDamage = calcDamage(this.armor, partOfDamage);
    this.hp -= partOfDamage + restDamage;
    if (partOfDamage > this.armor) {
      return (this.armor = 0);
    }
    this.armor -= partOfDamage;
  },
};
let autoBot = {
  name: "Optimus",
  hp: 100,
  armor: 40,
  power: 20,
  attack: function () {
    return desepticon.getDamage(this.power);
  },
  getDamage: function (damage) {
    let partOfDamage = damage / 2;
    let restDamage = calcDamage(this.armor, partOfDamage);
    this.hp -= partOfDamage + restDamage;
    if (partOfDamage > this.armor) {
      return (this.armor = 0);
    }
    this.armor -= partOfDamage;
  },
};
let i = 0;
while (true) {
  let kick = Math.round(Math.random() * 1);
  if (autoBot.hp > 0 && desepticon.hp > 0) {
    if (kick === 1) {
      autoBot.attack();
    } else desepticon.attack();
  } else if (autoBot.hp <= 0) {
    autoBot.hp = 0;
    console.log(`${autoBot.name} повержен. hp:${autoBot.hp}`);
    console.log(
      `${desepticon.name} победил. hp:${desepticon.hp}, armor:${desepticon.armor}`
    );
    break;
  } else if (desepticon.hp <= 0) {
    desepticon.hp = 0;
    console.log(`${desepticon.name} повержен. hp:${desepticon.hp}`);
    console.log(
      `${autoBot.name} победил. hp:${autoBot.hp}, armor:${autoBot.armor}`
    );
    break;
  }
}
// // //------------------------------------------------------------------
// let season = 'summer';
// let fruits = [
// 	{
// 		name: 'Apple',
// 		season: 'summer',
// 		price: Math.round(Math.random() * (300 - 1) + 1),
// 		setPrice: function () {
// 			if (season != this.season) {
// 				this.price += 500;
// 			}
// 		},
// 		showFruit: function () {
// 				console.log(`${this.name}: ${this.price}`);
// 		}
// 	},
// 	{
// 		name: 'Banan',
// 		season: 'summer',
// 		price: Math.round(Math.random() * (300 - 1) + 1),
// 		setPrice: function () {
// 			if (season != this.season) {
// 				this.price += 500;
// 			}
// 		},
// 		showFruit: function () {
// 				console.log(`${this.name}: ${this.price}`);
// 		}
// 	},
// 	{
// 		name: 'Citrus',
// 		season: 'winter',
// 		price: Math.round(Math.random() * (300 - 1) + 1),
// 		setPrice: function () {
// 			if (season != this.season) {
// 				this.price += 1000;
// 			}
// 		},
// 		showFruit: function () {
// 				console.log(`${this.name}: ${this.price}`);
// 		}
// 	},
// ]
// for (let fruit of fruits) {
// 	fruit.setPrice();
// 	fruit.showFruit();
// }