// 1. Напишите функцию, получающую на вход два числа. Если оба числа чётные - функция
// возвращает их произведение. Если оба числа нечётные - функция возвращает
// их сумму. Если одно из чисел чётное, а второе нечётное - функция
// возвращает это нечётное число.
// Например:
// functionName(2, 4) - вернет 8 (2 * 4), functionName(3, 7) - вернет 10
// (3 +  7), functionName(5, 6) - вернет 5 (5 - нечетное число, а 6 четное)
// function checkNum(num1, num2) {
// 	if (num1 % 2 === 0 && num2 % 2 === 0) {
// 		return num1 * num2;
// 	}
// 	if (num1 % 2 !== 0 && num2 % 2 !== 0) {
// 		return num1 + num2;
// 	}
// 	if ((num1 + num2) % 2 !== 0) {
// 		if (num1 % 2 !== 0) {
// 			return num1
// 		}
// 		if (num2 % 2 !== 0) {
// 			return num2
// 		}
// 	}
// }
// console.log(checkNum(4,4));
// ==============================================================================

// 2. Есть массив [null, 2, 12, undefined, 'duck', 19]. Напишите новую функцию,
// которая вернет новый массив, но в нём будут только числа: [2, 12, 19] (БЕЗ ИСПОЛЬЗОВАНИЯ МЕТОДОВ МАССИВА и Set)
// const arr = [null, 2, 12, undefined, 'duck', 19];
// function checkArr(array) {
// 	let newArr = [];
// 	if (array !== 0) {
// 		for (let i = 0; i < array.length; i++){
// 			if (array[i] === +array[i]) {
// 				newArr[newArr.length] = array[i];
// 			}
// 		}
// 	}
// 	return newArr;
// }
// const arrayOfNum = checkArr(arr);
// console.log(arrayOfNum);

// ==============================================================================

// 3. Напишите функцию operation(m, n, o), в которой m и n — числовые переменные, а o —
// название математической операции, которую нужно выполнить над m и n
// ("sum" - сумма, "sub" - вычитание, "mul" - умножение, "div" - деление).
// Функция должна возвращать результат операции
// Например:
// operation(5, 5, "sum") - вернет 10 (5 + 5), operation(7, 2, "sub") -
// вернет 5 (7 - 2), operation(2, 2, "mul") - вернет 4 (2 * 2),
// operation(10, 2, "div") - вернет 2 (10 / 5)

// function operation(m, n, o) {
//   if (o === "sum") {
//     return m + n;
//   } else if (o === "sub") {
//     return m - n;
//   } else if (o === "mul") {
//     return m * n;
//   } else if (o === "div") {
//     return m / n;
//   }
// }
// console.log(operation(5,5,"mul"));

console.log(typeof [1, 2, 3])
console.log(typeof 's')
console.log(typeof 11)
console.log(typeof {name: 'A'})
console.log(typeof function (){})
