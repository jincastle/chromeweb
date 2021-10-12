const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#btn");
const hidden_classname = "hidden";
const username_key = "username";



function onLoginSubmit(event) { // 함수 onLoginSubmit에 매개변수 event(실행? 작동?)을 넣음
    event.preventDefault();   // event의 새로고침을 막음
    
    loginForm.classList.add(hidden_classname); // loginform에 username 클래스 추가
    const username = loginInput.value; // username = input입력값 
    localStorage.setItem(username_key, username); // localStorage에 username 키와 value 저장
    paintGreetings(username);  //함수 paintGreetings 실행
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(hidden_classname); // hidden클레스 제거 
    logout.classList.remove(hidden_classname)
}

const savedUsername = localStorage.getItem(username_key);

if(savedUsername === null) { 
    loginForm.classList.remove(hidden_classname); //login-form에 있는 hidden을 제거한다.
    loginForm.addEventListener("submit", onLoginSubmit); // submit 사용?실행시 onLoginSubmit이라는 함수 실행
} else { 
    paintGreetings(savedUsername);  // 함수 paintGreetings에 매개변수 username을 받아서 실행
}

function logOut(logout) {
    localStorage.removeItem(username_key);
    location.reload();
}

logout.addEventListener("click", logOut);


