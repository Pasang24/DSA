let data = [9, 45, 2, 8, 45, 23, 7, 0, 11, 41, 77];

// function to reverse an array recursively
function recursiveReverse(arr, start, end) {
  // if the start is equal or less than end position then we are at the mid point so we return from the recursion
  if (start >= end) {
    return arr;
  }

  // we swap the start and end position elements then we increment the start and decrement the end pointers
  let temp = arr[start];
  arr[start++] = arr[end];
  arr[end--] = temp;

  // then we recursively call the function to reverse the array between the new start and end positions
  return recursiveReverse(arr, start, end);
}

// this is a helper function for the recursiveReverse function which will pass the initial start and end value for us
function reverse(arr) {
  return recursiveReverse(arr, 0, arr.length - 1);
}

console.log(data);
console.log(reverse(data));
