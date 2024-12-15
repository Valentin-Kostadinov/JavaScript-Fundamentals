function primeNumber(number) {
  let isNotPrime = false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isNotPrime = false;
      break;
    } else {
      isNotPrime = true;
    }
  }
  console.log(isNotPrime);
}

primeNumber(7);
primeNumber(8);
primeNumber(81);
