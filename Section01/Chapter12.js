// 1. Date 객체와 날짜 다루기
// 현재 시간 생성
const now = new Date();

// 특정 날짜 생성 (년, 월-1, 일, 시, 분, 초)
const targetDate = new Date(2026, 4, 24, 17, 40, 0); 

// 날짜 데이터 가져오기
console.log(now.getFullYear()); // 2026
console.log(now.getMonth() + 1); // 5 (0부터 시작하므로 +1 필수!)
console.log(now.getDate());      // 24

// 날짜 비교 (타임스탬프 활용)
const diff = now.getTime() - targetDate.getTime();
console.log(`차이 시간(ms): ${diff}`);


// 2. 동기(Synchronous) vs 비동기(Asynchronous)


// 2.1 동기 
console.log("1번 작업");
// 매우 무거운 계산(3초 소요)
console.log("2번 작업"); // 3초 뒤에 출력됨


// 2.2 비동기
console.log("1번 작업");
// 3초 뒤에 실행할 작업을 요청 (요청만 하고 넘어감)
setTimeout(() => {
    console.log("2번 작업 (3초 후 실행)");
}, 3000);
console.log("3번 작업"); // 2번 작업 기다리지 않고 바로 출력!


// 3. 비동기 작업의 딜레마: 콜백 지옥
// 콜백 지옥: 3단계 작업
// "가져오기" -> "처리하기" -> "저장하기"
getData(function(data) {
    processData(data, function(processed) {
        saveData(processed, function(result) {
            console.log("모두 끝났습니다:", result);
        });
    });
});