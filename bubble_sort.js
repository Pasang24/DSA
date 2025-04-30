// unsorted arrays
let data1 = [9, 45, 2, 8, 45, 23, 7, 0, 11, 41, 77];
let data2 = [9, 45, 2, 8, 45, 23, 7, 0, 11, 41, 77];

// sorted arrays
let data3 = [0, 2, 7, 8, 9, 11, 23, 41, 45, 45, 77];
let data4 = [0, 2, 7, 8, 9, 11, 23, 41, 45, 45, 77];

// this is a naive version of bubble sort where the best case is also O(n^2) even when the array is already sorted
function naiveBubbleSort(arr) {
  let length = arr.length;
  let iteration = 0;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      iteration++;
    }
  }

  return { arr, iteration };
}

// this is an optimized version of bubble sort where the best case is O(n) when the array is already sorted
function optimizedBubbleSort(arr) {
  let length = arr.length;
  let iteration = 0;

  for (let i = 0; i < length - 1; i++) {
    // this flag is used to keep track if there are any swaps done in any iteration of j loop
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
      iteration++;
    }

    // if there is no swapping in the iteration of j then it means the array is already sorted and we can break from loop early
    if (!swapped) break;
  }

  return { arr, iteration };
}

// comparision with unsorted arrays
console.log(
  "Comaprision of naive and optimized bubble sort with unsorted arrays:"
);
console.log(data1);
console.log("Naive Bubble sort:", naiveBubbleSort(data1));

console.log(data2);
console.log("Optimized bubble sort:", optimizedBubbleSort(data2));

// comparision with sorted arrays
console.log(
  "Comaprision of naive and optimized bubble sort with sorted arrays:"
);
console.log(data3);
console.log("Naive Bubble sort:", naiveBubbleSort(data3));

console.log(data4);
console.log("Optimized bubble sort:", optimizedBubbleSort(data4));
