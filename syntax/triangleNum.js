function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";

    for (let k = 1; k <= i; k++) {
      line += i + " ";
    }
    console.log(line);
  }
}

triangle(9);
