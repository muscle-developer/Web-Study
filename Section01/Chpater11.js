
// [JS] 11. 배열 메서드: 요소 조작부터 변형까지

// 1. 요소 조작 (기본 다루기)
console.log("--- 1. 요소 조작 ---");
let arr = [1, 2, 3];
arr.push(4);    // 끝에 추가: [1, 2, 3, 4]
arr.shift();    // 앞에서 제거: [2, 3, 4]
const sliced = arr.slice(0, 2); // 인덱스 0부터 2 전까지 잘라내기 (원본 보존)

console.log("원본 배열:", arr);    // [2, 3, 4]
console.log("슬라이스 결과:", sliced);  // [2, 3]


// 2. 탐색 및 순회 (찾기)
console.log("\n--- 2. 탐색 및 순회 ---");
const users = [{ name: "SinYoung" }, { name: "Dexta" }, { name: "Muscle" }];

// indexOf / includes: 단순 값의 위치나 존재 여부 확인
console.log([1, 2, 3].includes(2)); // true

// find / findIndex: 조건에 맞는 요소나 인덱스 찾기
const target = users.find((user) => user.name === "Dexta");
console.log("찾은 유저:", target); // { name: "Dexta" }


// 3. 배열 변형 (데이터 가공 - 고차 함수)
console.log("\n--- 3. 배열 변형 (고차 함수) ---");

// 1. map(): 모든 요소를 변환 (C#의 Select)
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); 
console.log("map 결과:", doubled); // [2, 4, 6]

// 2. filter(): 조건에 맞는 요소만 추출 (C#의 Where)
const scores = [60, 95, 45, 80];
const pass = scores.filter(s => s >= 80); 
console.log("filter 결과:", pass); // [95, 80]

// 3. reduce(): 하나의 값으로 합치기 (C#의 Aggregate)
const sum = [1, 2, 3].reduce((acc, cur) => acc + cur, 0); 
console.log("reduce 결과:", sum); // 6
