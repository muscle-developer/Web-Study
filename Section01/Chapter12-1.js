// [JS] 12. 시간과 비동기 기초
 
// 1. Date 객체 활용
function getFormattedTime() {
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

// 2. 비동기 타이머 테스트
console.log(`시작 시간: ${getFormattedTime()}`);

// 비동기 작업: 2초 후 메시지 출력
setTimeout(() => {
    console.log(`[비동기 실행] 현재 시간: ${getFormattedTime()}`);
}, 2000);

// 비동기 요청 후 즉시 실행
console.log(`요청 후 즉시 실행: ${getFormattedTime()}`);

// 3. 콜백 함수 구조 살펴보기
function task(name, callback) {
    console.log(`${name} 시작!`);
    setTimeout(() => {
        console.log(`${name} 완료!`);
        callback();
    }, 1000);
}

task("데이터 로딩", () => {
    console.log("콜백 호출: 모든 작업이 완료되었습니다.");
});