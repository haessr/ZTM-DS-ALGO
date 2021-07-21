function addTo80(n) {
  return n + 80;
}

let cache = {};

function memoizedAddto80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("Long time!!!");
    cache[n] = n + 80;
    return cache[n];
  }
}

function closureMemoizedAddto80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Long time!!!");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = closureMemoizedAddto80();

// console.log(memoizedAddto80(5));
// console.log(memoizedAddto80(5));

console.log(memoized(5));
console.log(memoized(5));
