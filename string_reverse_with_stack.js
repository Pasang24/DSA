import Stack from "./stack.js";

// function to reverse a string using stack
function reverseString(str) {
  let length = str.length;
  // creating a variable to store the reversed string
  let reversedString = "";

  // initializing a stack having capacity of the length of string
  const stack = new Stack(length);

  // pushing all the characters of the string into the stack;
  for (let i = 0; i < length; i++) {
    stack.push(str[i]);
  }

  // popping out all the characters from the stack and concatinating it with the reversedString variable
  while (!stack.isEmpty()) {
    let character = stack.pop();
    reversedString += character;
  }

  return reversedString;
}

let value = "hello world";
console.log("Original String: ", value);
console.log("Reversed String: ", reverseString(value));
