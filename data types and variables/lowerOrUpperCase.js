function lowerOrUpperCase(char) {
  let result = "";

  if (char === char.toUpperCase()) {
    result = "upper-case";
  } else {
    result = "lower-case";
  }

  console.log(result);
}

lowerOrUpperCase("w");
lowerOrUpperCase("W");
