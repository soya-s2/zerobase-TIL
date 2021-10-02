let date = new Date(Date.UTC(2021, 8, 28));

console.log(date); // 2021-09-28T00:00:00.000Z

console.log(date.getFullYear()); // 2021
console.log(date.getMonth()); // 8 (9월)

/* 일요일(0) - 토요일(6) */
console.log(date.getDay()); // 2 (화요일)

console.log(date.getHours()); // 9
console.log(date.getUTCHours()); // 0

console.log(date.getTime()); // 1632787200000
console.log(date.getTimezoneOffset()); // -540