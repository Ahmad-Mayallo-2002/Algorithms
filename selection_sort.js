const selection = (arr) => {
  // Time Complexity O(n^2)
  // Space Complexity O(1)
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++)
      if (arr[min_index] > arr[j]) min_index = j;
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
};

const arr = [1, 321, 45678, 675, 3, 233, 5878, 0, -123];

selection(arr);

console.log(arr);
