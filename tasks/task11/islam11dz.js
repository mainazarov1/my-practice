// ------------------- TASK / 1
// const salaries = [500, 300, 600, 400];
// let sum = 0;
// let asum = 0;
// salaries.forEach((i) => {
//   sum += i;
//   asum += i / salaries.length;
// });
// //или // asum = sum / salaries.length
// console.log(sum, asum);

// ------------------- TASK / 2

// const users = [
//   {
//     age: 20,
//     name: "john",
//   },
//   {
//     age: 30,
//     name: "berry",
//   },
//   {
//     age: 15,
//     name: "Jimmy",
//   },
// ];
// let adultUsers = users.filter((i) => i.age > 18);
// console.log(adultUsers);

// ------------------- TASK / 3

// const flowers = [
//   {
//     name: "rouse",
//     price: 300,
//   },
//   {
//     name: "sunflower",
//     price: 1000,
//   },
//   {
//     name: "101 rouse",
//     price: 3000,
//   },
// ];
// let flowersWithDiscount = [];
// flowers.map((flower) => {
// 	flower.withDiscount = flower.price;
//   if (flower.price > 2500) {
//     flower.withDiscount -= (flower.price / 100) * 20;
//   } else if (flower.price > 900) {
//     flower.withDiscount -= (flower.price / 100) * 15;
//   } else if (flower.price > 200) {
//     flower.withDiscount -= (flower.price / 100) * 5;
//   }
//   flowersWithDiscount.push(flower);
// });
// console.log(flowersWithDiscount);

// ------------------- TASK / 4

// const words = [
//   "учу",
//   "готовлю",
//   "красный",
//   "летаю",
//   "пишу",
//   "слушаю",
//   "пою",
//   "танцую",
//   "жава",
//   "скрипт",
// ];
// let sentence = words.filter((word) => word === "учу" || word === "жава" || word === "скрипт").join(" ");
// let sentence2 = words.filter((word) => word === "пишу" || word === "жава" || word === "скрипт").join(" ");
// console.log(sentence);
// console.log(sentence2);
