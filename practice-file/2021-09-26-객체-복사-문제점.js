let me = {
  name: "kim",
  age: 26
};

let you = me;
console.log(you); // { name: 'kim', age: 26 }

you.age = 28;
console.log(you); // { name: 'kim', age: 28 }
console.log(me); // { name: 'kim', age: 28 }