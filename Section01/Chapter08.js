// 1. Truthy & Falsy 확인 예제
function check(value) {
    if (value) {
        console.log(`${value} -> [Truthy] 참입니다.`);
    } else {
        console.log(`${value} -> [Falsy] 거짓입니다.`);
    }
}

check(null);      // Falsy
check(0);         // Falsy
check("SinYoung"); // Truthy
check([]);        // Truthy (빈 배열도 참!)

// -------------------------------------------------------------------------------------------------------------------

// 2. 단락 평가
// && (AND) 연산자
// 예: 데이터가 있을 때만 실행하기
function getName(person) {
    return person && person.name; // person이 null이면 null 반환, 있으면 name 반환
}

console.log(getName({ name: "Dexta" })); // "Dexta"
console.log(getName(null));             // null (에러 방지!)

// || (OR) 연산자
// 예: 기본값 설정하기
function getNickname(nick) {
    return nick || "익명 사용자";
}

console.log(getNickname("Muscle")); // "Muscle"
console.log(getNickname(""));       // "익명 사용자" (빈 문자열은 Falsy이므로)