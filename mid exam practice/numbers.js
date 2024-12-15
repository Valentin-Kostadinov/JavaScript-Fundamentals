function solve(input) {
  let sequence = input.split(" ").map(Number);

  let sum = 0;
  for (let number of sequence) {
    sum += number;
  }
  let average = sum / sequence.length;

  let greater = [];
  for (let number of sequence) {
    if (number > average) {
      greater.push(number);
    }
  }

  greater.sort((a, b) => b - a);

  if (greater == 0) {
    console.log("No");
  } else {
    console.log(greater.slice(0, 5).join(" "));
  }
}

solve("10 20 30 40 50");
solve("5 2 3 4 -10 30 40 50 20 50 60 60 51");
solve("1");
solve("-1 -2 -3 -4 -5 -6");
