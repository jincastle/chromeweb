const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // 시간을현불러오고 문자열로 바꾼후 길이2에 빈공간은 0으로 채움
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`; // 시간 표현
}

getClock(); //페이지가 reload 된 후에 바로 시간을 표현해주기 위함
setInterval(getClock, 1000) //1초마다 함수 getClock 확인