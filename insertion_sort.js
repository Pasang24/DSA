// function to sort array using insertion sort
function insertionSort(arr) {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (temp < arr[j] && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

let arr = [3, 1, 5, 6, 3, 1, 7, -8, 8];

console.log("Original Array: ", arr);
insertionSort(arr);
console.log("Sorted Array: ", arr);
