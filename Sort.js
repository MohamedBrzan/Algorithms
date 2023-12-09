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
    while (j > 0 && numberToInsert < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = numberToInsert;
  }

  return array;
}

console.log(InsertionSort([-6, 20, 8, -2, 4]));

//* Big-O = O(n^2) Quadratic

//*********************************************** */


