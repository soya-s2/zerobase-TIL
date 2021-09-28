let str = "This is JavaScript!";

console.log(str.charAt(2)); // i
console.log(str.charCodeAt(2)); // 105
console.log(str[2]); // i

console.log(str.indexOf("h")); // 1
console.log(str.indexOf("i", 2)); // 2
console.log(str.lastIndexOf("i")); // 15

console.log(str.includes("is")); // true
console.log(str.startsWith("his", 1)); // true
console.log(str.endsWith("pt!")); // true
 
console.log(str.toUpperCase()); // THIS IS JAVASCRIPT!
console.log(str.toLowerCase()); // this is javascript!