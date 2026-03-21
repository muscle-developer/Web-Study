// 대입 연산자
let name = "SinYoung"; // "SinYoung"이라는 문자열을 name 변수에 대입

// 산술 연산자
console.log(10 % 3); // 1 (10을 3으로 나눈 나머지)
console.log(2 ** 3); // 8 (2의 3제곱 - 거듭제곱 연산자)

// 복합 대입 연산자
let score = 100;
score += 10; // score는 110이 됨

// 증감 연산자
let count = 10;
console.log(++count); // 11 (먼저 더하고 출력)
console.log(count++); // 11 (출력 먼저 하고 나중에 더함)
console.log(count);   // 12 (최종 결과)

// 비교 연산자
console.log(5 == "5");  // true (값은 5로 같으니까)
console.log(5 === "5"); // false (숫자와 문자열이므로 다름)

console.log(5 != "5");  // false
console.log(5 !== "5"); // true (일치하지 않는지 비교)