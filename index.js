function formatDate(timestamp) {
  const now = new Date(timestamp*1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  const currentTime = `${dayOfWeek} ${hours}:${minutes}`;

  document.getElementById("current-time").textContent = currentTime;
}

function getTemp(response) {
  console.log(response.data);
  let city = document.querySelector("#city-name");
  let tempValue = document.querySelector("#temperature");
  let state = document.querySelector("#weather-state");
  let visibility = document.querySelector("#vis");
  let humid = document.querySelector("#hum-val");
  let wind = document.querySelector("#win-val");
  let dateElement = document.querySelector("#current-time");

  city.innerHTML = response.data.name;
  tempValue.innerHTML = Math.round(response.data.main.temp);
  state.innerHTML = response.data.weather[0].description;
  //let visiValue = Math.round(response.data.main.feels_like);
  //visibility.innerHTML = `Feels like ${visiValue}°C`;
  let visiValue= response.data.visibility;
  visibility.innerHTML= `Visibility: ${visiValue}`;
  let humValue = response.data.main.humidity;
  humid.innerHTML = `Humidity: ${humValue}%`;
  let windValue = Math.round(response.data.wind.speed);
  wind.innerHTML = `Wind: ${windValue} km/h`;
  dateElement.innerHTML = formatDate(response.data.dt*1000);
}

let api_key = "e88a6cc124cdbb45cd8eae06f084dce5";
let city_name = "Lagos";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${api_key}`;
axios.get(apiUrl).then(getTemp);
