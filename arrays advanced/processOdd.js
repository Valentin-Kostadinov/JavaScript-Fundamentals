function processOdd(inputArr) {
  let filtered = inputArr.filter((v, i) => i % 2 == 1);

  let doubled = filtered.map((x) => x * 2);

  console.log(doubled.reverse());
}

processOdd([10, 15, 20, 25]);
processOdd([3, 0, 10, 4, 7, 3]);
