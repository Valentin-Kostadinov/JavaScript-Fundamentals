function passValidator(pass) {
  function isValidLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      return `Password must be between 6 and 10 characters`;
    }
  }

  function isValidChars(pass) {
    let isValidPass = true;
    for (let i = 0; i < pass.length; i++) {
      let isValid = true;
      let code = pass[i].charCodeAt(0);
      if (
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122) ||
        (code >= 48 && code <= 57)
      ) {
        isValid = true;
      } else {
        isValid = false;
        isValidPass = false;
        break;
      }
    }
    return isValidPass
      ? true
      : `Password must consist only of letters and numbers`;
  }

  function atLeastTwoDigits(pass) {
    let digits = 0;
    for (let i = 0; i < pass.length; i++) {
      let code = pass[i].charCodeAt(0);
      if (code >= 48 && code <= 57) {
        digits++;
      }
    }
    return digits >= 2 ? true : `Password must have atleast 2 digits`;
  }

  let result = [];
  if (isValidLength(pass) !== true) {
    result.push(isValidLength(pass));
  }
  if (isValidChars(pass) !== true) {
    result.push(isValidChars(pass));
  }
  if (atLeastTwoDigits(pass) !== true) {
    result.push(atLeastTwoDigits(pass));
  }
  if (
    isValidLength(pass) === true &&
    isValidChars(pass) === true &&
    atLeastTwoDigits(pass) === true
  ) {
    result.push(`Password is valid`);
  }

  return result.join("\n");
}

console.log(passValidator("logIn"));
console.log(passValidator("MyPass123"));
console.log(passValidator("Pa$s$s"));
