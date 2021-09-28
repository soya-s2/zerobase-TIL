let a = 1;
let b = 2;

/* Global Scope */
console.log(a); // 1
console.log(b); // 2


/* Local Scope 1 */
{
  let a = 3;
  let b = 4;

  console.log(a); // 3
  console.log(b); // 4
}

/* Local Scope 2 */
function scope() {
  let a = 5;
  let b = 6;
  console.log(a); // 5
  console.log(b); // 6 
}

scope();

/* Global Scope */
console.log(a); // 1
console.log(b); // 2