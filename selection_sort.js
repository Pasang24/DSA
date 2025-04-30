let data = [9, 45, 2, 8, 45, 23, 7, 0, 11, 41, 77];

function selectionSort(arr) {
  let length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    // in every iteration we bring the smallest element between i to length-1 in the ith position
    let smallest = i;
    for (let j = i + 1; j < length; j++) {
      // if there is another element smaller than the current smallest number then we update the index
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }

    // we check if the value of smallest is same as the ith index. If its same then we don't do anything since the element is already in its right place
    // if the value of smallest is not equal to the ith index then we swap the value of element in index i with smallest
    if (smallest !== i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }

  return arr;
}

console.log(data);
console.log("Sorted array: ", selectionSort(data));
