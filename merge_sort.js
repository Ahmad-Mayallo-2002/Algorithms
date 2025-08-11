const arr = [321, 534, 67, 6, 4342, 3456, 786, 5432, 3, 234, 867, 6534, 234, 5];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length)
    left[0] <= right[0]
      ? sorted.push(left.shift())
      : sorted.push(right.shift());
  return [...sorted, ...left, ...right];
}

console.log(mergeSort(arr));
