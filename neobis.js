
// // const arr = [3, 54, 8798764, 2342, 45645]

// // function check(arr) {
// // 	const max = Math.max.apply(null, arr)
// // 	// const max = Math.max(...ar);
// // 	const maxIndex = arr.indexOf(max)
// // 	return [max, maxIndex]
// // }
// // // function check(arr) {
// // // 	for (let i = 0; i < arr.length; i++){
		
// // // 	}
// // // }
// // console.log(check(arr))
// // // console.log(arrayFind);

// var num = 12;
// var num2 = 18;
// var max = Math.max(num,num2);
// var min = Math.min(num,num2);
// if (max - min > 2) {
// 	for (let i = min + 1; i < max; i++){
// 		if (i % 5 == 2 || i % 5 == 3) {
// 			console.log(i)
// 		}
// 	}
// } else {
// 	console.log("No any number")
// }
// // console.log(max);
// var line = [1231,4421,5456,2016,1231]
// while (true){
  
//   if (line == 2016) {
//     console.log("Access permitted");
//     break;
//   } else{
//     console.log("Incorrect password");
//   }
// }


// TODO 5 task
// var input = '1';
// var line;
// for (var i = 1; i <= Number(input); i++){
// 	line = '0 0 1'.split(' ');
// 	console.log(line);
// 	console.log(Number(line[0]));
// 	console.log(Number(line[1]));
// 	console.log(Number(line[2]));
// 	function boolElection(Number(line[0]), Number(line[1]) ,Number(line[2])){
// 		(Number(line[0]) + Number(line[1]) + Number(line[2]) > 1) ? 1 : 0;
// 	};
// 	line.
//   // console.log(boolElection(Number(line[0]), Number(line[1]), Number(line[2])));
// }

// var input = 1;
// var str = '0 0 1'
// for (var i = 1; i <= parseInt(input); i++){
// 	line = str.split(' ');
// 	var sum = line.reduce((acc, cur) => acc + cur, 0);
//   if (sum > 1){
//     console.log(1);
//   } else {
//     console.log(0)
//   }
// }

// TODO 6 task

// var input = '5';
// var line = '14 3 33 1 2'.split(' ');

// console.log(line);
// var result = line.sort((a, b) => b - a);

// [...new Set(result)]
// console.log(result[1]);

// var input = readline();
// var line = readline().split(' ');

// var result = line.sort((a, b) => b - a);
// var unique = [...new Set(result)]
// console.log(unique[1].toString());

// TODO 10 task

// var input = '5';
// var line = '1 2 3 4 5 6'.split(' ');
// var numbers = '2 3'.split(' ');
// var result = line.slice(0, parseInt(input))
// result.splice(numbers[1] - 1, 0, numbers[0])
// console.log(result.join(' '));
// var [k,j] = ['2', '3']

// console.log(k);
// var input = '5';
// var line = readline().split(' ');
// var numbers = readline().split(' ');
// function addNum () {
  // if(parseInt(input) > parseInt(numbers[1])) {
  //   line.splice(numbers[1], 0, numbers[0])
  // }
  // var result = line.join(' ')
  // console.log(result);

// var arr = [];
// var line = '1 2 3 4 5 6'.split(' ')
// for (let i in line){
//   arr.push(parseInt(line[i]));
// }
// var [k, j] = '10 18'.split(' ');
// arr.splice(parseInt(j) - 1, 0, parseInt(k));
// console.log(arr.join(' '));

// console.log(result);
// console.log(arr.splice(parseInt(j), 0, parseInt(k)))
// console.log(result);
// TODO 11 task

// var input = '4';
// var arr = ['12 14 67 45',
// 	'32 87 45 63',
// 	'69 45 14 11',
// 	'40 12 35 15'];
// for (let i = 0; i < parseInt(input); i++){
// 	// console.log(arr.);
// 	console.log(arr[i].split(' ').map(el => parseInt(el)));
// 	// console.log(arr[i].map(el => parseInt(el)));
// }
// console.log(arr);

// TODO 12 task

