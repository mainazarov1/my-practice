// function test() {
// 	return 10;
// }
// const resultTest = test();
// console.log(resultTest);


// Arrow function
const str = 'Hallo'

function log(text) {
	console.log(text);
}

const log2 = function(text) {
	console.log(text);
}

const log3 = (text) => {
	console.log(text);
}

const log4 = text => console.log(text);

log(str);
log2('Hi');
log3('Bye');
log4('Arrow');

const cat = {
	name: 'Bars',
	age: 2,
	meow: () => {
		let b = 20;
		console.log('meow');
	},
	sayName: function() {
		console.log(`My name is ${cat.name}`);
		console.log('My name is', cat.name);
		console.log('My name is' + ' ' + cat.name);
		console.log(`My name is ${this.name}`);
	},
}
cat.meow();
cat.sayName()
console.log(this);