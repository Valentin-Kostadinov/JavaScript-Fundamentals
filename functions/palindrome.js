function palindromeInt(arr) {
  let result = "";
  for (let num of arr) {
    let isPalindrome = "true";
    let str = String(num);
    let reversedStr = str.split("").reverse().join("");
    isPalindrome = str === reversedStr ? "true" : "false";
    result += isPalindrome + "\n";
  }
  return result;
}

console.log(palindromeInt([123, 323, 421, 121]));
console.log(palindromeInt([32, 2, 232, 1010]));
