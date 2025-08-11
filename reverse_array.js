// Time Complexity O(n)
// Space Complexity O(1)
function reverse(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++)
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}

let arr = [1, 2, 3, 4, 5, 6];

reverse(arr);

console.log(arr);
