function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCurrentWeather);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

let lat;
let long;

async function getCurrentWeather(position) {
  lat = position.coords.latitude.toFixed(2);
  long = position.coords.longitude.toFixed(2);

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7&units=metric`
  );

  const data = await response.json();
  const temperature = data.main.temp;

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
