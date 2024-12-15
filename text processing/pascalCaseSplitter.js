function solve(string) {
  let output = string[0];

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter.toLowerCase() != letter) {
      output += ", " + string[i];
    } else {
      output += string[i];
    }
  }
  return output;
}

console.log(solve("SplitMeIfYouCanHaHaYouCantOrYouCan"));
