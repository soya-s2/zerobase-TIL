let result;

function forloop(s, t, number) {
  let acc = 0;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      acc += s;
    } else {
      acc += t;
    }

    console.log(i, acc);
  }
  return acc;
}

result = forloop(3, 2, 5);
console.log(result);