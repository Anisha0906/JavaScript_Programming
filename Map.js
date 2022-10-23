// Program for dice number reached 10 times
let diceCount = new Map();
diceCount.set(1, 0);
diceCount.set(2, 0);
diceCount.set(3, 0);
diceCount.set(4, 0);
diceCount.set(5, 0);
diceCount.set(6, 0);
let count = true;
while (count == true) {
  let n = Math.floor(((Math.random() * 10) % 6) + 1);
  diceCount.forEach((values, keys) => {
    if (keys == n) {
      if (values < 10) {
        values++;
        diceCount.set(keys, values);
      } else {
        console.log("Dice Number ", keys, " reached 10 times");
        count = false;
      }
    }
  });
}

//---------------------------------------------------------
function GetMonth() {
  return Math.floor(Math.random() * 12 + 1);
}
let MapYear = new Map();

for (let i = 1; i <= 50; i++) {
  MapYear.set(i, GetMonth());
}

for (let j = 1; j <= 12; j++) {
  process.stdout.write("\nMembers born in the Month  " + j + " = ");

  MapYear.forEach((values, keys) => {
    if (values == j) process.stdout.write(keys + " ");
  });
}