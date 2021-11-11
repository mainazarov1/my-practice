// const employer = {
//   name: "OLEG",
//   age: 23,
//   job: "Google",
// };
// const entries = [
//   ["name", "BOB"],
//   ["age", 31],
//   ["job", "Apple"],
// ];
// console.log(Object.entries(employer));
// console.log(Object.fromEntries(entries));

// const currentUser = new Map(entries);
// currentUser.set('isAdmin', true);
// currentUser.delete('job');
// console.log(currentUser);

// for (let key in Object.fromEntries(entries)) {
// 	console.log(key);
// }

// for (let [key, val] of Object.entries(employer)) {
// 	console.log(key,val);
// }

// const numbers = [1, 2, 4, 12, 134, 65, 1, 1, 2, 65, 9];
// const uniqueNumbers = new Set(numbers);

// console.log(uniqueNumbers);

// const carPark = {
// 	type: 'standart',
// 	cars: [
// 		{
// 			name: 'BMW',
// 			speed: 230
// 		},
// 		{
// 			name: 'opel',
// 			speed: 230
// 		},
// 		{
// 			name: 'lada',
// 			speed: 230
// 		},
// 		{
// 			name: 'honda',
// 			speed: 230
// 		},
// 		{
// 			name: 'toyota',
// 			speed: 230
// 		},
// 		{
// 			name: 'mers',
// 			speed: 230
// 		}
// 	]
// }

// for (let [key, val] of Object.entries(carPark.cars)) {
// 	console.log(val.name);
// }

const weekSchedule = [
  {
    dayName: "monday",
    lessons: [
      {
        name: "Math",
        auditory: 212,
        teacher: "Dan Abramov",
      },
      {
        name: "Geometry",
        auditory: 212,
        teacher: "Dan Abramov",
      },
    ],
  },
  {
    dayName: "tuesday",
    lessons: [
      {
        name: "Physics",
        auditory: 102,
        teacher: "Dean Azimbaev",
      },
      {
        name: "English",
        auditory: 512,
        teacher: "Samara Isaevna",
      },
    ],
  },
  {
    dayName: "wednesday",
    lessons: [
      {
        name: "Web development",
        auditory: 102,
        teacher: "Dean Azimbaev",
      },
      {
        name: "Physics",
        auditory: 100,
        teacher: "Dean Azimbaev",
      },
    ],
  },
  {
    dayName: "thrusday",
    lessons: [
      {
        name: "Math",
        auditory: 212,
        teacher: "Dan Abramov",
      },
    ],
  },
  {
    dayName: "friday",
    lessons: [
      {
        name: "English",
        auditory: 512,
        teacher: "Samara Isaevna",
      },
    ],
  },
  {
    dayName: "saturday",
    lessons: [
      {
        name: "Web design",
        auditory: 101,
        teacher: "Oleg",
      },
    ],
	},
	{
    dayName: "sunday",
    lessons: [],
  },
];

const today = new Date().getDay();

function showDay() {
  for (let i = 0; i < 7; i++) {
    if (today === i) {
      return weekSchedule[i];
    }
  }
}
function show() {
  const day = showDay();
  console.log("День: " + day.dayName);
  for (let [key, value] of Object.entries(day.lessons)) {
    // for (let [key, val] of Object.entries(value)) {
      console.log(`${value.name}, ${value.auditory}, ${value.teacher}`);
    // }
    // if (key === 'name') {
    // 	console.log(toString(val));
    // }
  }

  // // const lessons = '';
  // for (let [key, val] of data.weekSchedule) {
  // 	if (key === day) {
  // 		console.log(val);
  // 	}
  // }
  // ctx.reply('День: ' + day.dayName);
  // // ctx.reply('Занятия: ' + lessons)
}
show();
