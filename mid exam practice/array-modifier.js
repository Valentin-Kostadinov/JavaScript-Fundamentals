function solve(input) {
  let actions = {
    swap: (arr, tokens) => {
      let index1 = Number(tokens[1]);
      let index2 = Number(tokens[2]);
      let temp = numberArray[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
    },
    multiply: (arr, tokens) => {
      let index1 = Number(tokens[1]);
      let index2 = Number(tokens[2]);
      arr[index1] *= arr[index2];
    },
    decrease: (arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i]--;
      }
    },
  };

  let numberArray = input.shift().split(" ").map(Number);

  for (let command of input) {
    if (command == "end") {
      break;
    }
    let tokens = command.split(" ");
    actions[tokens[0]](numberArray, tokens);
  }

  console.log(numberArray.join(", "));
}

solve([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
