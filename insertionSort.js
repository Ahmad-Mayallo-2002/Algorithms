const array = [
  11, 18, 5, 1, 17, 8, 2, 4, 13, 9, 123, 3345, 768, 534, 23, 7768, 435, 344,
];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
}

insertionSort(array);

console.log(array);
