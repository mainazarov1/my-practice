// console.log('start');

// setTimeout(() => console.log('Hello'), 0);

// console.log('end');

// const response = fetch('https://jsonplaceholder.typicode.com/todos/1');

// console.log(response);

// const promise = new Promise((resolve, reject) => {
//   resolve(
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//   );
// })
//   .then((result) => {
//     console.log(result);
//     return result.json();
//   })
//   .then((json) => console.log(json));

// console.log(promise);

// const users = [];
// fetch('https://jsonplaceholder.typicode.com/users/')
// 	.then(response => response.json())
// 	.then(res => users.push(res));
// console.log(users);

// let countries = [];

async function getCountries() {
  return fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((res) => res);
}
async function showCountries() {
	const countries = await getCountries();
	const countriesAsia = countries.filter((el) => el.region === 'Asia').map((el) => el.name.official);
	const countriesAsiaFlag = countries.filter((el) => el.region === 'Asia').map((el) => el.flag);
	console.log(countriesAsiaFlag);
}

showCountries();
// fetch('https://restcountries.com/v3.1/all')
// 	.then(response => response.json())
// 	.then(res => {
// 		res.forEach(el => {
// 			countries.push(el)
// 		});
// 	})