// var input = parseInt('4');
// var array = ['101 80', '305 90', '100 80', '200 14'];
// var arr = [];
// for (var i = 1; i <= input; i++){
// 	arr.push(array[i-1].split(' '))
// }
// console.log(result);
// result.sort((a, b) => (b[1] - a[1]));

// result.sort((a, b) => {
// 	if (a[1] - b[1] == 0) {
// 		a[0] - b[0];
// 	}
// });

// arr.sort((a, b) => a[1] !== b[1] ? b[1] - a[1] : b[0] < a[0] ? 1 : -1)
// for (let j of arr) {
// 	console.log(j);
// }
// var sss = result.(el => el.sort((a, b) => b - a));

// console.log(sss);


// todo ?

// var input = '4';
// var arr1 = '12 14 67 45'.split(' ');
// var arr2 = '32 87 45 63'.split(' ');
// var arr3 = '69 45 64 11'.split(' ');
// var arr4 = '40 12 35 15'.split(' ');
// var allNum = [arr1,arr2,arr3,arr4];
// // for (let i = 0; i < parseInt(input); i++){
// // 	var line = arr[i].split(' ');
// // 	allNum.push(line)
// // }

// var result = allNum.flat();
// var sum = result.reduce((acc, cur) => (parseInt(acc) + parseInt(cur))) / result.length;
// function multMatrixNumber(A)  // a - число, A - матрица (двумерный массив)
// {   
//   var m = A.length, n = A[0].length, B = [];
// 	for (var i = 0; i < m; i++) {
// 		B[i] = [];
// 		for (var j = 0; j < n; j++) {
// 			(A[i][j] > sum) ? B[i][j] = '255' : B[i][j] = '0';
// 		}
//   }
//   return B;
// }
// var newArr = multMatrixNumber(allNum);
// for (let j = 0; j < newArr.length; j++){
// 	console.log(newArr[j].join(' '));
// }
// var allresult = result.map(el => {
// 	if (parseInt(el) < sum) {
// 		console.log('0');
// 	} else {
// 		console.log('255');
// 	}
// })
// console.log(result);
// console.log(sum);
// console.log((allNum));
// console.log(allresult);



// for (var i = 0; i < ; i++) {
  // var line = '10';
  // if(parseInt(line) > 0){
  //   var sum = 0;
  //   for(var j = 1; j <= parseInt(line); j++){
  //     if(parseInt(line) % j === 0) {
  //       sum += +j;
  //     }
  //   }
  //   console.log(String(sum));
  // }
// }

// function sumDivisors(num){
//   var sum = 0;
//   for (var i = 1; i <= num; i++){
//     if (!(num % i)) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }

// sumDivisors(6);
// sumDivisors(10);


// todo task 8

// // var input = '11';
// var arr = ['1 Q'];
// var cats = 0, rats = 0, frogs = 0;
// var total = arr.map(el => el.split(' ')).reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
// var animals = arr.map(el => el.split(' ')).forEach(animal => {
// 	if (animal[1] == 'C') {
// 		cats += parseInt(animal[0])
// 	}
// 	if (animal[1] == 'R') {
// 		rats += parseInt(animal[0])
// 	}
// 	if (animal[1] == 'F') {
// 		frogs += parseInt(animal[0])
// 	}
// })
// console.log(`Total: ${total} animals`);
// console.log(`Cats: ${cats}`);
// console.log(`Rats: ${rats}`);
// console.log(`Frogs: ${frogs}`);
// console.log(`Percentage of cats: ${(Math.ceil(cats * 100) / total).toFixed(2)} %`);
// console.log(`Percentage of cats: ${(Math.ceil(rats * 100) / total).toFixed(2)} %`);
// console.log(`Percentage of cats: ${(Math.ceil(frogs * 100) / total).toFixed(2)} %`);

// for (let i = 0; i < parseInt(input); i++){
	
// }

// todo task 13

