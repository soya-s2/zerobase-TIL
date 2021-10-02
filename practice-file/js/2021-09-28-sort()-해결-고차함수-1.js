let nums = [1, -1, 4, 0, 10, 20, 12];

/* 인접한 요소들의 계산을 처리하여 0보다 크면 서로의 자리를 바꿔 정렬함 */
let ascending_order = function (x, y) {
  return x - y; 
};

let descending_order = function (x, y) {
  return y - x;
};

console.log(nums.sort(ascending_order)); // [ -1,  0,  1, 4, 10, 12, 20 ]
console.log(nums.sort(descending_order)); // [ 20, 12, 10, 4, 1,  0, -1 ]
