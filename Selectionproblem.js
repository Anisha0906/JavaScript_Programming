function getThreeDigitRandomNumber() {
    return Math.floor(Math.random() * (999 - 100) + 100);
  }
  
  let arr = [];
  for (let index = 0; index < 5; index++) {
    arr[index] = getThreeDigitRandomNumber();
    console.log(`${index + 1} random digit no. ${arr[index]}`);
  }
  
  let max = arr[0];
  let min = arr[0];
  
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index];
    }
    if (min > arr[index]) {
      min = arr[index];
    }
  }
  console.log(`Minimum Number is: ${min} , Maximum Number is: ${max}`);
  
  //-------------------------------------------------------------------
  function getFourDigitRandomNumber() {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
  }
  
  let year = getFourDigitRandomNumber();
  if (year % 100 == 0 && year % 400 == 0) {
    console.log(year, "is leap year");
  }
  if (year % 100 != 0 && year % 4 == 0) {
    console.log(year, "is leap year");
  } else {
    console.log(year, "is not a leap year");
  }
  function getSingleDigitRandomNumber() {
    return Math.floor((Math.random() * 10) % 2);
  }
  
  let coin = getSingleDigitRandomNumber();
  if (coin == 0) {
    console.log("Head");
  } else {
    console.log("Tail");
  }