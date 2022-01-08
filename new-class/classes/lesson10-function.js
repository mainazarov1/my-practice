// function toUpperCase(str) {
//   return str.toUpperCase();
// }
// console.log(toUpperCase("Hello world!"));
// ==============================================================================

// const neolabs = {
//   "js-10/21": ["Abdullah", "Gulzada", "Bektur"],
//   "js-8/21": ["Islam", "Aruke", "Sam", "Aiba"],
// };

// function addStudent(group, name) {
// for (let [key, value] of Object.entries(neolabs)) {
//   if (key === group) {
//     neolabs[key].push(name);
// 	} else {
// 		console.log('no');
// 	}
// }

// let groups = Object.keys(neolabs)
// for (let i = 0; i < groups.length; i++) {
// 	if (group === groups[i]) {
//     neolabs[i].push(name);
// 	}
// }
// console.log(groups);

// let user = Object.keys(neolabs).forEach(el => el.includes(group))
// console.log(user);

//// const groups = Object.keys(neolabs);
//// if (groups.includes(group)) {
//// 	neolabs[group].push(name)
//// } else {
//// 	console.log('Такой группы нет');
//// }
// }
// addStudent("js-10/21", "Adilet");
// addStudent("js-10/21", "Asel");
// addStudent("js-8/21", "Almaz");
// addStudent("js-6/21", "Fara");

// console.log(neolabs);
// ==============================================================================

// function test1() {//function declaration
//   console.log("test1");
// };
// const test2 = function () {// function expression
//   console.log("test2");
// };
// const test3 = () => {
//   console.log("test3");
// };
// (function () {
// 	console.log('test4');
// })();
// test1();
// test2();
// test3();


// const text = 'Так как я сейчас на 2 месяце обучения в neolabs. Я думаю мне хватит знаний и навыков чтобы получить место в клубе и наконец быстрее приступить к проектам, чтобы видеть результат и чтобы говорить что я был причастен к этому.. Хочу влиться в коммьюнити клуба и завести новые знакомства для совместного "chilla")) Но самое главное хочу стать востребованным разработчиком, быть полезным и зарабатывать много денег, а потом покупать на все деньги много вкусной еды))';
// console.log(text.length);

const myCrazyObject = {
  "name": "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула"
};
console.log(myCrazyObject["some array"][2]["number"]);