const fs = require('fs');

console.log('log 1');

setTimeout(function () {
	console.log('set timeout 1');
}, 1000);
console.log('Начинаю чтение файла');
fs.readFile('a.txt', {encoding: 'utf-8'}, function (data) {	
	console.log('Завершенно чтение файла, вот ваши данные: ', data);
	fs.writeFile('b.txt', data, function () {
		fs.rm('a.txt', function () {
			console.log('Перезапись населения');
		})
	})
});
// console.log('Получил данные с файла: ', data);
console.log('log 2');