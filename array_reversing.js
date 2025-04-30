let data = [9, 45, 2, 8, 45, 23, 7, 0, 11, 41, 77];

// function to reverse the position of elements in an array
function reverse(arr) {
  let length = data.length;

  let middle = Math.floor(length / 2);

  // we traverse the array only upto its mid point
  // we swap the extreme values i.e. 1st and last value, 2nd and second last value and so on till we reach the mid point
  for (let i = 0; i < middle; i++) {
    let temp = arr[i];
    arr[i] = arr[length - i - 1];
    arr[length - i - 1] = temp;
  }

  return arr;
}

console.log(data);
console.log(reverse(data));
