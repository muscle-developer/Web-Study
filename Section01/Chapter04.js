// Null 병합 연산자
let nickname;
let userName = "SinYoung";

// nickname이 없으면(null/undefined) userName을 선택
let finalName = nickname ?? userName; 
console.log(finalName); // "SinYoung"

// typeof 연산자
let value = 123;
console.log(typeof value); // "number"

value = "Hello";
console.log(typeof value); // "string"

// 삼항 연산자
let age = 20;
let message = age >= 19 ? "성인입니다" : "미성년자입니다";
console.log(message); // "성인입니다"

// 조건문 
let score = 85;

if (score >= 90) {
  console.log("A학점");
} else if (score >= 80) {
  console.log("B학점");
} else {
  console.log("C학점");
}

// 반복문 
// for: 반복 횟수가 명확할 때
for (let i = 0; i < 5; i++) {
  console.log(`${i}번째 반복 중`);
}

// while: 조건이 참인 동안 계속 반복
let count = 0;
while (count < 3) {
  console.log("진행 중...");
  count++;
}