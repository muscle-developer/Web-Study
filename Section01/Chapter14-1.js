// 유저 프로필 가져오기

async function fetchUserList() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        // 배열 메서드(map)를 활용해 이름만 추출
        const names = users.map(user => user.name);
        
        console.log("유저 목록:", names);
    } catch (err) {
        console.error("데이터 통신 중 에러:", err);
    }
}

fetchUserList();