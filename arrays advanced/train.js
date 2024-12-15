function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);

  let capacity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let isAdd = arr[i].split(" ").includes("Add");
    if (isAdd) {
      let newWagon = arr[i].split(" ")[1];
      wagons.push(Number(newWagon));
    } else {
      let n = Number(arr[i]);
      for (let k = 0; k < wagons.length; k++) {
        if (wagons[k] + n <= capacity) {
          wagons[k] += n;
          break;
        }
      }
    }
  }
  return wagons.join(" ");
}
console.log(
  train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"])
);

console.log(
  train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"])
);
