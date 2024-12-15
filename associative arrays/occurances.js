function solve(str) {
  let arr = str.split(" ");

  let occurrences = new Map();

  for (let word of arr) {
    word = word.toLowerCase();
    if (!occurrences.has(word)) {
      occurrences.set(word, 0);
    }
    let newValue = occurrences.get(word) + 1;
    occurrences.set(word, newValue);
  }

  let keys = Array.from(occurrences.keys())
    .filter((x) => occurrences.get(x) % 2 !== 0)
    .join(" ");
  console.log(keys);
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
