function sequence(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let currentSeq = [arr[i]];
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] === arr[k]) {
        currentSeq.push(arr[k]);
      } else {
        break;
      }
    }
    if (result.length < currentSeq.length) {
      result = currentSeq;
    }
  }
  console.log(result.join(" "));
}

sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
sequence([1, 1, 1, 2, 3, 1, 3, 3]);
sequence([4, 4, 4, 4]);
sequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
