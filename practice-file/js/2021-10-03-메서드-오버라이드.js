var Person = function (name) {
  this.name = name;
};
Person.prototype.getName = function () {
  return this.name;
};

var jenny = new Person('제니');
jenny.getName = function () {
  return '예쁜 ' + this.name;
};
console.log(jenny.getName()); // 예쁜 제니