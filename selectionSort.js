const array = [9, -12, -1, 0, 31, 3, 4, 6];

function selectionSort(array) {
  let minIndex = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++)
      if (array[minIndex] > array[j]) minIndex = j;
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}

selectionSort(array);

console.log(array);
