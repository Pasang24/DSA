import Stack from "./stack.js";

// function to check if an expression has balanced parenthesis
function checkParenthesis(exp) {
  let length = exp.length;
  let stack = new Stack(length);

  for (let i = 0; i < length; i++) {
    // if we see a opening parenthesis then we simply push it into the stack
    if (exp[i] === "(" || exp[i] === "{" || exp[i] === "[") {
      stack.push(exp[i]);
    }
    // if we see closing parenthsis then we simply check if the top of the stack contains the respective opening parenthesis
    else {
      // if we see a closing parenthesis we check if the stack is empty. If the stack is empty it means the closing parenthesis doesn't have its opening parenthesis
      // so we return false if the stack is empty
      if (stack.isEmpty()) return false;
      let top = stack.peek();
      // if the closing parenthesis matches its respective opening parenthesis then we pop it from the stack
      if (
        (top === "(" && exp[i] === ")") ||
        (top === "{" && exp[i] === "}") ||
        (top === "[" && exp[i] === "]")
      ) {
        stack.pop();
      }
      // if the parenthesis don't match it means it is not valid parenthesis and we return false from the loop without further evaluation
      else {
        return false;
      }
    }
  }

  // after coming out of the loop if the stack is empty and doesn't contain any opening parenthesis then the parenthesis is valid
  return stack.isEmpty();
}

console.log(checkParenthesis("(){}[]")); // true
console.log(checkParenthesis("{[()]}")); // true
console.log(checkParenthesis("((())")); // false
console.log(checkParenthesis("({[)]}")); // false
console.log(checkParenthesis(")()(")); // false
console.log(checkParenthesis("")); // true (empty is valid)
