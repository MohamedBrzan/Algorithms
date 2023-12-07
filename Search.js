//* Linear
function Linear(n, t) {
  for (let i = 0; i <= n.length; i++) {
    if (t === n[i]) {
      return i;
    }
  }
  return -1;
}

// console.log(Linear([1, 2, 3, 4, 5, 6], 5));

//* Big-O = O(n)

//*********************************** */

function Binary(n, t) {
  let start = 0;
  let end = n.length - 1;
  while (end <= start) {
    let mid = Math.floor((start + end) / 2);
    if (t === n[mid]) return mid;

    if (t < n[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

// console.log(Binary([1, 2, 3, 4, 5], 534));

//* Big-O = O(logn)

//*********************************** */
