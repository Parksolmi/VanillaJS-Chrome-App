const API_KEY = "f084c085ba448c4d48f450e1a96d8dc9";

const weatherDiv = document.querySelector("#weather");
const weatherIcon = document.createElement("img");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data=> {

      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherIcon.setAttribute("class", "weather-icon");
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      
      weatherDiv.prepend(weatherIcon);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}° `;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);