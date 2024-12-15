function equalSum(array) {
  let isIndex = false;

  for (let i = 0; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    if (i !== 0) {
      for (let k = 0; k < i; k++) {
        leftSum += array[k];
      }
    }

    if (i !== array.length - 1) {
      for (let m = i + 1; m < array.length; m++) {
        rightSum += array[m];
      }
    }

    if (leftSum === rightSum) {
      isIndex = true;
      console.log(i);
    }
  }
  if (!isIndex) {
    console.log("no");
  }
}

equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
