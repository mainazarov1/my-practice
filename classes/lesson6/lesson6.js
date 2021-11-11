// let video = {
//   name: "Кулинарный рецепт",
//   quality: "high",
//   duration: "0.3",
// };
// let video2 = {
//   name: "Футбольный матч",
//   quality: "middle",
//   duration: "0.3",
// };
// let video3 = {
//   name: "Мультфильм",
//   quality: "low",
//   duration: "0.3",
// };
// let arr = [video, video2, video3];

// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].quality == "high") {
//     console.log(arr[i]);
// 	}
// }

// let i = 0, count = 0, count2 = 0;

// for (; i <= 30; i++) {
// 	if (i % 2 == 0) {
// 		count += i;
// 	} else {
// 		count2 += i;
// 	}
// }
// console.log('сумма нечетных: ', count);
// console.log('сумма четных: ', count2);

// let notepad = {
//   name: "Sony",
//   canModify: true,
//   price: 800,
//   graphicsСard: 6, // от 1 до 10
//   cpu: 4, // от 1 до 10
// };
// let notepad2 = {
//   name: "Macbook",
//   canModify: false,
//   price: 1099,
//   graphicsСard: 8, // от 1 до 10
//   cpu: 8, // от 1 до 10
// };
// let notepad3 = {
//   name: "Lenovo",
//   canModify: true,
//   price: 400,
//   graphicsСard: 6, // от 1 до 10
//   cpu: 6, // от 1 до 10
// };

// let notepads = [notepad, notepad2, notepad3];

// if (notepad.canModify == true) {
//   notepad.ssd = 4;
// }
// if (notepad2.canModify == true) {
//   notepad2.ssd = 8;
// }
// if (notepad3.canModify == true) {
//   notepad3.ssd = 6;
// }

// for (let i = 0; i < notepads.length; i++) {
//   if (
//     notepads[i].cpu > 5 &&
//     notepads[i].graphicsСard > 5 &&
//     notepads[i].ssd > 5
//   ) {
//     notepads[i].price += 1800;
//   } else if (notepads[i].cpu > 5 && notepads[i].graphicsСard > 5) {
//     notepads[i].price += 1200;
//   } else if (notepads[i].ssd > 5 && notepads[i].graphicsСard > 5) {
//     notepads[i].price += 1200;
//   } else if (notepads[i].ssd > 5 && notepads[i].cpu > 5) {
//     notepads[i].price += 1200;
//   } else if (
//     notepads[i].cpu > 5 ||
//     notepads[i].graphicsСard > 5 ||
//     notepads[i].ssd > 5
//   ) {
//     notepads[i].price += 500;
//   }
// }

// for (let j = 0; j < notepads.length; j++) {
//   if (notepad.price > notepad2.price && notepad.price > notepad3.price) {
//     notepad.flagship = true;
//   }
//   if (notepad2.price > notepad.price && notepad2.price > notepad3.price) {
//     notepad2.flagship = true;
//   }
//   if (notepad3.price > notepad2.price && notepad3.price > notepad.price) {
//     notepad3.flagship = true;
//   }
// }

// console.log(notepad, notepad2, notepad3);
