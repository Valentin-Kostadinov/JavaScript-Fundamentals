function commonElements(firstArr, secondArr) {
  for (const el of firstArr) {
    for (const secondEl of secondArr) {
      if (el === secondEl) {
        console.log(el);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
