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

console.log(BubbleSort([-6, 20, 8, -2, 4]));

//* Big-O = O(n^2)

//******************************************** */

