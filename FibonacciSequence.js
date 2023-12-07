function FibonacciSequence(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(FibonacciSequence(2));
console.log(FibonacciSequence(3));
console.log(FibonacciSequence(4));
console.log(FibonacciSequence(5));
console.log(FibonacciSequence(6));
