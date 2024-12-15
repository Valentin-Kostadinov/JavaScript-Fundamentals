function solve(text, begin, count) {
  let result = text.substring(begin, count + begin);

  console.log(result);
}

solve("Hello, john@softuni.bg", 7, 4);
