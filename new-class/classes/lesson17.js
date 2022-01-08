// //! method of array -.map()-

// const numbers = [1, 2, 3, 4, 5];

// const mapped = numbers.map((el,i) => i )
// console.log(mapped);

const users = [
	{ name: 'Adilet', age: 20, job: 'Node.js' },
	{ name: 'Beka', age: 19, job: 'Frontend' },
	{ name: 'Mira', age: 23, job: 'Java' },
	{ name: 'Rishat', age: 30, job: 'Frontend' },
]

const users1 = users.map(user => user);

const usersNames = users.filter(user => user.job == 'Frontend').map(user => user.name);



console.log(usersNames);
