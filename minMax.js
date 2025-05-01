let data = [9, 45, 2, 8, 45, 23, 7, 0, 11, 41, 77];

//function to find the min and element from an array
function minMax(arr) {
  // initially we consider the first element of the array to be the minimin and maximum values
  let min = arr[0],
    max = arr[0];
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    // if the ith element of array is smaller than current min then update the min value
    if (min > arr[i]) min = arr[i];
    // if the ith element of an array is bigger than the current max then update the max value
    if (max < arr[i]) max = arr[i];
  }

  return { min, max };
}

let { min, max } = minMax(data);

console.log(`The minimum valueis ${min} and maximum value is ${max}`);
