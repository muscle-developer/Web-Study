// [종합 테스트 케이스] 사용자 데이터 처리 시스템

// 1. 객체 타입 데이터 (Object, Array)
const rawUserData = {
    name: "SinYoung",
    age: 30,
    point: 0,           // 0점은 유효한 점수임
    nickname: "",       // 빈 문자열은 유효한 닉네임임
    items: ["MacBook", "Keyboard"],
    lastLogin: null     // 데이터가 비어있음
};

console.log("--- 데이터 분석 시작 ---");

// 2. ?? vs || 차이 테스트 (중요!)
// ||를 쓰면 0점과 빈 문자열을 '없음'으로 판단하여 기본값으로 덮어버림
let point_OR = rawUserData.point || 100;      // 0을 거짓으로 봐서 100이 됨 (에러)
let point_NULL = rawUserData.point ?? 100;    // 0을 값으로 인정해서 0이 됨 (정확)

let nick_OR = rawUserData.nickname || "익명";  // ""를 거짓으로 봐서 "익명"이 됨 (에러)
let nick_NULL = rawUserData.nickname ?? "익명"; // ""를 값으로 인정해서 ""이 됨 (정확)

console.log(`점수 결과: ${point_NULL}, 닉네임 결과: '${nick_NULL}'`);

// 3. typeof 연산자 활용
console.log(`age 변수의 타입은? ${typeof rawUserData.age}`);

// 4. 삼항 연산자 & 산술 연산자
let nextAge = rawUserData.age + 1;
let isAdult = nextAge >= 20 ? "성인" : "미성년자";

// 5. 조건문 (if-else)
if (rawUserData.lastLogin === null) {
    console.log("신규 유저입니다. 환영합니다!");
} else {
    console.log("기존 유저입니다.");
}

// 6. 반복문 (for) & 복합 대입 연산자
console.log("보유 아이템 목록:");
let itemCount = 0;
for (let i = 0; i < rawUserData.items.length; i++) {
    console.log(`- ${rawUserData.items[i]}`);
    itemCount += 1; // 복합 대입 연산자 활용
}

// 7. 증감 연산자 테스트
console.log(`총 아이템 개수: ${itemCount++} (이후에는 ${itemCount}가 됩니다)`);