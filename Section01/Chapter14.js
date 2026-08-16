// 서버에서 데이터 가져오기 (실전 패턴)

// 무료 테스트 API 활용 (JSONPlaceholder)
const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

async function getData() {
    try {
        // 1. 서버에 데이터 요청
        const response = await fetch(API_URL);
        
        // 2. 응답이 정상적인지 확인 (네트워크 에러 체크)
        if (!response.ok) {
            throw new Error("네트워크 응답이 올바르지 않습니다.");
        }

        // 3. 데이터를 JSON 객체로 변환 (역직렬화)
        const data = await response.json();
        
        console.log("받아온 데이터:", data);
        console.log("제목:", data.title);
    } catch (error) {
        // 4. 에러 발생 시 처리
        console.error("데이터 가져오기 실패:", error);
    }
}

getData();