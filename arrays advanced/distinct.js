function distinct(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let indexOfEl = arr.indexOf(arr[i]);
    if (i === indexOfEl) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}

distinct([1, 2, 3, 4]);
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinct([20, 8, 12, 13, 4, 4, 8, 5]);
distinct([7, 1, 2, 3, 54, 7, 2, 2, 1]);
