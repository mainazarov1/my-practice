/* 1. Создайте объект пользователя, где будет его имя, возраст и род деятельности. 
Затем, при помощи тернарного оператора, создайте условие, которое проверяет 
совершеннолетний ли пользователь и выведите в консоль сообщение об этом. */

const user = {
	name: 'Bob',
	age: 2,
	action: 'developer'
}
user.age >= 18 ? console.log('пользователь совершеннолетний!') : console.log('не хватает годиков!');

// ==============================================================================

/* 2. Дана строка "ac/dc". Проверьте, что первым символом
этой строки является буква "а", если это так, выведите
"да", иначе выведите "нет" */

const str = "ac/dc";
(str[0] == 'a') ? console.log("да") : console.log("нет");

// ==============================================================================

/* 3. Дана строка состоящая из 4 символов: "84a7". Найдите
сумму цифр внутри */

const newStr = "84a7";
let sum = 0;

// if (newStr[0] !== 'a') {
// 	sum += +newStr[0]
// }
// if (newStr[1] !== 'a') {
// 	sum += +newStr[1]
// }
// if (newStr[2] !== 'a') {
// 	sum += +newStr[2]
// }
// if (newStr[3] !== 'a') {
// 	sum += +newStr[3]
// }

// let i = 0;
// while (i < newStr.length) {
// 	if (newStr[i] !== 'a') {
// 		sum += +newStr[i]
// 	}
// 	i++
// }

newStr.split('').map(el => {
	if (el !== 'a') {
		sum += +el
	}
})

console.log(sum);