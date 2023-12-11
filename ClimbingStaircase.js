function ClimbingStaircase(n) {
  let numOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }
  return numOfWays[n - 1];
}

console.log(ClimbingStaircase(1));
console.log(ClimbingStaircase(2));
console.log(ClimbingStaircase(3));
console.log(ClimbingStaircase(4));
console.log(ClimbingStaircase(5));

//* Big-O  = O(n)
