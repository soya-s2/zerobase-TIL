/* call by value (값에 의한 호출) */
let x = 1;
let add1 = function (y) { y = y + 1; }
add1(x);
console.log(x); // expected output : 1

/* call by reference (참조에 의한 호출) */
let a = { first: 1 };
let add2 = function (b) { b.first += 1; }
add2(a);
console.log(a.first); // expected output : 2