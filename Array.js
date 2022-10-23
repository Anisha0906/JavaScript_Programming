let numbers = [];
for (let index = 0; index < 10; index++) {
  numbers[index] = Math.floor(Math.random() * (999 - 100 + 1) + 100);
}
console.log(numbers);
firstMax = numbers[0];
firstMin = numbers[0];
secondMax = 0;
secondMin = 999;
for (let index = 0; index < numbers.length; index++) {
  if (firstMax < numbers[index]) {
    firstMax = numbers[index];
  }
  if (firstMin > numbers[index]) {
    firstMin = numbers[index];
  }
}
for (let index = 0; index < numbers.length; index++) {
  if (secondMax < numbers[index] && firstMax != numbers[index]) {
    secondMax = numbers[index];
  }
  if (secondMin > numbers[index] && firstMin != numbers[index]) {
    secondMin = numbers[index];
  }
}
console.log("Second Maximum number is: ", secondMax);
console.log("Second Minimum number is: ", secondMin);
//--------------------------------------------------
numbers.sort();
console.log("Second Maximum number is: ", numbers[numbers.length - 2]);
console.log("Second Minimum number is: ", numbers[1]);
//--------------------------------------------------
let track = 0;
let factor = [];
let prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter Number to check for prime factors: "));
for (i = 2; i <= n / 2; i++) {
  let count = 0;
  if (n % i == 0) {
    for (j = 2; j <= i / 2; j++) {
      if (i % j == 0) count = count + 1;
    }
    if (count == 0) factor[track++] = i;
  }
}
console.log(`Prime factors of: ${n} are ${factor}`);
//-----------------
console.log("Enter three numbers to check for their addn to Zero");
let number = [];
for (let index = 0; index < 3; index++) {
  let prompt = require("prompt-sync")();
  let n = parseInt(prompt("Enter Number: "));
  number[index] = n;
}

number[0] + number[1] + number[2] == 0
  ? console.log("Three Integer adds to ZERO")
  : console.log("Three Integer adds to NON-ZERO");
//---------------
console.log("Digits that are repeated twice are in 0-100 : ");
for (i = 1; i <= 100; i++) {
  if (i % 11 == 0) {
    process.stdout.write(i.toString() + " ");
  }
}