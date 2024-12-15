function solve(input) {
  let [eff1, eff2, eff3, students] = input.map(Number);

  let efficiency = eff1 + eff2 + eff3;

  let hour = 0;
  while (students > 0) {
    hour++;

    if (hour % 4 != 0) {
      students -= efficiency;
    }
  }
  console.log(`Time needed: ${hour}h.`);
}

solve(["5", "6", "4", "20"]);
solve(["1", "2", "3", "45"]);
solve(["3", "2", "5", "40"]);

solve(["1", "1", "1", "0"]);
solve(["1", "1", "1", "10000"]);
solve(["100", "100", "100", "0"]);
