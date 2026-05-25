// [상황: 게임 캐릭터 데이터 관리]

// 1. 원시 타입의 복사 (독립적)
let p1Health = 100;
let p2Health = p1Health;
p2Health = 80; 
console.log(`P1 체력: ${p1Health}, P2 체력: ${p2Health}`); // 100, 80

// 2. 객체 타입의 참조 (공유됨)
let p1Stat = { str: 10, dex: 10 };
let p2Stat = p1Stat; // 주소 복사

p2Stat.str = 20;
console.log(`P1 힘: ${p1Stat.str}`); // 20 (의도치 않은 변경!)

// 3. 객체 복사 해결법 (Spread 연산자)
let p3Stat = { ...p1Stat }; // 새로운 객체 생성
p3Stat.str = 50;
console.log(`P1 힘: ${p1Stat.str}, P3 힘: ${p3Stat.str}`); // 20, 50 (독립 완료)

// 4. 객체 순회 실습
console.log("--- 캐릭터 스탯 목록 ---");
for (const key in p1Stat) {
    console.log(`${key.toUpperCase()}: ${p1Stat[key]}`);
}