function IsPrimeNumber(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(IsPrimeNumber(1));
console.log(IsPrimeNumber(2));
console.log(IsPrimeNumber(3));
console.log(IsPrimeNumber(4));
console.log(IsPrimeNumber(5));

//* Big-O = O(n)
