function sum(num1, num2) {
	console.log('num1:', num1, ' num2:', num2);
	if (isNaN(+num1) || isNaN(+num2)) {
		console.log('Add a number');
	} else {
		console.log(+num1 + Number(num2));
	}
}

sum('20', '20');

sum('20', {name: 'Dan'});

sum('20', '20a');
sda
console.log(typeof NaN);


