function FactorialOfANumber(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(FactorialOfANumber(1));
console.log(FactorialOfANumber(2));
console.log(FactorialOfANumber(3));
console.log(FactorialOfANumber(4));
console.log(FactorialOfANumber(5));
console.log(FactorialOfANumber(6));
console.log(FactorialOfANumber(7));

//* Big-o  = O(n)
