// 응용편

// 1. 대입 & 산술
let a = 10;
let b = 3;
console.log(`더하기: ${a + b}, 나머지: ${a % b}`);

// 2. 복합 대입
let c = 20;
c += 10; // c = 30
c /= 3;  // c = 10
console.log(`복합 대입 결과: ${c}`);

// 3. 증감 연산자 테스트
let x = 1;
console.log(++x); // 2 (전위)
console.log(x++); // 2 (후위, 출력 후 3이 됨)
console.log(x);   // 3

// 4. 비교 연산자 (Strict Check)
let num = 100;
let strNum = "100";

console.log(num == strNum);  // true (위험!)
console.log(num === strNum); // false (안전!)