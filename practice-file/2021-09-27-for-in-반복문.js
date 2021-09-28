const animal = { name: "sooni", age: 2 };

let text = "";
for (key in animal) {
  text += `${key}: ${animal[key]}, `;
}

console.log(text);

// expected output : name: sooni, age: 2, 