function solve(string) {
  return string
    .split("")
    .filter((letter, index, arr) => letter != arr[index + 1])
    .join("");
}

console.log(solve("aaaaabbbbbcdddeeeedssaa"));
