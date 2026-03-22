// 사용자 이름을 받아서 인사말을 만들고, 그 결과를 출력하는 시스템

// 1. 함수 표현식 (C#의 델리게이트처럼 변수에 함수를 할당)
const createGreeting = function(name) {
    return `안녕하세요, ${name}님!`; // return: 결과를 밖으로 내보냄
};

// 2. 화살표 함수 (람다식처럼 간결하게 작성)
const printLog = (message) => {
    console.log(`[시스템 로그]: ${message}`);
};

// 3. 콜백 함수를 사용하는 메인 함수
// callback 매개변수는 '함수' 자체를 인수로 받습니다.
function processUser(userName, callback) {
    console.log("데이터 처리 중...");
    
    // 매개변수로 받은 callback 함수를 실행합니다.
    const result = callback(userName); 
    
    console.log("처리 완료!");
    return result; // 최종 결과 반환
}

// --- 실행 (인수 전달) ---
// 인수로 'createGreeting' 함수 자체를 넘겨줍니다.
const finalMessage = processUser("SinYoung", createGreeting);
printLog(finalMessage);