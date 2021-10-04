function Animal(name, kinds) {
  this.name = name;
  this.kinds = kinds;
}

Animal.prototype.isDog = function() {
  return this.kinds == "강아지";
}

const a1 = new Animal("bbobi", "강아지");
const a2 = new Animal("navi", "고양이");

console.log(a1.isDog());
console.log(a2.isDog());