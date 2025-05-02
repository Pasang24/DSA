// classical fizz_buzz problem solution
function fizzBizz(fizz, buzz, n) {
  for (let i = 1; i <= n; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
      console.log("FizzBuzz");
    } else if (i % fizz === 0) {
      console.log("Fizz");
    } else if (i % buzz === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBizz(3, 5, 15);
