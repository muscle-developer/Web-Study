// [JS] 13. 비동기 처리의 최종 진화 (Promise + Async/Await)

// API에서 데이터를 가져오는 가상 함수
function fetchUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) resolve({ id: 1, name: "SinYoung" });
            else reject("유저를 찾을 수 없습니다.");
        }, 1500);
    });
}

// Async/Await 활용 (최종 형태)
async function displayUser(id) {
    try {
        console.log("데이터 불러오는 중...");
        
        const user = await fetchUserData(id); // 결과가 나올 때까지 대기
        
        console.log(`유저 정보 수신 성공:`, user.name);
    } catch (error) {
        console.error(`에러 발생: ${error}`);
    } finally {
        console.log("작업이 최종 종료되었습니다.");
    }
}

displayUser(1); // 성공 케이스
displayUser(99); // 실패 케이스