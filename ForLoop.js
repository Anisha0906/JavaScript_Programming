function getSingleDigitRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  
  let input = getSingleDigitRandomNumber();
  console.log("User input simulated using random : ", input);
  
  for (let i = 0; i <= input; i++) {
    console.log(`2 to the power of ${i} = ${Math.pow(2, i)}`);
  }
  
  //-----------------------------------------------------------------------
  let Harmonic_number = 0;
  for (let i = 1; i <= input; i++) {
    Harmonic_number += 1 / i;
  }
  console.log(`${input}-th Harmonic Number is : ${Harmonic_number}`);
  
  //-----------------------------------------------------------------------
  let number = Math.floor(Math.random() * 100);
  let count = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      console.log(`${number} is not a prime number`);
      count++;
      break;
    }
  }
  if (count == 0) {
    console.log(`${number} is a prime number`);
  }
  
  //-----------------------------------------------------------------------
  let fact = 1;
  for (let i = 1; i <= input; i++) {
    fact *= i;
  }
  console.log(`Factorial of ${input} is : ${fact}`);