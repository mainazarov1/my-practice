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

const day = data.weekSchedule.find((el) => el.dayName === weekDays[today]);
let schedule = "";
if (day.dayName === "sunday") {
  schedule = `\nДень: ${day.dayName} = Нет расписания, нет уроков ! =)`;
} else {
  schedule = `\nДень: ${day.dayName} \nЗанятия:\n`;
  for (let [key, value] of Object.entries(day.lessons)) {
    schedule += `${value.name}, ${value.auditory} , ${value.teacher}\n`;
  }
}

let weekSchedule = "";
data.weekSchedule.forEach((element) => {
  if (element.dayName === "Sunday") {
    weekSchedule += `\n\nДень: ${element.dayName} = Нет расписания, нет уроков ! =)`;
  } else {
    weekSchedule += `\n\nДень: ${element.dayName}\nЗанятия:`;
    for (let [key, value] of Object.entries(element.lessons)) {
      weekSchedule += `\n${value.name}, ${value.auditory} , ${value.teacher}`;
    }
  }
});

bot.command("schedule", (ctx) => {
  ctx.reply(schedule);
});

bot.command("weekSchedule", (ctx) => {
  ctx.reply(weekSchedule);
});

bot.launch(console.log("BOT START"));
