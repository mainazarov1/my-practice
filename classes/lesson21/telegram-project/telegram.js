// import { InlineKeyboardButton, KeyboardButton } from './core/types/typegram';

// type Hideable<B> = B & { hide: boolean };



const { Telegraf } = require('telegraf');

const BOT_TOKEN = '2060851580:AAErHkAKlTgs5TSvIWDKG7VulwHeasxQm5A';

const bot = new Telegraf(BOT_TOKEN);

// bot.start((context) => {
// 	context.reply('Hello world ! 🌚 🌚 🌚')
// });


// function randomJoke() {
// 	const jokes = ['Joke 1', 'Joke 2', 'Joke 3', 'Joke 3'];
// 	return jokes[Math.floor(Math.random() * jokes.length)];
// }
// bot.command('joke', (context) => {
// 	const joke = randomJoke()
// 	context.reply(joke)
// });
bot.command('time', (context) => {
	context.reply(`Сейчас: ${new Date().toISOString()}`);
})
// bot.on('text', (context) => {
// 	context.reply('🙈')
// })
bot.launch().then(() => {
	console.log('Бот запущен');
});
// function locationRequest(
//   hide = false
// ){
//   return { text, request_location: true, hide }
// }
// bot.command('local', (context) => {
// 	const local = locationRequest()
// 	context.reply(local)
// })