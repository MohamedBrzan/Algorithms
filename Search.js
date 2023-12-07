//* Linear
function Linear(n, t) {
  for (let i = 0; i <= n.length; i++) {
    if (t === n[i]) {
      return i;
    }
  }
  return -1;
}

console.log(Linear([1, 2, 3, 4, 5, 6], 5));

//* Big-O = O(n)