// var input = '3';
// var arr = '1 7 9'.split(' ');
// var input2 = '4';
// var arr2 = '9 7 7 1'.split(' ');
// var allArr = [arr,arr2].flat()
// var newarr = arr2.filter((x, y) => allArr.indexOf(x) == y);
// var unique = arr2.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
// var unique2 = arr2.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
// var result = arr. (el => {
// 	if (arr2.includes(el)) {
// 		return 'YES';
// 	}
// })
// var result = arr.every(el => arr2.includes(el));
// if (result) {
// 	console.log('YES');
// }
// console.log(result);
// console.log(unique);
// console.log(unique2);

// console.log(newarr);




// const isPalindrome = (str) => {
// 	let text = str.split(" ")
// 	let result = [];
// 	for (let i = 0; i < text.length; i++){
// 		let newStr = text[i].split('').map((el,index) => {
// 			if (index % 2 == 0) {
// 				return el.toUpperCase()
// 			} else {
// 				return el.toLowerCase();
// 			}
// 		})
// 		result.push(newStr.join(''))
// 	}

// 	console.log(result.join(' '));
// 	for (let i = 0; i < text.length; i++){
// 		if (i !== ' ') {
// 			if (i % 2 == 0) {
// 				console.log(text[i].toUpperCase())
// 			} else {
// 				console.log(text[i].toLowerCase());
// 			}
// 		} else {
// 			continue
// 		}
// 	}
// 	let arr = text.map((el, i) => {
// 		if (i % 2 == 0 && el != ' ') {
// 			console.log(i,el)
// 			str.toUpperCase(el)
// 		}
// 	});
// 	console.log(arr);
// };
// isPalindrome("z")


// var inp = '4';
// var a = ['101 80'.split(' '), '305 90'.split(' '), '200 14'.split(' '), '100 90'.split(' ')];
// var arr = [];
// for (var i = 0; i < parseInt(inp); i++){
// 	var line = a[i];
// 	arr.push(line);
// }
// arr.sort((a, b) => a[1] !== b[1] ? b[1] - a[1] : b[0] < a[0] ? 1 : -1);
// for (let j of arr) {
// 	console.log(parseInt(j[0]), parseInt(j[1]));
// }

// let a = 10;
// let b = 20;

// { name: b, age: a } = { a, b };
// console.log(a, b);

// var s = "   fly me   to   the moon  ";
// var lengthOfLastWord = function (s) {
// 	var arr = [];
// 	var res = s.split(' ')
// 	res.map(el => {
// 		if (el !== '') {
// 			arr.push(el)
// 		}
// 	})
// 	return arr[arr.length - 1].length
// };
// console.log(lengthOfLastWord(s));


// var wordPattern = function (pattern, s) {
// 	return pattern
// };

// console.log(wordPattern('abba', "dog cat cat dog"))


// var thirdMax = function (nums) {
// 	var result = 0;
// 	for (let i = 0; i < 3; i++) {
// 		// result = nums.filter(el => el === +el)
// 		result = nums.find((el, i, nums) => {
// 			if (el === (Math.max.apply(Math, nums))) {
// 				nums.splice(i, 1)
// 			}
// 		})
// 	}
// 	return result
// };

// console.log(thirdMax([2, 2, 3, 1]));
// console.log(Math.max());


class Proger{
	constructor(name, stack) {
		this.name = name;
		this.stack = stack;
	}
	learn() {
		return this.stack;
	}
}

class Student extends Proger{
	constructor(name, stack) {
		super(name, stack);
	}
	learn(stack) {
		return this.stack.push(stack);
	}
}

class Mentor extends Proger{
	constructor(name, stack) {
		super(name, stack);
	}
	learn(stack) {
		return this.stack.push(...stack);
	}
	teach(character, stack) {
		return character.learn(stack);
	}
}

const tima = new Proger('Tima', ['React', 'Node JS'])
console.log(tima);

const islam = new Student('Islam', ['JS', 'Node JS'])
islam.learn('Vue JS')
console.log(islam);

const adilet = new Mentor('Adilet', ['Node JS', 'Angular'])
adilet.learn(['Express', 'Java']);
console.log(adilet);

adilet.teach(islam, 'Angular')

console.log(islam);

