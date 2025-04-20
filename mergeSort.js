const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5];

function mergeSort(array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      sortedArray.push(leftArray[i]);
      i++;
    } else {
      sortedArray.push(rightArray[j]);
      j++;
    }
  }
  return [...sortedArray, ...leftArray.slice(i), ...rightArray.slice(j)];
}

console.log(mergeSort(array));
