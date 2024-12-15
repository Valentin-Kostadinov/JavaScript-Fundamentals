function matrix(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let k = 0; k < n; k++) {
      row += n + " ";
    }
    console.log(row);
  }
}

matrix(2);
matrix(3);
matrix(4);
matrix(5);
