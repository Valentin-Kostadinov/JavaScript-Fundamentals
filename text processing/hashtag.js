function solve(input) {
  function hasOnlyLetters(word) {
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      if (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
        return false;
      }
    }
    return true;
  }

  function isValid(word) {
    if (
      word.startsWith("#") &&
      word.length > 1 &&
      hasOnlyLetters(word.substring(1))
    ) {
      return true;
    }
    return false;
  }

  let words = input
    .split(" ")
    .filter(isValid)
    .map((word) => word.slice(1))
    .join("\n");

  console.log(words);
}

solve("Nowadays everyone uses # to tag a #special word in #socialmedia");
