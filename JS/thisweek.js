// later used in getcurrentweather function
let lat;
let long;

//** tries to get location from users computer and starts function if ok or shows message if not */
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCurrentWeather);
  } else {
    document.getElementById("city").innerHTML =
      "Geolocation is not supported by this browser.";
  }
}

/**
 * gets location and fetches weather data from api and prints messeage based on weather.
 * @param {position} position
 */
async function getCurrentWeather(position) {
  // gets lon/lat position which is read in api call as objects and shows degree icon
  const degree = document.querySelector(".temperature");
  degree.classList.remove("hide-degree");
  lat = position.coords.latitude.toFixed(2);
  long = position.coords.longitude.toFixed(2);

  //fetches data from weather api and gets specific objects from array
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8684bf0b8bf14ad3b3e267df7c600452&units=metric`
  );
  const data = await response.json();
  const temperature = data.main.temp;
  const sky = data.weather[0].main;
  const city = data.name;
  console.log(data);

  printCityName(city);
  printWeatherMessage(temperature);
  printWeatherIcon(sky);
}

function printWeatherMessage(temperature) {
  document.querySelector(".temperature-degree").innerHTML =
    Math.floor(temperature);

  if (temperature < 10) {
    document.querySelector(".temperature-description").innerHTML =
      "Stay inside, it's cold today";
  }
  if (temperature > 10) {
    document.querySelector(".temperature-description").innerHTML =
      "It's good weather";
  }
}

function printWeatherIcon(sky) {
  cloud = document.querySelector(".cloud");
  sun = document.querySelector(".sun");
  snow = document.querySelector(".snow");
  wind = document.querySelector(".wind");
  rain = document.querySelector(".rain");

  switch (sky) {
    case "Clouds":
      cloud.classList.remove("hide-icon");
      break;
    case "Rain":
      rain.classList.remove("hide-icon");
      break;

    case "Clear":
      sun.classList.remove("hide-icon");
      break;

    case "Snow":
      rain.classList.remove("hide-icon");
      break;
  }
}

function getCurrentTime() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  document.querySelector(".location-timezone").innerHTML = time;
}

function printCityName(city) {
  document.querySelector(".city").innerHTML = city;
}
