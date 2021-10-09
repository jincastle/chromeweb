const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hidden_classname = "hidden";
const username_key = "username";



function onLoginSubmit(event) {
    event.preventDefault();   // 브라우저의 기본 동작을 막는 함수
    loginForm.classList.add(hidden_classname);
    const username = loginInput.value;
    localStorage.setItem(username_key, username);  // 후자가 변수
    paintGreetings(username);  // username을 input으로부터 받음
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(hidden_classname);
}

const savedUsername = localStorage.getItem(username_key);

if(savedUsername === null) {
    loginForm.classList.remove(hidden_classname);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);  // username을 local Storage로부터 받음
}

