/* 1: Дано первое слагаемое - 4, второе слагаемое - 12, третье
слагаемое сумма первого и второго слагаемого. Чему равно третье
слагаемое? Напишите код. */
const a = 4;
const b = 12;
const c = a + b;
console.log(c);

// ==============================================================================

/* 2: Переменная x хранит число. Написать код, который находит квадрат числа x. */
const x = 5;
console.log(x * x);
/* console.log(Math.pow(x, 2)); */

// ==============================================================================

/* 3: Даны обрывки слов, требуется соединить их:
Java
ворд
конкурентно
способный
оваться
кросс
Script
поли
морфизм
ориентир */

console.log('Java' + 'Script');
console.log('конкурентно' + '-' + 'способный');
console.log('кросс' + 'ворд');
console.log('поли' + 'морфизм');
console.log('ориентир' + 'оваться');

// ==============================================================================

/* 4: Дано число 7. Написать код, умножающий 7 на числа от 2-9.
 */
let num = 7;
/* for (let i = 2; i < 10; i++){
	console.log(num * i)
} */

console.log(num * 2);
console.log(num * 3);
console.log(num * 4);
console.log(num * 5);
console.log(num * 6);
console.log(num * 7);
console.log(num * 8);
console.log(num * 9);

// ==============================================================================

/* 5: Написать код, который проверяет, делится ли значение переменной на 5 без остатка или нет (вывести в консоль true или false)*/
const surplus = 20;

/* if (surplus % 5 == 0) {
  console.log(true);
} else {
  console.log(false);
} */

console.log(surplus % 5 == 0);