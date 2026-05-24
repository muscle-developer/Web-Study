// [상황: 유저 설정 업데이트 시스템]

const defaultSettings = { theme: "light", fontSize: 14, showSidebar: true };
const userUpdate = { fontSize: 18, showSidebar: false };

// 1. 객체 병합 (Spread)
const finalSettings = { ...defaultSettings, ...userUpdate };

// 2. 특정 값 추출 및 나머지 모으기 (Rest)
const { theme, ...restInfo } = finalSettings;

console.log(`현재 테마: ${theme}`); // light
console.log("기타 설정:", restInfo); // { fontSize: 18, showSidebar: false }

// 3. 함수에서 활용 (Destructuring + Rest)
function displayInfo({ theme, fontSize }, ...tags) {
    console.log(`설정: ${theme}(${fontSize}px)`);
    console.log(`태그 목록: ${tags.join(", ")}`);
}

displayInfo(finalSettings, "Work", "Personal", "Update");