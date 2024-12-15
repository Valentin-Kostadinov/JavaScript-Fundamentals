function solve(key, template) {
  let words = key.split(", ").sort((a, b) => b.length - a.length);
  words.forEach((word) => {
    template = template.replace("*".repeat(word.length), word);
  });

  console.log(template);
}

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
