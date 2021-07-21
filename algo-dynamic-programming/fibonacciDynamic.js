// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...
let calculations = 0;

// Time Complexity: O(2^n)
// Space Complexity: As deep as the tree

function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Time Complexity: O(n)
// Space Complexity: Cache size

function memoizedFibonacci() {
  let cache = {};
  return function fib(n) {
    // calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// Avoid recursion
function memoizedFibonacci2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fibonacciMaster = memoizedFibonacci();
console.log(fibonacciMaster(10)); // => 19 Calculations
console.log(fibonacci(10)); // => 177 Calculations
console.log(calculations);
