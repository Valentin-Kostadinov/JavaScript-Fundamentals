function maxNumber(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isBigger = true;
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] <= arr[k]) {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      result.push(arr[i]);
    }
  }
  console.log(result.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
