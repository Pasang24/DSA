// function to implement binary search using recursion
function recursiveBinarySearch(arr, target, left, right) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (target < arr[mid])
    return recursiveBinarySearch(arr, target, left, mid - 1);
  else if (target > arr[mid])
    return recursiveBinarySearch(arr, target, mid + 1, right);
  else return mid;
}

function binarySearch(arr, target) {
  return recursiveBinarySearch(arr, target, 0, arr.length - 1);
}

let arr = [3, 4, 6, 8, 10, 14, 18];

console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 18));
console.log(binarySearch(arr, 9));
