// 1. 원시 타입 
let a = 10;
let b = a; // 값을 복사해서 전달
b = 20;

console.log(a); // 10 (b를 바꿔도 a는 그대로!)

// 2. 객체 타입
let user1 = { name: "SinYoung" };
let user2 = user1; // 주소(참조)를 복사해서 전달

user2.name = "Dexta";

console.log(user1.name); // "Dexta" (user2를 바꿨는데 user1도 바뀜!)

// -------------------------------------------------------------------------------------------------------------------


// 3. 반복문으로 배열과 객체 순회하기
// 배열 순회 : for of
const fruits = ["사과", "배", "포도"];
for (const fruit of fruits) {
    console.log(fruit);
}

// 객체 순회 : for in
const person = { name: "SinYoung", age: 30, job: "Dev" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}