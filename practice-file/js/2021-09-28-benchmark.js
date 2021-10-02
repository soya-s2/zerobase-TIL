function dateSub(old_date, new_date) {
  return new_date - old_date;
}

function getTimeSub(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
}

function benchmark(callback) {
  let date_1 = new Date("2019-01-01");
  let date_2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 200000; i++) {
    callback(date_1, date_2);
  }
  return Date.now() - start;
}

console.log(`dataSub: ${benchmark(dateSub)} ms`); // dataSub: 21 ms
console.log(`getTimeSub: ${benchmark(getTimeSub)} ms`); // getTimeSub: 5 ms