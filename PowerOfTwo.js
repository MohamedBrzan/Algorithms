function IsPowerOfTwo(n) {
  if (n < 1) return false;
  for (let i = 0; i < n; i++) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }
  return true;
}

console.log(IsPowerOfTwo(1));
console.log(IsPowerOfTwo(2));
console.log(IsPowerOfTwo(3));
console.log(IsPowerOfTwo(4));
console.log(IsPowerOfTwo(5));
console.log(IsPowerOfTwo(6));
