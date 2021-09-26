let me = {
  name: "kim",
  age: 26
};

console.log(typeof me); // object
console.log(typeof me.name); // string
console.log(typeof me.age); // number

console.log(me); // { name: 'kim', age: 26 }
console.log(me.name); // kim
console.log(me["name"]); // kim
console.log(me.age); // 26

me.grade = 3;
console.log(me); // { name: 'kim', age: 26, grade: 3 }

delete me.age;
console.log(me); // { name: 'kim', grade: 3 }