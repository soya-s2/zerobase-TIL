let date_now = new Date();
let date_str = Date();

/* 현재 날짜 */
console.log(date_now); // 2021-09-28T15:09:45.674Z
console.log(typeof date_now);

/* 현재 날짜 - 문자열 */
console.log(date_str); // Wed Sep 29 2021 00:09:45 GMT+0900 (대한민국 표준시)
console.log(typeof date_str); // string


/* 초기 날짜 */
let date_ms_1 = new Date(0);
console.log(date_ms_1); // 1970-01-01T00:00:00.000Z

/* 하루 뒤의 날짜 */
let date_ms_2 = new Date(1000 * 3600 * 24);
console.log(date_ms_2); // 1970-01-02T00:00:00.000Z

/* 날짜 - 문자열 */
let date_string = new Date("2021-09-28");
console.log(date_string); // 2021-09-28T00:00:00.000Z

/* month는 0부터 11까지 존재하므로 -1을 해줘야 한다. */
let data_params_1 = new Date(2021, 8, 28);
console.log(data_params_1); // 2021-09-27T15:00:00.000Z