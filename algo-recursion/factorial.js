// O(n)
function findFactorialRecursive(number) {
  if (number === 0) {
    return 1;
  }

  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5)); // => 120

// O(n)
function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialIterative(5)); // => 120
