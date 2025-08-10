const bubble = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};

const arr = [1, 9, 7, 4, 57, 9, 875, 0, 47, 5, -123, -12354];

bubble(arr);

console.log(arr);
