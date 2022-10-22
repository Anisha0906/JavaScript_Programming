function getSingleDigitRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  
  let input = getSingleDigitRandomNumber();
  console.log("User input simulated using random : ", input);
  let index = 1;
  let PowerOfTwo = 0;
  while (index <= input && PowerOfTwo < 256) {
    PowerOfTwo = Math.pow(2, index);
    console.log(`2 to the power of ${index} = ${PowerOfTwo}`);
    index++;
  }
  //----------------------------------------------------------------
  function getTwoDigitRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  let MagicNumber = getTwoDigitRandomNumber();
  let Number = 100;
  let iteration = 0;
  while (Number != MagicNumber) {
    iteration++;
    if (Number > MagicNumber) {
      Number /= 2;
    }
    if (Number < MagicNumber) {
      Number = getTwoDigitRandomNumber();
    }
  }
  console.log(
    `Magic Number is ${MagicNumber} and guess number is ${Number} ,total iterations:  ${iteration}`
  );
  //------------------------------------------------------------------
  let HeadCount = 0;
  let TailCount = 0;
  while (HeadCount != 11 && TailCount != 11) {
    if (getSingleDigitRandomNumber() % 2 == 1) {
      HeadCount++;
    } else {
      TailCount++;
    }
  }
  HeadCount == 11
    ? console.log(`Head count reached ${HeadCount}`)
    : console.log(`Tail count count reached ${TailCount}`);
  //-------------------------------------------------------------------------
  let InitialAmount = 100;
  let GoalAmount = 200;
  let TotalNumberOfbet = 0;
  while (InitialAmount < GoalAmount && InitialAmount > 0) {
    TotalNumberOfbet++;
    if (getSingleDigitRandomNumber() % 2 == 1) {
      InitialAmount++;
    } else {
      InitialAmount--;
    }
  }
  InitialAmount == GoalAmount
    ? console.log(`Player Won in total bets ${TotalNumberOfbet}`)
    : console.log(`Player got broke in total bets ${TotalNumberOfbet}`);
  console.log(InitialAmount);