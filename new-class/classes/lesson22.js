// class Rectangle{
// 	constructor(width = 0, height = 0) {
// 		this.width = width;
// 		this.height = height;
// 	}
// 	P = () =>	console.log((this.width + this.height) * 2);
// 	S = () => console.log(this.width * this.height);
// }
// const rect1 = new Rectangle(10, 20);
// console.log(rect1);
// rect1.P();
// // rect1.S = function () {
// // 	console.log(this.width * this.height);
// // }
// rect1.S()


// const rect2 = new Rectangle(5, 15);
// console.log(rect2);
// rect2.P();
// rect2.S();

class User {
	#password = null;
	constructor(name = '', age = 0, job = '', login = '', password = '') {
		this.name = name;
		this.age = age;
		this.job = job;
		this.login = login;
		this.#password = password;
	}
	// getPass = () => {
	// 	return this.__password;
	// }
	// setPass = (newPassword) => {
	// 	this.__password = newPassword;
	// }
	get password() {
		return this.#password;
	}
	set password(newPassword) {
		this.#password = newPassword;
	}
}

const user1 = new User('Islam', 27, 'developer', 'mainazarov1', '12341234');
// console.log(user1);
// console.log(user1.getPass());
// user1.setPass('qwerty');
// console.log(user1);
console.log(user1);
console.log(user1.password);
user1.password = 'qwerty';
console.log(user1.password);
