// 블록 스코프 테스트
if (true) {
    var varValue = "나는 함수 스코프 (위험)";
    let letValue = "나는 블록 스코프 (안전)";
    const constValue = "나도 블록 스코프 (안전)";
}

console.log(varValue); // 출력됨: "나는 함수 스코프 (위험)"
console.log(letValue); // ReferenceError: letValue is not defined

// -------------------------------------------------------------------------------------------------------------------

// 함수, 블룩 스코프 예제
if (true) {
    var globalLike = "나는 어디서든 보여요"; // 함수 스코프
    let localOnly = "나는 이 안에서만 보여요"; // 블록 스코프
}

console.log(globalLike); // 출력됨
console.log(localOnly);  // ReferenceError 발생!

// -------------------------------------------------------------------------------------------------------------------

// 스코프의 호이스팅 예제 

console.log(hoistedVar); // undefined (에러는 안 남)
var hoistedVar = "Hello";

console.log(safeLet); // ReferenceError (안전)
let safeLet = "Hi";
