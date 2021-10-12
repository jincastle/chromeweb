const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "9c6f7d38dab7cf11abb520e1e3fb04ec";

const weatherIcon = {
  '01': '🌞',
  "02" :'⛅',
  "03" :'☁',
  "04" :'⛅',
  "09" :'🌦',
  "10" :'☔',
  "11" :'🌫',
  "13" :'',
  "50" :'',
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather .weather')
      const city = document.querySelector('#weather .city')
      city.innerText = data.name;
      const currentWeather = (data.weather[0].icon).substr(0,2);
      const whatWeather = data.weather[0].main;
      weather.innerText =  weatherIcon[currentWeather]

    })
    .catch()
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);