let arr = [1, 2, 3];
// push() element
const push = (array, arg) => array[array.length] = arg;
push(arr, 4);
console.log(arr);
// push() all args
const pushAll = (array, ...args) => {
  for (let i = 0; i < args.length; i++) {
    array[array.length] = args[i];
  }
}
pushAll(arr, 5, 6, 7);
console.log(arr);
// pop() element
const pop = (array) => {
	let lastElement = array[array.length - 1];
	array.length--;
	return lastElement;
}
console.log(pop(arr))
console.log(arr);
// unshift() element
const unshift = (array, ...args) => {
	const argsLength = args.length;
	const oldArray = array;
	array.length = array.length + argsLength;
	for (let i = array.length; i > 0; i--){
		array.push()
	}
	// const nextArgs = array;
	// array = [arg, ...nextArgs]
	// console.log(array)
	console.log(array.length, argsLength);
}
unshift(arr, 10, 12)
console.log(arr);

// reverse()
const numbers = [1, 2, 3, 4, 5];
const reverse = (args) => {
	let reversedArr = [];
	for (let i = args.length - 1; i >= 0; i--){
		reversedArr.push(args[i])
	}
	return reversedArr;
}
// const reverseNum = reverse(numbers)
// console.log(reverseNum);



// methods

//reverse()
const nums = [1, 2, 3, 4, 5];
const str = 'Hello world'
// console.log(nums.reverse());
// console.log(str.split('').reverse().join(''));
//
