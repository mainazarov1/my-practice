/* 1. Создайте массив и поместите в него 10 любых элементов */
const x = 100;
const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, x];
console.log(arrOfNumbers);
// ==============================================================================

/* 2. Создайте массив и поместите в него как минимум 5 разных типов данных */
const arrOfTypes = [1, 2, 'car', [33, 66, 99], {name: 'Islam', age: 27}, null, undefined, x, String(5050), true]
console.log(arrOfTypes);
// ==============================================================================

/* 3. Создайте вложенный массив и попробуйте получиться доступ до элемента внутри вложенного массива */
const arrInArray = [1,['Hello', 'World'],[[1, 2, 3],[4, 5, 6]],[true, false]]
console.log(arrInArray[2][1]);