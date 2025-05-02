// binary search is another method of searching an element in an array
// it is more efficient than linear search but requires the array to be sorted
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target < arr[mid]) {
      right = mid - 1;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

let arr = [3, 4, 6, 8, 10, 14, 18];

console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 18));
console.log(binarySearch(arr, 9));
