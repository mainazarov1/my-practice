// У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130,
};
/* Напишите код для суммирования всех зарплат и сохраните результат в переменной
sum. Если объект salaries пуст, то результат должен быть 0.
*/
let sum = 0;
if (salaries !== 0) {
  Object.values(salaries).forEach((el) => (sum += el));
}
// console.log(sum);
// ==============================================================================

// Есть следующий код:
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
/* Напишите код, который проверит все поля объекта и если это число - умножьте его на 2 */

// let newMenu = Object.fromEntries(
//   Object.entries(menu).map(([key, value]) => {
//     if (value === +value) {
//       return [key, value * 2];
//     } else {
//       return [key, value];
//     }
//   })
// );
// console.log(newMenu);
