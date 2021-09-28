function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 4, 6)); // 10
console.log(calculator(sub, 4, 6)); // -2
console.log(calculator(mul, 4, 6)); // 24
console.log(calculator(div, 4, 6)); // 0.6666...