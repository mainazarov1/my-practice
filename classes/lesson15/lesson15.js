// class Animal {
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.speed = options.speed;
//   }

//   run() {
//     console.log(`${this.name} бежит со скоростью ${this.speed}`);
//   }
// }

// class Cat extends Animal {
//   constructor(options) {
//     super(options);
//     this.tail = options.tail;
//   }
//   run() {
//     super.run();
// 	}
// 	get animalAge() {
// 		console.log(options.age * 5);
// 	}
// }
// const cat = new Animal({ name: "Tom", age: 10, speed: 30, tail: "Black" });
// cat.run();

const seasons = {
  winter: "winter",
  summer: "summer",
  autumn: "autumn",
  spring: "spring",
  multi: "multi",
};

const season = "winter";
class Product {
  constructor(options) {
    this.name = options.name;
    this.standardPrice = options.standardPrice;
  }
}
class Edible extends Product {
  constructor(options) {
    super(options);
    this.season = options.season;
  }
  get price() {
    if (this.season.includes(season) || this.season.includes(seasons.multi)) {
      return this.standardPrice;
    }
    return this.standardPrice * 1.5;
  }
}

class Electro extends Product {
  constructor(options) {
    super(options);
    this.energy = options.energy;
    this.workTime = options.workTime;
  }
  get price() {
    return this.standardPrice * this.energy * workTime;
  }
  broke() {
    return (workTime = 0);
  }
}
const edibleProducts = [
  {
    name: "Banana",
    standardPrice: 90,
    season: [seasons.multi],
  },
  {
    name: "Apple",
    standardPrice: 90,
    season: [seasons.summer, seasons.autumn],
  },
  {
    name: "Meat",
    standardPrice: 90,
    season: [seasons.autumn, seasons.spring, seasons.summer],
  },
  {
    name: "Bread",
    standardPrice: 90,
    season: [seasons.multi],
  },
];
let newProduct = [];
function createExample() {
  edibleProducts.forEach((product) => newProduct.push(new Edible(product)));
}

createExample();
newProduct.forEach((product) => {
  console.log(product.name, product.price);
});
// console.log(newProduct);

const tech = [
  {
    name: "Phone",
    standardPrice: 90,
    season: [seasons.multi],
  },
  {
    name: "Notebook",
    standardPrice: 90,
    season: [seasons.autumn],
  },
];
let newTech = [];
function createTech() {
  tech.forEach((product) => newTech.push(new Edible(product)));
}
createTech();
newTech.forEach((product) => {
  product.broke();
  console.log(product.name, product.price);
});
console.log(newTech);
