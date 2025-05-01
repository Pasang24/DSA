let data = [9, 45, 2, 8, 45, 23, 7, 0, 11, 41, 77];

// function to find the min and max values in an array using recursion
function recursiveMinMax(arr, start = 0, end = arr.length - 1) {
  // if there is only one element in the array then just return the same element as min and max values
  if (start === end) {
    return { min: arr[start], max: arr[start] };
  }

  // find the mid point of the array to divide the array in two halves
  let mid = Math.floor((start + end) / 2);
  // calcualte the min and max values of the left side of the array recursively
  let leftMinMax = recursiveMinMax(arr, start, mid);
  // calculate the min and max value of the right side of the array recursively
  let rightMinMax = recursiveMinMax(arr, mid + 1, end);

  // find the minimum value among the min of left and right and assign it to min
  let min = Math.min(leftMinMax.min, rightMinMax.min);
  // find the maximum value among the max of left and right and assign it to the max
  let max = Math.max(leftMinMax.max, rightMinMax.max);

  return { min, max };
}

let { min, max } = minMax(data);

console.log(`The minimum valueis ${min} and maximum value is ${max}`);
