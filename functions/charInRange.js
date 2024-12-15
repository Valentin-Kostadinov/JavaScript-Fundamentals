function charRange(a, b) {
  let firstCode = a.charCodeAt();
  let secondCode = b.charCodeAt();
  let start = firstCode < secondCode ? firstCode : secondCode;
  let end = firstCode > secondCode ? firstCode : secondCode;

  let line = "";

  for (let i = start + 1; i < end; i++) {
    line += String.fromCharCode(i) + " ";
  }
  return line;
}

console.log(charRange("a", "d"));
console.log(charRange("#", ":"));
console.log(charRange("C", "#"));
