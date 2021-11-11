let allCars = [];
let ecoCollection = { name: "Эконом", cars: [] };
let standartCollection = { name: "Стандарт", cars: [] };
let premiumCollection = { name: "Премиум", cars: [] };
for (let i = 1; i <= 12; i++) {
  allCars.push(createCar());
}
function createCar() {
  return (car = {
    name: "",
  });
}
for (let car of allCars) {
  car.name = setCarName();
  car.speed = setCarSpeed();
  car.color = setCarColor();
  car.type = setCarType(car.speed);
  car.price = setCarPrice(car.color, car.type);
  sortCars(car);
}
function setCarName() {
  let num = Math.round(Math.random() * (4 - 1) + 1);
  switch (num) {
    case 1:
      return "BMW";
    case 2:
      return "TOYOTA";
    case 3:
      return "FORD";
    case 4:
      return "KIA";
  }
}
function setCarSpeed() {
  return (speed = Math.round(Math.random() * (300 - 100) + 100));
}
function setCarColor() {
  let colorNum = Math.round(Math.random() * (5 - 1) + 1);
  switch (colorNum) {
    case 1:
      return "red";
    case 2:
      return "blue";
    case 3:
      return "silver";
    case 4:
      return "black";
    case 5:
      return "white";
  }
}
function setCarType(speed) {
  if (speed < 150) {
    return "eco";
  } else if (speed > 150 && speed < 200) {
    return "standart";
  } else if (speed > 200) {
    return "premium";
  }
}
function setCarPrice(color, type) {
  price = 2000;
  switch (type) {
    case "standart":
      price += 500;
      break;
    case "premium":
      price += 1500;
      break;
  }
  switch (color) {
    case "red":
      price += 300;
      break;
    case "white":
      price += 200;
      break;
  }
  price += Math.round(Math.random() * (500 - 0) + 0);
  return price;
}
function sortCars(car) {
  switch (car.type) {
    case "eco":
      return ecoCollection.cars.push(car);
    case "standart":
      return standartCollection.cars.push(car);
    case "premium":
      return premiumCollection.cars.push(car);
  }
}
let collections = [ecoCollection, standartCollection, premiumCollection];
function getStatistics(carColl) {
  let carCount = carColl.cars.length;
  console.log(`Количество машин: ${carCount}`);
  let sum = 0;
  let highPrice;
  let lowPrice;
  for (let car of carColl.cars) {
    sum += car.price;
    highPrice = carColl.cars[0];
    lowPrice = carColl.cars[0];
    for (let car of carColl.cars) {
      if (highPrice.price < car.price) {
        highPrice = car;
      }
      if (lowPrice.price > car.price) {
        lowPrice = car;
      }
    }
  }
  console.log(`Общая цена парка: ${sum}`);
  console.log(`Средняя цена парка ${Math.round(sum / carCount)}`);
  console.log(highPrice);
  console.log(lowPrice);
}
for (let coll of collections) {
  console.log(`Статистика по ${coll.name}`);
  getStatistics(coll);
}
console.log(allCars);