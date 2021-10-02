let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("JavaScript");

console.log(set); // Set(0) {}
console.log(num); // Set(5) { 1, 2, 3, 4, 5 }
console.log(str); // Set(9) { 'J', 'a', 'v', 'S', 'c', 'r', 'i', 'p', 't' }

/* 요소 추가 */
/* new Set() */
set.add(2).add(2);
console.log(set); // Set(1) { 2 }

/* 요소 존재여부 확인 */
/* new Set([1, 2, 3, 4, 5]) */
console.log(num.has(1)); // true
console.log(num.has(6)); // false

/* 요소 삭제 */
set.delete(2);
console.log(set); //  Set(1) { 2 } -> Set(0) {}