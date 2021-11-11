const { Telegraf } = require("telegraf");
const bot = new Telegraf("2139983717:AAGkmJApUpUy4WAYAzYOEtmSpDupBBqkxjs");
const data = require("./data");
const today = new Date().getDay();

const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// const day = data.weekSchedule.find((el) => {
// 	el.dayName === weekDays[today];
// });
// let todayLessons = '';
// for (let [key, val] of Object.entries(day.lessons)) {
// 	todayLessons += `${val.name}, ${val.auditory}, ${val.teacher}\n`;
// }


// bot.command("today", (ctx) => {
//   // let lessons = "";

//   // for (let [key, value] of Object.entries(day.lessons)) {
//   //   lessons += `${value.name}, ${value.auditory}, ${value.teacher}\n`;
// 	// }
// 	ctx.reply(todayLessons)
//   // let result = day === 'sunday' ? (`День: ${day} \n Нет расписания, нет уроков ! =)`) : (`День: ${day.dayName} \n${lessons}`);
	
// 	// const result = Object.entries(day);
// 	// ctx.reply(weekDays[today]);
// 	// ctx.reply(data.weekSchedule[today].dayName);

// });
bot.command("schedule", (ctx) => {
	// const weekArr = data.weekSchedule.find(el => el.dayName === weekDays[today]);
	// let lessons = '';
	// for (let [key, val] of Object.entries(weekArr.lessons)) {
	// 	lessons += (`${val}`)
	// }
	// let allDays = Object.entries(data.weekSchedule);
	// for (let [key, val] of Object.entries(allDays)) {
	// 	allDays += val
	// }
	let allWeek = '';
	data.weekSchedule.forEach((el) => {
		allWeek += Object.entries(el)
	})
	ctx.reply(allWeek);
});

bot.launch(console.log("BOT START"));
