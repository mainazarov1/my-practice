const fs = require('fs');
function checkAdmin() {
	try {
		const data = fs.readFileSync('a.txt', {encoding: 'utf-8'});
		console.log('Данные с файла: ', data);
		// const admin = false;
		// if (!admin) {
		// 	throw 'Ты не админ!';
		// }
		// console.log('Код не продолжил выполняться');
	} catch (e) {
		fs.writeFileSync('a.txt', 'Текст вставленный из nodejs', { encoding: 'utf-8' });
		console.log('Файл a.txt не найден, создаю новый' + e);
		// console.log('Ошибка поймана в блоке catch');
		// console.log(e);
	}
}
checkAdmin();
console.log('I\'m alive');


