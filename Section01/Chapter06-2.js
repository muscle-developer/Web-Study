// 계산기 시스템 (화살표 함수 중심)

// 계산을 수행하는 메인 함수
const calculator = (a, b, operation) => {
    return operation(a, b); // 전달받은 함수(operation)에 a, b를 넣고 결과 반환
};

// 실행 시점에 화살표 함수를 즉석에서 콜백으로 전달 (익명 함수 활용)
const sum = calculator(10, 20, (x, y) => x + y);
const multiply = calculator(10, 20, (x, y) => x * y);

console.log(`합계: ${sum}`);      // 30
console.log(`곱셈: ${multiply}`); // 200