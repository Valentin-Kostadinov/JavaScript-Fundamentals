function process(arr) {
  let result = [];
  for (let num of arr) {
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  for (let num of result) {
    console.log(num);
  }
}

process([7, -2, 8, 9]);
process([3, -2, 0, -1]);
