let i = 1;
while (i <= 20) {
  switch (true) {
    case i % 3 == 0 && i % 5 == 0:
      console.log("Fizz-Buzz");
    case i % 3 == 0:
      console.log("Fizz");
      break;
    case i % 5 == 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
  i++;
}
