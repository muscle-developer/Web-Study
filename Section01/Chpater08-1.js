// [심화 예제: 사용자 권한 체크 시스템]

const user = {
    isLoggedIn: true,
    profile: {
        nickname: "SinYoung",
        level: 0 // 0은 Falsy임을 주의!
    }
};

// 1. 단락 평가를 활용한 안전한 접근
const userName = user.isLoggedIn && user.profile.nickname;
console.log(`접속 유저: ${userName}`); // SinYoung

// 2. ?? (Null 병합) vs || (OR) 차이 복습
// 만약 level이 0인 경우, ||를 쓰면 'Guest'가 되어버릴 수 있음
const userLevel = user.profile.level ?? "Level 미정"; 
console.log(`유저 레벨: ${userLevel}`); // 0 (정확하게 출력)

// 3. Truthy/Falsy를 활용한 객체 존재 확인
function printProfile(user) {
    if (!user) {
        console.log("유저 정보가 없습니다.");
        return;
    }
    console.log(`${user.profile.nickname}님의 프로필을 출력합니다.`);
}

printProfile(null); // 안전하게 가드(Guard) 처리됨