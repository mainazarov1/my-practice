// class Movie {
// 	constructor(title = '', year = 0, country = '') {
// 		this.title = title;
// 		this.year = year;
// 		this.country = country ? country : 'USA';
// 		this.type = this.year < new Date().getFullYear() ? 'Old movie' : 'New movie';
// 	}
// 	info = () => {
// 		console.log(`${this.title} был выпущен в ${this.year}году, в ${this.country}.`);
// 	}
// }

// const spiderMan = new Movie('Spider-Man', 2021, 'USA');
// console.log(spiderMan);
// spiderMan.info();

// const homeAlone = new Movie('Home Alone', 1998, 'USA');
// console.log(homeAlone);
// homeAlone.info();

// class TvShow extends Movie{
// 	constructor(title, year, country, seasons = 1) {
// 		super(title, year, country);
// 		// this.type = this.year < new Date().getFullYear() ? 'Old Tv Show' : 'New Tv Show';
// 		this.seasons = seasons;
// 		// delete this.type;
// 	}
// 	type = 'Serial';
	
// }

// const bigBangTheory = new TvShow('Big Bang Theory', 1999, null, 10);
// console.log(bigBangTheory);
// bigBangTheory.info()

// class Anime extends TvShow{
// 	constructor(title, year, country, seasons) {
// 		super(title, year, country, seasons);
// 		this.country = country ? country : 'Japan';
// 		delete this.type;
// 	}
// 	// type = 'Anime';
// }

// const naruto = new Anime('Naruto', 2000, null, 15);
// console.log(naruto);
// naruto.info()

