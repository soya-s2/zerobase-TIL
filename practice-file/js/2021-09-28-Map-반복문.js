let animal = new Map([
  ["navi", 4],
  ["bbobi", 2],
  ["byeoli", 8]
]);

/* 키만 순회 */
/* expected output: navi bbobi byeoli */
for (let name of animal.keys()) {
  console.log(name);
}

/* 값만 순회 */
/* expected output: 4 2 8 */
for (let age of animal.values()) {
  console.log(age);
}

/* 키와 값을 순회 */
/* expected output: [ 'navi', 4 ] [ 'bbobi', 2 ] [ 'byeoli', 8 ] */
for (let entity of animal) {
  console.log(entity);
}