const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Time out !");
    resolve("Done !");
  }, 1000);
});

promise
  .then((value) => {
    console.log("Получил внутри промиса: ", value);
		return new Promise((resolve, reject) => {
			setTimeout(()=> resolve(1), 3000);
		});
  })
  .then((value) => {
    console.log("Значение с предыдущего then 1: ", value);
    return 2;
  })
  .then((value) => {
    console.log("Значение с предыдущего then 2: ", value);
  });
