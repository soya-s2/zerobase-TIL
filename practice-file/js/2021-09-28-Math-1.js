/* 최댓값과 최솟값 구하기 */
console.log(Math.max(3, 10)); // 10
console.log(Math.min(-1, -5)); // -5

/* 절댓값 구하기 */
console.log(Math.abs(-3)); // 3

/**********************************************************/

/* 배열을 인자로 넘겨 산출하기 */
let nums = [1, 5, 10];

// console.log(`MAX : ${Math.max(nums)}`);
 // MAX : NaN (배열의 최소,최대값을 산출하려면 아래와 같이 해야한다.)

/* apply 메서드 사용 */
console.log(`MAX : ${Math.max.apply(null, nums)}`); // MAX : 10
console.log(`MIN : ${Math.min.apply(null, nums)}`); // MIN : 1

/* spread 연산자 사용 */
console.log(`MAX : ${Math.max(...nums)}`); // MAX : 10
console.log(`MIN : ${Math.min(...nums)}`); // MIN : 1