function firstKLastK(inputArr) {
  let k = inputArr.shift();

  let firstK = inputArr.slice(0, k);
  console.log(firstK.join(" "));

  let lastK = inputArr.slice(inputArr.length - k);

  console.log(lastK.join(" "));
}

firstKLastK([2, 7, 8, 9]);
firstKLastK([3, 6, 7, 8, 9]);
