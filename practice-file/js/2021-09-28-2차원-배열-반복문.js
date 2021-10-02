/* 2차원 배열의 각 요소에 접근하기 */
let array = [["00", "01", "02"], ["10", "11", "12"], ["20", "21", "22"]];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]); // 00 01 02 10 11 12 20 21 22
  }
}
// console.log(array.length) === 3
// console.log(array[i].length) === 3


/* 2차원 배열의 요소들을 지정한 순서대로 접근하기 */
let animals = [
  ["nabi", 4],
  ["bbobi", 2]
];

for (let i = 0; i < animals.length; i++) {
  console.log(`name: ${animals[i][0]}, age: ${animals[i][1]}`);
}
/*
name: nabi, age: 4
name: bbobi, age: 2
*/