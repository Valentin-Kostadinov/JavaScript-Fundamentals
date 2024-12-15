function calculator(num1, operator, num2) {
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    case "%":
      result = num1 % num2;
      break;

    default:
      console.log("Invalid operator");
      break;
  }
  console.log(result.toFixed(2));
}

calculator(5, "+", 10);
calculator(25.5, "-", 3);
calculator(5, "*", 5);
calculator(45, "/", 7);
calculator(100, "%", 15);
