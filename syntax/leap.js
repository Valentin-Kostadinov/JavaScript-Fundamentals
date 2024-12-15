function leap(n) {
  if ((n % 4 == 0 && n % 100 !== 0) || n % 400 == 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

leap(1948);
leap(2003);
leap(4);
