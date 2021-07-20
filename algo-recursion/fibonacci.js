// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// O(n)
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibonacciIterative(3));

// O(2^n) => High time complexity
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(8));