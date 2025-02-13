function solve(input) {
  let text = input[0];

  let numberPattern = /\d/g;
  let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;

  let numbers = text.match(numberPattern);
  numbers = numbers.map(Number);
  let coolThreshold = 1;
  numbers.forEach((x) => (coolThreshold *= x));

  let emojis = text.match(emojiPattern);

  console.log("Cool threshold: " + coolThreshold);
  console.log(emojis.length + " emojis found in the text. The cool ones are: ");

  for (const emoji of emojis) {
    let word = emoji.slice(2, -2);
    let coolFactor = 0;
    for (let i = 0; i < word.length; i++) {
      coolFactor += word.charCodeAt(i);
    }

    if (coolFactor > coolThreshold) {
      console.log(emoji);
    }
  }
}

solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
