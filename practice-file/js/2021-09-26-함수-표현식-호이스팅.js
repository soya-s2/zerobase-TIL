function a() {
  console.log(b); // (1)
  var b = "bbb"; // 수집 대상 1 (변수 선언)
  console.log(b); // (2)
  var b = function b() {} // 수집 대상 2 (함수 선언)
  console.log(b); // (3)
}
a();


/* 아래와 같이 호이스팅 된다. 
function a() {
  var b;
  var b;
  console.log(b); // (1)
  b = "bbb"; // 수집 대상 1 (변수 선언)
  console.log(b); // (2)
  b = function b() {} // 수집 대상 2 (함수 선언)
  console.log(b); // (3)
}
a();
*/