let cars = [
	{
		name: 'Honda Fit',
		color: 'red',
		speed: 130,
		price: 1200,
		type: 'cheap',
	},
	{
		name: 'Honda Accord',
		color: 'grey',
		speed: 160,
		price: 4000,
		type: 'cheap',
	},
	{
		name: 'Volvo VX6',
		color: 'green',
		speed: 150,
		price: 3500,
		type: 'cheap',
	},
	{
		name: 'BMW M5',
		color: 'blue',
		speed: 320,
		price: 9000,
		type: 'cheap',
	},
	{
		name: 'Toyota Prius',
		color: 'green',
		speed: 140,
		price: 4000,
		type: 'cheap',
	},
	{
		name: 'Mazda 6',
		color: 'silver',
		speed: 150,
		price: 3500,
		type: 'cheap',
	},
	{
		name: 'MBenz S500',
		color: 'black',
		speed: 300,
		price: 8700,
		type: 'cheap',
	},
	{
		name: 'Hyundai Sonata',
		color: 'white',
		speed: 190,
		price: 6000,
		type: 'cheap',
	},
	{
		name: 'Lexus GX460',
		color: 'gold',
		speed: 230,
		price: 8000,
		type: 'cheap',
	},
	{
		name: 'Toyota Camry',
		color: 'Yellow',
		speed: 210,
		price: 7000,
		type: 'cheap',
	},
	{
		name: 'Honda Jazz',
		color: 'green',
		speed: 130,
		price: 1500,
		type: 'cheap',
	},
	{
		name: 'Bentley',
		color: 'black and white',
		speed: 250,
		price: 10000,
		type: 'cheap',
	}
]

let cheapCars = []
let standartCars = []
let premiumCars = [];

for (let i = 0; i < cars.length; i++){
	if (cars[i].speed > 170) {
		cars[i].price += 1200;
		cars[i].type = 'premium';
	} else if (cars[i].speed > 140) {
		cars[i].price += 500;
		cars[i].type = 'standart';
	}

	if (cars[i].type == 'cheap') {
		cheapCars.push(cars[i]);
	} else if (cars[i].type == 'standart') {
		standartCars.push(cars[i]);
	} else if (cars[i].type == 'premium') {
		premiumCars.push(cars[i]);
	} 
}
// ----- Дешевый автопарк -----
let sumCheapPark = 0;
let namesCheapPark = [];
for (let j = 0; j < cheapCars.length; j++){
	sumCheapPark += cheapCars[j].price;
	namesCheapPark.push(cheapCars[j].name)
}
sumCheapPark /= cheapCars.length;

let cheapestCheapPark = 0;
let expensiveCheapPark = 0;
let k = 0;
cheapestCheapPark = cheapCars[k];
expensiveCheapPark = cheapCars[k];
while (k < cheapCars.length - 1) {
	k++;
	if (cheapestCheapPark.price > cheapCars[k].price) {
		cheapestCheapPark = cheapCars[k];
	}
	if (expensiveCheapPark.price < cheapCars[k].price) {
		expensiveCheapPark = cheapCars[k];
	}
}
console.log(namesCheapPark)
console.log('средняя цена = ' + sumCheapPark)
console.log(cheapestCheapPark);
console.log(expensiveCheapPark)
console.log('---------------------------------------------')

// ----- Стандарт автопарк -----
let sumStandartPark = 0;
let namesStandartPark = [];
for (let j = 0; j < standartCars.length; j++){
	sumStandartPark += standartCars[j].price;
	namesStandartPark.push(standartCars[j].name)
}
sumStandartPark /= standartCars.length;

let cheapestStandartPark = 0;
let expensiveStandartPark = 0;
k = 0;
cheapestStandartPark = standartCars[k];
expensiveStandartPark = standartCars[k];
while (k < standartCars.length - 1) {
	k++;
	if (cheapestStandartPark.price > standartCars[k].price) {
		cheapestStandartPark = standartCars[k];
	}
	if (expensiveStandartPark.price < standartCars[k].price) {
		expensiveStandartPark = standartCars[k];
	}
}
console.log(namesStandartPark)
console.log('средняя цена = ' + sumStandartPark)
console.log(cheapestStandartPark);
console.log(expensiveStandartPark)
console.log('---------------------------------------------')

// ----- Премиум автопарк -----
let sumPremiumPark = 0;
let namesPremiumPark = [];
for (let j = 0; j < premiumCars.length; j++){
	sumPremiumPark += premiumCars[j].price;
	namesPremiumPark.push(premiumCars[j].name)
}
sumPremiumPark /= premiumCars.length;

let cheapestPremiumPark = 0;
let expensivePremiumPark = 0;
k = 0;
cheapestPremiumPark = premiumCars[k];
expensivePremiumPark = premiumCars[k];
while (k < premiumCars.length - 1) {
	k++;
	if (cheapestPremiumPark.price > premiumCars[k].price) {
		cheapestPremiumPark = premiumCars[k];
	}
	if (expensivePremiumPark.price < premiumCars[k].price) {
		expensivePremiumPark = premiumCars[k];
	}
}
console.log(namesPremiumPark)
console.log('средняя цена = ' + sumPremiumPark)
console.log(cheapestPremiumPark);
console.log(expensivePremiumPark)