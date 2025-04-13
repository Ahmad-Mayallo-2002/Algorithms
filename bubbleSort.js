const array = [9, 7, 4, 2, 6];

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++)
    for (let j = i + 1; j < array.length; j++)
      if (array[i] > array[j]) [array[i], array[j]] = [array[j], array[i]];
}

bubbleSort(array);

console.log(array);
