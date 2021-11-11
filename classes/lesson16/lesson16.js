// class Message{
// 	constructor(message) {
// 		this.message = message;
// 	}
// 	makeMessageBigger(params = 'I') {
// 		return function (params1) {
// 			return params += params1;
// 		}
// 		// return this.message += params;
// 	}
// }
// let msg = new Message('Hello');
// let mess = msg.makeMessageBigger();
// console.log(mess(' am'));
// console.log(mess(' King-Kong'));
// console.log(msg.message);



class Laptop{
	constructor(options) {
		this.name = options.name;
		this.details = options.details;
		// this.price = 0;
	}
	get price() {
		let stPrice = 0;
		details.forEach((detail) => {
			stPrice += detail.price;
		})
		return stPrice;
	}
}
class Detail{
	constructor(detail) {
		this.name = detail.name;
		this.price = detail.price;
	}
};

// let newDetails = [];
// details.forEach((detail) => {
// 	newDetails.push(new Detail(detail))
// })
const details = [
	{
		name: 'cpu',
		price: 100
	},
	{
		name: 'gpu',
		price: 200
	},
	{
		name: 'display',
		price: 390
	},
	{
		name: 'keyboard',
		price: 50
	},
]

const obj = new Laptop({ name: 'Lenovo', details });
console.log(obj);