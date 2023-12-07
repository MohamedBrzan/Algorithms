function IsPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }
  return true;
}

// console.log(IsPowerOfTwo(1));
// console.log(IsPowerOfTwo(2));
// console.log(IsPowerOfTwo(3));
// console.log(IsPowerOfTwo(4));
// console.log(IsPowerOfTwo(5));
// console.log(IsPowerOfTwo(6));

//* Big-O = O(Logn)

//* Bitwise

function IsPowerOfTwoBitwise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

// console.log(IsPowerOfTwoBitwise(1));
// console.log(IsPowerOfTwoBitwise(2));
// console.log(IsPowerOfTwoBitwise(3));
// console.log(IsPowerOfTwoBitwise(4));
// console.log(IsPowerOfTwoBitwise(5));
// console.log(IsPowerOfTwoBitwise(6));
