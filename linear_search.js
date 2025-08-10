const linearSearch = (arr, target) => {
  // Time Complexity O(n)
  // Space Complexity O(1)
  for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i;
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(linearSearch(arr, 5));
