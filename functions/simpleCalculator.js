function solve(num1, num2, operationName) {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  let operation;

  switch (operationName) {
    case "ADD":
      operation = add;
      break;
    case "SUBTRACT":
      operation = subtract;
      break;
    case "MULTIPLY":
      operation = multiply;
      break;
    case "DIVIDE":
      operation = divide;
      break;

    default:
      console.log("Invalid input");
      break;
  }
  return operation(num1, num2);
}

let result = solve(5, 5, "ADD");
let result1 = solve(5, 5, "SUBTRACT");
let result2 = solve(5, 5, "MULTIPLY");
let result3 = solve(5, 5, "DIVIDE");

console.log(result, result1, result2, result3);
