function oddEvenSum(n) {
  let arr = String(n).split("");
  let sumOdd = 0;
  let sumEven = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    if (num % 2 == 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

console.log(oddEvenSum(1000435));
console.log(oddEvenSum(3495892137259234));
