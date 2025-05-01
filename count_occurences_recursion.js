let data = [9, 45, 8, 2, 8, 45, 23, 7, 0, 11, 41, 2, 77];

// function to count the occurence of an element in an array using recursion
function RecursiveCountOccurence(arr, target, position = 0) {
  // if we no element in the array then we return 0
  if (position === arr.length) return 0;

  // if the current position's element matches the target then we add one and resursively count the occurence of remaining array
  return (
    (arr[position] === target ? 1 : 0) +
    RecursiveCountOccurence(arr, target, position + 1)
  );
}

// function to count the occurence of an element in an array using recursion with two pointers
function OptimizedRecursiveCountOccurence(
  arr,
  target,
  start = 0,
  end = arr.length - 1
) {
  // if there is no element in the array return 0
  if (start > end) return 0;
  // if there is exactly one element in the array then start and end point to the same element
  // so we compare the target with either start or end and return 1 if it matches the target
  if (start === end) return arr[start] === target ? 1 : 0;

  // we set the count to 0 initially
  let count = 0;
  // if the target matches the start element increase the count by 1
  if (arr[start] === target) count++;
  // if the target matches the end element increase the count by 1
  if (arr[end] === target) count++;

  // return the count and add the count of the remaining array recursively
  return (
    count + OptimizedRecursiveCountOccurence(arr, target, start + 1, end - 1)
  );
}

let target = 8;
console.log(
  `The occurence of element ${target}: ${RecursiveCountOccurence(data, target)}`
);
console.log(
  `The occurence of element ${target}: ${OptimizedRecursiveCountOccurence(
    data,
    target
  )}`
);
