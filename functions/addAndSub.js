function sumAndSubtract(x, y, z) {
  let sum = (a, b) => a + b;
  return sum(x, y) - z;
}

let final = sumAndSubtract(23, 6, 10);
let final2 = sumAndSubtract(1, 17, 30);
let final3 = sumAndSubtract(42, 58, 100);
console.log(final);
console.log(final2);
console.log(final3);
