function Animal(name, age) {
  this.name = name;
  this.age = age;
}

let nabi = new Animal("나비", 4);
let bbobi = new Animal("뽀삐", 2);

console.log(nabi); // expected output: Animal { name: '나비', age: 4 }
console.log(bbobi); // expected output: Animal { name: '뽀삐', age: 2 }
