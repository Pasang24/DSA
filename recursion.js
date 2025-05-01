// function to calculate the sum of first n natural numbers using recursion
function naturalSum(n) {
  if (n === 1) return 1;

  return n + naturalSum(n - 1);
}
let n1 = 10;
console.log(`Sum of first ${n1} natural numbers : ${naturalSum(n1)}`);

// function to calculate the factorial of a number using recursion
function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

let n2 = 5;
console.log(`The factorial of ${n2} : ${factorial(n2)}`);

// function to find the nth fibinacci number using recursion
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

let n3 = 16;
console.log(`The fibonacci number in position ${n3} : ${fibonacci(n3)}`);

//function to print first n numbers from 1 to n using recursion
function printNums(n) {
  if (n === 0) return;

  printNums(n - 1);
  console.log(n);
}

let n4 = 14;
console.log(`The first 1 to ${n4} numbers are:`);
printNums(n4);

// Similarly we can also print the numbers in reverse order from n to 1
function reversePrintNums(n) {
  if (n === 0) return;

  console.log(n);
  reversePrintNums(n - 1);
}

let n5 = 14;
console.log(`The first ${n5} to 1 numbers are:`);
reversePrintNums(n5);

// function to calculate a^b using recursion
function power(a, b) {
  if (b === 0) return 1;

  return a * power(a, b - 1);
}

// function to calculate a^b using recursion and exponentiation
function exponentialPower(a, b) {
  if (b === 0) return 1;

  let value = exponentialPower(a, Math.floor(b / 2));

  return b % 2 === 0 ? value * value : a * value * value;
}

let a = 3,
  b = 7;
console.log(`The value of ${a}^${b} : ${power(a, b)}`);
console.log(`The value of ${a}^${b} : ${exponentialPower(a, b)}`);

// function to check if a string is palindrme using recursion
function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) {
    return true;
  }

  if (str[start] !== str[end]) return false;

  return isPalindrome(str, start + 1, end - 1);
}

let value1 = "raar";
if (isPalindrome(value1)) console.log(`${value1} is palindrme`);
else console.log(`${value1} is not palindrome`);
