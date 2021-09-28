function MIN(x, y) {
  return x < y ? x : y;
}

function MAX(x, y) {
  return x > y ? x : y;
}

function compare(callback, x, y) {
  return callback(x, y);
}

console.log(MAX(0, 3));
console.log(MAX(-1, 5));
console.log(MAX(100, 7));

console.log(compare(MIN, 2, 5));
console.log(compare(MAX, -3, -5));
