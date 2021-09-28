let animal = new Map([
  ["navi", 4],
  ["bbobi", 2],
  ["byeoli", 8]
]);

let animal_obj = Object.fromEntries(animal);
console.log(animal_obj); // { navi: 4, bbobi: 2, byeoli: 8 }

let animal_keyvalue1 = Object.entries(animal_obj);
let animal_keyvalue2 = new Map(animal_keyvalue1);
console.log(animal_keyvalue1); // [ [ 'navi', 4 ], [ 'bbobi', 2 ], [ 'byeoli', 8 ] ]
console.log(animal_keyvalue2); // Map(3) { 'navi' => 4, 'bbobi' => 2, 'byeoli' => 8 }
console.log(typeof animal_keyvalue1); // object