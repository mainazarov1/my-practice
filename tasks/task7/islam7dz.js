// ---- 1) Написать функцию, которая будет возводить число в степень.
// function power(a, b) {
//   let result = 1;
//   while (b > 0) {
// 		result *= a;
// 		b--;
//   }
//   return result;
// }
// let result = power(2, -5);
// console.log(result);

// ---- 2) Написать функцию, которая будет печатать определенное количество сообщений в console.log();
function showMessage(a, b) {
	while (b > 0) {
		console.log(a)
		b--;
	}
}
showMessage('Hello every one !!', 5)