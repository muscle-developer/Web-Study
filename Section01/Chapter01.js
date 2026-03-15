console.log("1번째 파일 생성 및 Js생성");

// 1. 변수 -> let 사용
// 변수 (let): 재할당이 가능합니다.
let age = 30;

// 2. 상수 -> Const 사용 : 값 변화 불가로 초기화 반드시 필요함
// (const): 값 변화가 불가능하며 선언 시 반드시 초기화해야 합니다.
const birth = "199.12.17";

// 3. Number Type
let num1 = 123;
let inf = Infinity; // 양의 무한대
let nan = NaN; // Not a Number - 수치 연산에 실패했을 때 결과 값으로 사용
console.log(1 * "Hi"); // return NaN

// 4. String Type
let str1 = "Hello";
let str2 = '안녕';
let str3 =  str1 + str2; // 붙어서 사용

let dynamicString = `${str1} : 영어 + ${str2} : 한국어`; // 동적으로 사용

// 5. Null Type
let empty = null;    // 아무것도 없는 상태 -> 변수의 없다를 표현할 때 개발자가 직접 설정하는 값

// 6. Undefined Type
let none;           //  Undefined 만 나오는 아무것도 없는 상태 -> 변수만 선언하고 값이 비어있을 때 자동으로 들어가는 값


// 객체 생성
let person = {
  name: "김신영",
  age: 30,
  isDeveloper: true
};

// 프로퍼티 접근
console.log(person.name); // 마침표 표기법: 김신영
console.log(person["age"]); // 대괄호 표기법: 30


// 배열 생성
let colors = ["Red", "Green", "Blue"];

// 인덱스로 접근 (0부터 시작)
console.log(colors[0]); // Red
console.log(colors.length); // 배열의 길이: 3

// 함수 선언
function sayHello() {
  console.log("안녕하세요!");
}

// 함수 실행(호출)
sayHello();