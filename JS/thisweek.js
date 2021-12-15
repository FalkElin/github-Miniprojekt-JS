// later used in getcurrentweather function
let lat;
let long;

//** tries to get location from users computer and starts function if ok or shows message if not */
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCurrentWeather);
  } else {
    document.getElementById("city").innerHTML =
      "Geolokalisering stöds inte av den här webbläsaren.";
  }
}

/**
 * gets location and fetches weather data from api and prints messeage based on weather.
 * @param {position} position
 */
async function getCurrentWeather(position) {
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
  // gets lon and lat position which is read in api call and shows degree icon
  const degree = document.querySelector(".temperature");
  degree.classList.remove("hide-degree");
>>>>>>> Stashed changes
=======
  // gets lon and lat position which is read in api call and shows degree icon
  const degree = document.querySelector(".temperature");
  degree.classList.remove("hide-degree");
>>>>>>> ad8c750f63153f35021a28c2d3ea321f96f3b927
  lat = position.coords.latitude.toFixed(2);
  long = position.coords.longitude.toFixed(2);

  //fetches data from weather api and gets specific objects from array
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8684bf0b8bf14ad3b3e267df7c600452&units=metric`
  );
  const data = await response.json();
  const temperature = data.main.temp;
<<<<<<< HEAD
<<<<<<< Updated upstream

=======
  const sky = data.weather[0].main;
  const city = data.name;

=======
  const sky = data.weather[0].main;
  const city = data.name;

>>>>>>> ad8c750f63153f35021a28c2d3ea321f96f3b927
  //starts functions when api is succesfully returned
  printCityName(city);
  printWeatherMessage(temperature);
  printWeatherIcon(sky);
}

/**
 * prints different message depending on current temperature and weather
 * @param {*} temperature
 * @param {*} sky
 */
function printWeatherMessage(temperature, sky) {
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> ad8c750f63153f35021a28c2d3ea321f96f3b927
  document.querySelector(".temperature-degree").innerHTML =
    Math.floor(temperature) + "°";

  if (temperature < 5) {
    document.querySelector(".temperature-description").innerHTML =
      "Stanna inne! Det är kallt ute idag";
  }
  if (temperature > 5 || !sky === "Rain, Snow, Thunderstorm, Drizzle") {
    document.querySelector(".temperature-description").innerHTML =
      "Det är plusgrader och uppehåll";
  }
  if (sky === "Clear") {
    document.querySelector(".temperature-description").innerHTML =
      "Solen skiner och himlen är blå!";
  }
}

/**
 * Prints different icon depending on current weather from api
 * @param {*} sky
 */
function printWeatherIcon(sky) {
  cloud = document.querySelector(".cloud");
  sun = document.querySelector(".sun");
  snow = document.querySelector(".snow");
  wind = document.querySelector(".wind");
  rain = document.querySelector(".rain");
  thunder = document.querySelector(".thunder");
  drizzle = document.querySelector(".drizzle");

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

    case "Thunderstorm":
      thunder.classList.remove("hide-icon");
      break;

    case "Drizzle":
      drizzle.classList.remove("hide-icon");
      break;
  }
}
<<<<<<< HEAD
<<<<<<< Updated upstream
=======

/**
 * Prints different icon depending on current weather from api
 * @param {*} sky
 */
function printWeatherIcon(sky) {
  cloud = document.querySelector(".cloud");
  sun = document.querySelector(".sun");
  snow = document.querySelector(".snow");
  wind = document.querySelector(".wind");
  rain = document.querySelector(".rain");
  thunder = document.querySelector(".thunder");
  drizzle = document.querySelector(".drizzle");

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

    case "Thunderstorm":
      thunder.classList.remove("hide-icon");
      break;

    case "Drizzle":
      drizzle.classList.remove("hide-icon");
      break;
  }
}
=======
>>>>>>> ad8c750f63153f35021a28c2d3ea321f96f3b927

/**
 * updates time every minute by calling function that gets current time
 */
function startClock() {
  renderClock();
  setInterval(renderClock, 6000);
}

/**
 *  prints out day of week and date in number
 */
function renderClock() {
  let today = new Date();

  const timeElement = document.querySelector(".location-timezone");
  timeElement.innerText = getCurrentTime(today);

  const weekdayElement = document.querySelector(".weekday");
  weekdayElement.innerText =
    getCurrentWeekday(today) + " " + getDateInNumbers(today);
}

/**
 * Gets current time and sends back for printing in renderclock
 * @param {*} today
 * @returns hours + minutes
 */
function getCurrentTime(today) {
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  return hours + ":" + minutes;
}

/**
 * coverts numbers of weekday to swedish weekdays in letters
 * @param {*} today
 * @returns days in letters instead of numbers
 */
function getCurrentWeekday(today) {
  const weekday = today.getDay();

  switch (weekday) {
    case 0:
      return "Söndag";
    case 1:
      return "Måndag";
    case 2:
      return "Tisdag";
    case 3:
      return "Onsdag";
    case 4:
      return "Torsdag";
    case 5:
      return "Fredag";
    case 6:
      return "Lördag";
  }
}

/**
 * gets current day and month in numbers, adds 1 to month for correct number
 * @param {*} today
 * @returns current day + month in numbers
 */
function getDateInNumbers(today) {
  day = today.getDate();
  month = today.getMonth() + 1;

  return day + "/" + month;
}

/**
 * prints current city into div element
 * @param {*} city
 */
function printCityName(city) {
  document.querySelector(".city").innerHTML = city;
}
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> ad8c750f63153f35021a28c2d3ea321f96f3b927
