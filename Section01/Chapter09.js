
// 구조 분해 할당
// 1. 배열 구조 분해 할당
const colors = ["red", "green", "blue"];

// 기존 방식
// const first = colors[0];
// const second = colors[1];

// 구조 분해 할당
const [first, second, third] = colors;

console.log(first, second, third); // red green blue

// 2. 객체 구조 분해 할당
const user = {
    name: "SinYoung",
    age: 30,
    job: "Developer"
};

// 필요한 것만 쏙쏙 뽑아오기
const { name, job, sns = "None" } = user; 

console.log(name, job, sns); // SinYoung Developer None (기본값 설정 가능)

// 변수 이름을 바꾸고 싶을 때
const { name: userName } = user;
console.log(userName); // SinYoung

// -------------------------------------------------------------------------------------------------------------------

// Spread 연산자 (펼침 연산자)
// 1. 배열에서의 Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2]; 
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 2. 객체에서의 Spread (중요!)
const config = { theme: "dark", language: "ko" };
const newConfig = { ...config, font: "Pretendard" };

console.log(newConfig); // { theme: "dark", language: "ko", font: "Pretendard" }


// -------------------------------------------------------------------------------------------------------------------

// Rest 매개변수
function sumAll(...numbers) {
    // numbers는 [1, 2, 3, 4, 5] 배열이 됩니다.
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15