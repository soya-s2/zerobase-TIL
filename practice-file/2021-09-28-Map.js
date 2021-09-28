/* Map 컬렉션 생성 */
let map = new Map();

console.log(map); // Map(0) {}, 0은 현재 Map의 크기이다.

/* String 자료형의 키와 값 추가 */
map.set("name", "나비");

console.log(map); // Map(1) { 'name' => '나비' }

/* Number 자료형의 키와 값 추가 */
map.set(1, 4);

console.log(map); // Map(2) { 'name' => '나비', 1 => 4 } (다양한 자료형이 가능)
console.log(map.size); // 2 (Map의 크기 확인)

/* 키를 통해 값에 접근하기 */
console.log(map.get("name")); // 나비

/* 키가 1인 요소를 삭제 */
map.delete(1);
console.log(map); // Map(1) { 'name' => '나비' }

/* 모든 요소 삭제 */
map.clear();

console.log(map); // Map(0) {}

map.set("name", "나비").set("age", 4).set("종류", "cat");

console.log(map); // Map(3) { 'name' => '나비', 'age' => 4, '종류' => 'cat' }