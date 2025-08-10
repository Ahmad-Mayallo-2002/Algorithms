const binarySearch = (arr, target) => {
  // Time Complexity O(log n)
  // Space Complextiy O(1)
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.round((left + right) / 2);
    if (target === arr[mid]) return mid;
    if (target > arr[mid]) left = mid + 1;
    if (target < arr[mid]) right = mid - 1;
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(binarySearch(arr, 163));
