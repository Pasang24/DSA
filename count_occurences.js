let data = [9, 45, 8, 2, 8, 45, 23, 7, 0, 11, 41, 2, 77];

// function to count the occurence of an element in an array
function countOccurence(arr, target) {
  // initially the count is 0
  let count = 0;
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    // if any element in the array matches the target value then we increase the count by 1
    if (arr[i] === target) count++;
  }

  return count;
}

let target = 8;
console.log(
  `The occurence of element ${target}: ${countOccurence(data, target)}`
);
