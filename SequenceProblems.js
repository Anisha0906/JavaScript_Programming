function getSingleDigitRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  
  console.log("Random single digit number: ", getSingleDigitRandomNumber());
  
  console.log("Random dice number: ", (getSingleDigitRandomNumber() % 6) + 1);
  
  let firstNumber = (getSingleDigitRandomNumber() % 6) + 1;
  let secondNumber = (getSingleDigitRandomNumber() % 6) + 1;
  console.log(
    `Sum of two random dice numbers ${firstNumber} and ${secondNumber} is ${
      firstNumber + secondNumber
    }`
  );
  
  function getTwoDigitRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  
  let sum = 0;
  for (let index = 0; index < 5; index++) {
    let number = getTwoDigitRandomNumber();
    sum += number;
    console.log(`${index + 1} random no. is ${number}`);
  }
  console.log("Sum of five two digit random numbers is: ", sum);
  console.log("Average of five two digit random numbers is: ", sum / 5);