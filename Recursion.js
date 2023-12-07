//* Fibonacci Sequence
function FibonacciSequence(n) {
  if (n < 2) return n;
  return FibonacciSequence(n - 1) + FibonacciSequence(n - 2);
}

// console.log(FibonacciSequence(1));
// console.log(FibonacciSequence(2));
// console.log(FibonacciSequence(3));
// console.log(FibonacciSequence(4));
// console.log(FibonacciSequence(5));
// console.log(FibonacciSequence(6));
// console.log(FibonacciSequence(7));

//* Big-O = O(2^n)

//**************************************** */

//* Factorial Of A Number
function FactorialOfANumber(n) {
  if (n < 2) return n;

  return n * FactorialOfANumber(n - 1);
}

console.log(FactorialOfANumber(1));
console.log(FactorialOfANumber(2));
console.log(FactorialOfANumber(3));
console.log(FactorialOfANumber(4));
console.log(FactorialOfANumber(5));
console.log(FactorialOfANumber(6));
console.log(FactorialOfANumber(7));

//* Big-O = O(n)
