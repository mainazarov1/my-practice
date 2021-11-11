/*Задача №1. - Функция которая проверяет является ли число четным! */
// function isEven(num) {
// 	return (num % 2 == 0) ? true : false;
// }
// console.log(isEven(6));

/* Задача №2. - Функция на проверку пользователя */
// let user = {
// 	name: 'Bob',
// 	age: 18
// };
// let user1 = {
// 	name: 'Tom',
// 	age: 25
// };
// let user2 = {
// 	name: 'Jhon',
// 	age: 15
// };
// let users = [];
// users.push(user);
// users.push(user1);
// users.push(user2)

// function showSecretContent(currentUser) { // Функция пропуска на сайт!
// 	return (isAdult(currentUser.age) === true) ? console.log(`Добро пожаловать ${currentUser.name}`) : console.log(`Вам нет 18! ${currentUser.name}`)
// }

// function isAdult(userAge) { // Проверяет является ли пользователь совершеннолетним!
// 	return userAge >= 18 ? true : false
// }

// for (let i = 0; i < users.length; i++) { // Цикл на перебор массива из объектов
// 	showSecretContent(users[i])
// }

/* Задача №3 - Функция проверки слова на палидром */

// isPalindrome = (word) => {
// 	let palindrome = [];
// 	for (let i = word.length -1; i >= 0; i--) {
// 		palindrome += (word[i])
// 	}
// 	return (palindrome === word) ? true : false;
// }
// console.log(isPalindrome('aka'))

// let result = '';

function isPalindrome(message) {
	let messageWS = '';

  for (let i = 0; i > message.length; i++) {
    if (message[i] !== ' ') {
      messageWS += message[i];
    }
	}
	return messageWS;
  // for (let i = messageBack.length - 1; i >= 0; i--) {
  // 	result += (messageBack[i])
  // }
  // console.log(result);
  // return (result == messageBack) ? true : false;
}

console.log(isPalindrome("aka aka"));

/* Задача №4 - Возвращает тип */
// showType = (a) => {
// 	return typeof (a);
// }
// console.log(showType(true));
