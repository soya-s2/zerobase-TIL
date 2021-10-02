function dog_bark() {
  console.log("개는 왈왈!");
}

function cat_bark() {
  console.log("고양이는 야옹!");
}

let obj = {
  name: "나비",
  age: 4,
  func: cat_bark
};

dog_bark(); // 개는 왈왈!
cat_bark(); // 고양이는 야옹!
obj.func(); // 고양이는 야옹!

obj.func = dog_bark;
obj.func(); // 개는 왈왈!