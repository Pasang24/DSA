import Stack from "./stack.js";

// function to find the largest area in a histogram
function largestArea(heights) {
  let maxArea = 0;
  let length = heights.length;
  let stack = new Stack(length);

  for (let i = 0; i < length; i++) {
    let start = i;

    while (!stack.isEmpty() && stack.peek().height > heights[i]) {
      let { index, height } = stack.pop();
      let area = height * (i - index);
      maxArea = Math.max(maxArea, area);
      start = index;
    }
    stack.push({ index: start, height: heights[i] });
  }

  while (!stack.isEmpty()) {
    let { index, height } = stack.pop();

    let area = height * (length - index);
    if (area > maxArea) maxArea = area;
  }

  return maxArea;
}

console.log(`Largest Area: ${largestArea([2, 1, 5, 6, 2, 3])}`);
console.log(`Largest Area: ${largestArea([6, 2, 5, 4, 5, 1, 6])}`);
console.log(`Largest Area: ${largestArea([2, 2, 2, 2, 2, 2])}`);
console.log(`Largest Area: ${largestArea([2, 1, 2, 3, 1])}`);
console.log(`Largest Area: ${largestArea([1000])}`);
