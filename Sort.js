//* Bubble Sort
function BubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

// console.log(BubbleSort([-6, 20, 8, -2, 4]));

//* Big-O = O(n^2) Quadratic

//******************************************** */

//* Insertion Sort
function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && numberToInsert < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = numberToInsert;
  }

  return array;
}

// console.log(InsertionSort([8, 20, -2, 4, -6]));

//* Big-O = O(n^2) Quadratic

//*********************************************** */

function QuickSort(array) {
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  if (array.length < 2) return array;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) {
      right.push(array[i]);
    } else if (array[i] < pivot) {
      left.push(array[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

// console.log(QuickSort([-6, 20, 8, -2, 4]));

//* Big-O = O(n^2) Quadratic
//* Average-O = O(nlogn)

//*********************************************** */

function MergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(MergeSort(leftArr), MergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(MergeSort([-6, 20, 8, -2, 4]));

//* Big-O = O(nlogn)
