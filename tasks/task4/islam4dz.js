// -------------------- 1 задача --------------------

// let video = {
// 	name: 'Кулинарный рецепт',
// 	quality: 'high',
// 	duration: '0.3'
// }
// let video2 = {
// 	name: 'Футбольный матч',
// 	quality: 'middle',
// 	duration: '0.3'
// }
// let video3 = {
// 	name: 'Мультфильм',
// 	quality: 'low',
// 	duration: '0.3'
// }

// if (video.quality == 'high') {
// 	console.log(video);
// }
// if (video2.quality == 'high') {
// 	console.log(video2);
// }
// if (video3.quality == 'high') {
// 	console.log(video3);
// }

// -------------------- 2 задача --------------------

let notepad = {
  name: 'Sony',
  canModify: true,
  price: 800,
  graphicsСard: 6, // от 1 до 10
  cpu: 4 // от 1 до 10
}
let notepad2 = {
  name: 'Macbook',
  canModify: false,
  price: 1099,
  graphicsСard: 8, // от 1 до 10
  cpu: 8 // от 1 до 10
}
let notepad3 = {
  name: 'Lenovo',
  canModify: true,
  price: 400,
  graphicsСard: 6, // от 1 до 10
  cpu: 6 // от 1 до 10
}

if (notepad.canModify == true) {
	notepad.ssd = 4;
}
if (notepad2.canModify == true) {
	notepad2.ssd = 8;
}
if (notepad3.canModify == true) {
	notepad3.ssd = 6;
}

if (notepad.cpu > 5 && notepad.graphicsСard > 5 && notepad.ssd > 5) {
	notepad.price += 1800;
} else if (notepad.cpu > 5 && notepad.graphicsСard > 5) {
	notepad.price += 1200;
} else if (notepad.ssd > 5 && notepad.graphicsСard > 5) {
	notepad.price += 1200;
} else if (notepad.ssd > 5 && cpu > 5) {
	notepad.price += 1200;
} else if (notepad.cpu > 5 || notepad.graphicsСard > 5 || notepad.ssd > 5) {
	notepad.price += 500;
}

if (notepad2.cpu > 5 && notepad2.graphicsСard > 5 && notepad2.ssd > 5) {
	notepad2.price += 1800;
} else if (notepad2.cpu > 5 && notepad2.graphicsСard > 5) {
	notepad2.price += 1200;
} else if (notepad2.ssd > 5 && notepad2.graphicsСard > 5) {
	notepad2.price += 1200;
} else if (notepad2.ssd > 5 && notepad2.cpu > 5) {
	notepad2.price += 1200;
} else if (notepad2.cpu > 5 || notepad2.graphicsСard > 5 || notepad2.ssd > 5) {
	notepad2.price += 500;
}

if (notepad3.cpu > 5 && notepad3.graphicsСard > 5 && notepad3.ssd > 5) {
	notepad3.price += 1800;
} else if (notepad3.cpu > 5 && notepad3.graphicsСard > 5) {
	notepad3.price += 1200;
} else if (notepad3.ssd > 5 && notepad3.graphicsСard > 5) {
	notepad3.price += 1200;
} else if (notepad3.ssd > 5 && notepad3.cpu > 5) {
	notepad3.price += 1200;
} else if (notepad3.cpu > 5 || notepad3.graphicsСard > 5 || notepad3.ssd > 5) {
	notepad3.price += 500;
}

if (notepad.price > notepad2.price && notepad.price > notepad3.price) {
	notepad.flagship = true;
}
if (notepad2.price > notepad.price && notepad2.price > notepad3.price) {
	notepad2.flagship = true;
}
if (notepad3.price > notepad2.price && notepad3.price > notepad.price) {
	notepad3.flagship = true;
}

console.log(notepad,notepad2,notepad3)