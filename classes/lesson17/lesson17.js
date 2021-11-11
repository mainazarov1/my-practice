let states = [
	{
			name: 'sold',
			order: 2,
	},
	{
			name: 'active',
			order: 1,
	},
];

const shop = [
	{
			name: 'Куртка',
			price: 3000,
			state: states[0],
	},
	{
			name: 'Ботинки',
			price: 1500,
			state: states[1],
	},
	{
			name: 'Рубашка',
			price: 1000,
			state: states[0],
	},
	{
			name: 'Пиджак',
			price: 5000,
			state: states[1],
	},
	{
			name: 'Перчатки',
			price: 500,
			state: states[0],
	},
	{
			name: 'Туфли гучи',
			price: 9000,
			state: states[1],
	},
	{
			name: 'Галстук',
			price: 6000,
			state: states[1],
	},
	{
			name: 'Шарф',
			price: 800,
			state: states[0],
	},
	{
			name: 'Часы',
			price: 24000,
			state: states[1],
	},
];

// let arr = [43, 12, 11, 9, 133, 85, 35, 53, 12, 4, 124]


const sorted = shop.sort((a, b) => {
	return a.state.order - b.state.order;
});

// console.log(sorted);

const solded = shop.sort((a, b) => {
	if (a.state.name === 'sold') {
		return a.price + b.price
	}
})
console.log(solded);