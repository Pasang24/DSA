import Stack from "./stack.js";

// function which evaluates postfix expression using stack
function postfixEval(exp) {
  const length = exp.length;
  let stack = new Stack(length);

  for (let i = 0; i < length; i++) {
    if (exp[i] === "+" || exp[i] === "-" || exp[i] === "*" || exp[i] === "/") {
      let op2 = stack.pop();
      let op1 = stack.pop();

      const result = operate(op1, op2, exp[i]);
      stack.push(result);
    } else {
      stack.push(Number(exp[i]));
    }
  }

  return stack.pop();
}

function operate(op1, op2, operator) {
  switch (operator) {
    case "+":
      return op1 + op2;
    case "-":
      return op1 - op2;
    case "*":
      return op1 * op2;
    case "/":
      return op1 / op2;
  }
}

console.log(postfixEval("231*+9-"));
console.log(postfixEval("56+47*-"));
console.log(postfixEval("23+54*+9-"));
