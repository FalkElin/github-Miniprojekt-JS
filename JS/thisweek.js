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
  // gets lon and lat position which is read in api call and shows degree icon
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
  const sunset = data.sys.sunset;

  //starts functions when api is succesfully returned
  printCityName(city);
  printWeatherMessage(temperature, sky, sunset);
}

/**
 * prints different message depending on current temperature and weather
 * @param {*} temperature
 * @param {*} sky
 */
function printWeatherMessage(temperature, sky, sunset) {
  const weatherDescription = document.querySelector(".temperature-description");
  document.querySelector(".temperature-degree").innerHTML =
    Math.floor(temperature) + "°";
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  let formattedSunset = setBackground(sunset, time);

  if (time < formattedSunset) {
    printWeatherIconDay(sky);
    weatherDescription.innerHTML =
      "Det är " +
      printTemperatureMessage(temperature) +
      " och " +
      printWeatherMessageDay(sky);
  } else {
    printWeatherIconNight(sky);
    weatherDescription.innerHTML =
      "Det är " +
      printWeatherMessageNight(sky) +
      " och " +
      printTemperatureMessage(temperature);
  }
}

function setBackground(sunset, time) {
  let unix_timestamp = sunset;
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();

  // Will display time in 10:30:23 format
  let formattedSunset = hours + ":" + minutes.substr(-2);

  if (time > formattedSunset) {
    document.body.style = "background-image: url(/pictures/winter-night.jpg);";
  }
  return formattedSunset;
}

function printTemperatureMessage(temperature) {
  if (temperature > 1) {
    return "plusgrader";
  }
  if (temperature < 0) {
    return "minusgrader";
  } else {
    return "nollgrader";
  }
}

function printWeatherMessageDay(sky) {
  if (sky === "Clouds") {
    return "moln";
  } else if (sky === "Drizzle") {
    return "duggregn";
  } else if (sky === "Clear") {
    return "sol";
  } else if (sky === "Rain") {
    return "regn";
  } else if (sky === "Snow") {
    return "snö";
  } else if (sky === "Thunderstorm") {
    return "åska";
  }
}

function printWeatherMessageNight(sky) {
  if (sky === "Clouds") {
    return "molnigt";
  } else if (sky === "Drizzle") {
    return "duggregn";
  } else if (sky === "Clear") {
    return "klar himmel";
  } else if (sky === "Rain") {
    return "regnigt";
  } else if (sky === "Snow") {
    return "snö";
  } else if (sky === "Thunderstorm") {
    return "åska";
  } else if (sky === "Atmosphere") {
    return "vind";
  }
}
/**
 * Prints different icon at night depending on current weather from api
 * @param {*} sky
 */
function printWeatherIconNight(sky) {
  cloud = document.querySelector(".cloud");
  sun = document.querySelector(".sun");
  snow = document.querySelector(".snow");
  wind = document.querySelector(".wind");
  rain = document.querySelector(".rain");
  thunder = document.querySelector(".thunder");
  drizzle = document.querySelector(".drizzle");
  moon = document.querySelector(".moon");

  switch (sky) {
    case "Clouds":
      cloud.classList.remove("hide-icon");
      break;
    case "Rain":
      rain.classList.remove("hide-icon");
      break;

    case "Clear":
      moon.classList.remove("hide-icon");
      break;

    case "Snow":
      winter.classList.remove("hide-icon");
      break;

    case "Thunderstorm":
      thunder.classList.remove("hide-icon");
      break;

    case "Drizzle":
      drizzle.classList.remove("hide-icon");
      break;

    case "Atmosphere":
      wind.classList.remove("hide-icon");
      break;
  }
}
/**
 * Prints different icon at daytime depending on current weather from api
 * @param {*} sky
 */
function printWeatherIconDay(sky) {
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
      snow.classList.remove("hide-icon");
      break;

    case "Thunderstorm":
      thunder.classList.remove("hide-icon");
      break;

    case "Drizzle":
      drizzle.classList.remove("hide-icon");
      break;
  }
}

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

// async function test() {
//   console.log(await getSwedishHolidays(calendar.year, calendar.month));
// }

// async function getSwedishHolidays(year, month) {
//   const response = await fetch(
//     `https://sholiday.faboul.se/dagar/v2.1/${year}/${month + 1}`
//   );
//   const data = await response.json();
//   const days = data.dagar;

//   const holidays = [];
//   for (let i = 0; i < days.length; i++) {
//     if (days[i].helgdag) {
//       holidays.push(days[i]);
//     }
//   }

//   return holidays;
// }
