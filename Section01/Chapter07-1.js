// [실습: 스코프와 호이스팅 테스트]

let globalVal = "전역";

function scopeTest() {
    let localVal = "지역";
    
    if (true) {
        let blockVal = "블록";
        var functionVal = "함수레벨";
        console.log(globalVal, localVal, blockVal); // 모두 접근 가능
    }

    console.log(functionVal); // var는 블록을 무시하고 함수 안이면 접근 가능
    // console.log(blockVal); // Error! 블록 스코프 변수는 접근 불가
}

scopeTest();

// --- 주의해야 할 호이스팅 예시 ---
console.log("현재 이메일 설정 확인:", userEmail); // undefined (에러 안 남)
var userEmail = "Test1234@naver.com"; 

// console.log(userAge); // Error! (안전한 let 사용 권장)
let userAge = 30;


// -------------------------------------------------------------------------------------------------------------------

// 1. 호이스팅 테스트
console.log(myVar); // undefined (에러는 안 나지만 위험함)
var myVar = "Hello var";

// console.log(myLet); // ReferenceError (안전함)
let myLet = "Hello let";

// 2. 스코프 중첩 테스트
let name = "Global SinYoung"; // 전역 변수

function outer() {
    let name = "Outer Function"; // 지역 변수
    
    if (true) {
        let name = "Inner Block"; // 블록 변수
        console.log(`1. 블록 내부: ${name}`); // Inner Block
    }
    
    console.log(`2. 함수 내부: ${name}`); // Outer Function
}

outer();
console.log(`3. 전역: ${name}`); // Global SinYoung

// 3. var의 문제점 (for문 예시)
for (var i = 0; i < 3; i++) {
    // 반복문 실행...
}
console.log(`for문 밖의 i: ${i}`); // 3이 출력됨 (새어 나감)

for (let j = 0; j < 3; j++) {
    // 반복문 실행...
}
// console.log(j); // ReferenceError (안전하게 소멸됨)
