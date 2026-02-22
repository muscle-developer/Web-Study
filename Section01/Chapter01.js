console.log("1번째 파일 생성 및 Js생성");

// 1. 변수 -> let 사용
let age = 30;

// 2. 상수 -> Const 사용 : 값 변화 불가로 초기화 반드시 필요함
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


// Git Test push