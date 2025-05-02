// linear search is a method of searching an element in an array
function linearSearch(arr, target) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    // for every element we check if it matches the target element
    if (arr[i] === target) {
      // if it matches then we return the index of the element
      return i;
    }
  }

  // if we come out of the loop it means the target element doesn't exist in the given array
  // so we return -1 since it's an invalid index
  return -1;
}

let arr = [4, 2, 7, 1, 9, 0, -1, 3];

console.log(linearSearch(arr, -1));
console.log(linearSearch(arr, 0));
console.log(linearSearch(arr, 4));
