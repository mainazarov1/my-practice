// Создайте цикл, который выведет числа от 1 до 20:
// - если число делится на 3 без остатка (это числа 3, 6, 9 и тд), то в консоль вместо цифры нужно вывести слово 'Fizz'
// - если число делится на 5 без остатка (это числа 5, 10, 15 и тд), то в консоль вместо цифры нужно вывести слово 'Buzz'
// - если число не делится без остатка ни на 3, ни на 5 (это числа 1, 2, 4, 7 и тд), то в консоль нужно вывести эту цифру

for (let i = 1; i <= 20; i++) {
	i % 5 === 0 && i % 3 === 0
		? console.log('Fizz-Buzz')
		: i % 5 === 0
    ? console.log("Buzz")
    : i % 3 === 0
    ? console.log("Fizz")
    : console.log(i);
}
