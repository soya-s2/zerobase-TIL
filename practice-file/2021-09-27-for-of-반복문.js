let greeting = "hello, guys!";
let text = "";

for (let char of greeting) {
  text += char;
  console.log(text);
}


/*
expected output :

h
he
hel
hell
hello
hello,
hello, 
hello, g
hello, gu
hello, guy
hello, guys
hello, guys!
*/
