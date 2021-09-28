let date = new Date();

console.log(date); // 2021-09-28T15:18:31.416Z

let ms_year = date.setFullYear(2021, 0, 1);
console.log(date); // 2020-12-31T15:19:18.343Z
console.log(new Date(ms_year)); // 2020-12-31T15:19:18.343Z

date.setDate(5);
console.log(date); // 2021-01-04T15:20:11.708Z

date.setHours(date.getHours() + 3);
console.log(date); // 2021-01-04T18:20:11.708Z