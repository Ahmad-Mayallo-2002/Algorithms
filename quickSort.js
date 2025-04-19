function quickSort(array) {
  if (array.length < 2) return array;
  let [left, right, pivot] = [[], [], array[array.length - 1]];
  for (let i = 0; i < array.length - 1; i++)
    (pivot > array[i] ? left : right).push(array[i]);
  return quickSort(left).concat(pivot, ...quickSort(right));
}

console.log(quickSort([17, 7, 5, 23, 65, 87, -1, -12, 0]));
