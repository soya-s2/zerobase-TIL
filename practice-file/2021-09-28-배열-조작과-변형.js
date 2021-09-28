let animal = ["dog", "cat", "bird"];

trans = animal.push("deer");
console.log(animal); // [ 'dog', 'cat', 'bird', 'deer' ]
console.log(trans); // 4

trans = animal.pop(); 
console.log(animal); // [ 'dog', 'cat', 'bird' ]
console.log(trans); // deer

trans = animal.shift();
console.log(animal); // [ 'cat', 'bird' ]
console.log(trans); // dog

trans = animal.unshift("otter");
console.log(animal); // [ 'otter', 'cat', 'bird' ]
console.log(trans); // 3

animal = ["dog", "cat", "bird", "deer", "otter"];
trans = animal.splice(3);
console.log(animal); // [ 'dog', 'cat', 'bird' ]
console.log(trans); // [ 'deer', 'otter' ]

animal = ["dog", "cat", "bird", "deer", "otter"];
trans = animal.splice(3, 1, "mouse");
console.log(animal); // [ 'dog', 'cat', 'bird', 'mouse', 'otter' ]
console.log(trans); // [ 'deer' ]

animal = ["dog", "cat", "bird", "deer", "otter"];
trans = animal.slice(3);
console.log(animal); // [ 'dog', 'cat', 'bird', 'deer', 'otter' ]
console.log(trans); // [ 'deer', 'otter' ]

animal = ["dog", "cat", "bird", "deer", "otter"];
trans = animal.concat("rabbit");
console.log(animal); // [ 'dog', 'cat', 'bird', 'deer', 'otter' ]
console.log(trans); // [ 'dog', 'cat', 'bird', 'deer', 'otter', 'rabbit' ]


/* expected output : dog cat bird deer otter */
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

/* expected output : dog cat bird deer otter */
for (let key in animal) {
  console.log(animal[key]);
}

/* expected output : dog cat bird deer otter */
for (let item of animal) {
  console.log(item);
}