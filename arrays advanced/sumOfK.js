function sumOfK(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let current = sumLastK(result, k);
    result.push(current);
  }
  console.log(result.join(" "));

  function sumLastK(arr, k) {
    let lastK = arr.slice(-k);
    let sum = 0;
    for (let num of lastK) {
      sum += num;
    }
    return sum;
  }
}

sumOfK(6, 3);
sumOfK(10, 2);
