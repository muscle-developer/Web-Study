// 1. Promise: 비동기의 상태 약속 : Promise는 비동기 작업이 성공(Resolve)했는지, 아니면 실패(Reject)했는지를 나타내는 '객체'입니다.

// Pending (대기): 작업이 진행 중
// Fulfilled (성공): 작업 완료, 결과값 반환
// Rejected (실패): 오류 발생, 이유 반환


// Promise 생성: 작업이 성공하면 resolve, 실패하면 reject 호출
const orderCoffee = new Promise((resolve, reject) => {
    const isCoffeeReady = true;

    setTimeout(() => {
        if (isCoffeeReady) resolve("☕ 커피가 준비되었습니다!");
        else reject("❌ 커피 재료가 부족합니다.");
    }, 2000);
});

// 사용하기
orderCoffee
    .then((result) => console.log(result)) // 성공 시
    .catch((error) => console.log(error))  // 실패 시
    .finally(() => console.log("주문 시스템 종료")); // 성공/실패 상관없이 실행



// 2. Async & Await: 비동기의 정점
// 2.1 함수 앞에 async를 붙이면, 함수는 무조건 Promise를 반환합니다.
async function getCoffee() {
    try {
        console.log("주문 시작...");
        
        // 2.2 await는 Promise가 끝날 때까지 코드 실행을 '일시 정지'합니다.
        const message = await orderCoffee; 
        
        console.log(message); // 커피가 준비되면 다음 줄 실행
    } catch (error) {
        // 2.3 에러는 try-catch로 깔끔하게 처리!
        console.error(error);
    }
}

getCoffee();