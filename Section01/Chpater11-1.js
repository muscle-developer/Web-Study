// [통합 예제] 재고 관리 시스템 
console.log("\n--- 4. 통합 실습 (재고 시스템) ---");
const inventory = [
    { name: "Motor", type: "Part", price: 500, stock: 3 },
    { name: "Sensor", type: "Part", price: 100, stock: 10 },
    { name: "Robot Arm", type: "Machine", price: 5000, stock: 1 },
    { name: "Cable", type: "Part", price: 10, stock: 100 }
];

// 메서드 체이닝을 활용한 데이터 가공
// 1. Part 타입이면서 100불 이상인 것만 필터링
// 2. 이름만 추출해 대문자로 변환
// 3. 알파벳 순 정렬 (sort는 원본 배열을 수정함에 주의)
const result = inventory
    .filter(item => item.type === "Part" && item.price >= 100)
    .map(item => item.name.toUpperCase())
    .sort();

console.log("가공된 목록:", result); // ["MOTOR", "SENSOR"]

// 4. 전체 재고의 총 자산 가치 계산 (reduce 사용)
const totalAsset = inventory.reduce((total, item) => {
    return total + (item.price * item.stock);
}, 0);

console.log(`총 자산 가치: $${totalAsset}`);