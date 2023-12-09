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

function RecursiveBinarySearch(array, target) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  return search(array, target, firstIndex, lastIndex);
}

function search(array, target, firstIndex, lastIndex) {
  let midIndex = Math.floor((firstIndex + lastIndex) / 2);
  while (firstIndex <= lastIndex) {
    if (target === array[midIndex]) return midIndex;
    else if (target > midIndex)
      return search(array, target, midIndex + 1, lastIndex);
    else if (t < midIndex)
      return search(array, target, firstIndex, midIndex - 1);
  }
  return -1;
}

console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 10));
