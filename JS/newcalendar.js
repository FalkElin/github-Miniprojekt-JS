/** Holds relevant data for calendar */
let calendar = {
  date: new Date(),
  month: null,
  year: null,
  today: null,
};

/** initializes the calendar */
function initCalendar() {
  addCalendarEventlisteners();
  calendar.month = calendar.date.getMonth();
  calendar.year = calendar.date.getFullYear();
  calendar.today = calendar.date.getUTCDate();
  calendar.date.setDate(1);
  renderCalendar();
  renderCalendarHolidays(calendar.month, calendar.year);
}

/** Array for month titles */
const months = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
];

/** array for weekday titles */
const weekdays = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Tordag",
  "Fredag",
  "Lördag",
];

/** adds eventlisteners */
function addCalendarEventlisteners() {
  document
    .getElementById("arrow-back")
    .addEventListener("click", changeMonthBack);
  document
    .getElementById("arrow-forward")
    .addEventListener("click", changeMonthForward);
}

/** Renders calendar with correct data for current state*/
function renderCalendar() {
  renderCells();
  renderHeader();

  /** Renders calendar header with correct data for current st*/
  function renderHeader() {
    let todaysDate = calendar.date.getUTCDate();
    document.getElementById("calendarHeader").innerText =
      months[calendar.month] + " " + +calendar.year;
    document.querySelector(".today-text").innerHTML =
      weekdays[new Date().getDay()] + " " + calendar.today;
  }

  /** Renders calendar cells with correct data for current state */
  function renderCells() {
    let dateCells = document.querySelectorAll("div.date-cells");
    let daysInMonth =
      32 - new Date(calendar.year, calendar.month, 32).getDate();
    let firstDayIndex = calendar.date.getDay();
    let lastDayIndex = new Date(
      calendar.date.getFullYear(),
      calendar.date.getMonth() + 1,
      0
    ).getDay();
    let previousLastDay = new Date(
      calendar.date.getFullYear(),
      calendar.date.getMonth(),
      0
    ).getDate();
    let nextFirstDay = 7 - lastDayIndex - 1;

    /** Clears each cell of data*/
    for (let cell of dateCells) {
      cell.innerHTML = "";
      cell.classList.remove("other-month");
      cell.classList.remove("today");
    }

    /** Fill cells with correct date number and adds color to todays date and add badge for todos*/
    let weekday = calendar.date.getDay() - 1;
    if (weekday === -1) weekday = 6;

    for (let i = weekday; i < daysInMonth + weekday; i++) {
      const day = i - weekday + 1;
      const loopDate = new Date(calendar.year, calendar.month, day);

      /** Adds date number to cell */
      dateCells[i].textContent = day;

      /** Adds styling for todays date cell */
      let todaysDate = new Date();
      if (isSameDay(loopDate, todaysDate)) {
        dateCells[i].classList.add("today");
      }

      /** Checks to see if dates match */
      todosCount = 0;
      for (const todo of todos) {
        const todoDate = new Date(todo.date);
        if (isSameDay(loopDate, todoDate)) {
          showDaysTodo;
          todosCount++;
        }
      }
      
    /** if number of todo for a day is bigger than 0, create a badge with correct data of number of todos */
      if (todosCount > 0) {
        todoBadge = document.createElement("span");
        todoBadge.classList.add("todo-badge");
        todoBadge.textContent = "Att göra: " + todosCount;
        dateCells[i].append(todoBadge);
        dateCells[i].append(todoBadge);
        todoBadge.addEventListener("click", showDaysTodo);
      }

      /** Filter todos with same date to new array */
      let todoDate;
      function showDaysTodo() {
        for (let todo of todos) {
          todoDate = new Date(todo.date);
        }
        const day = i - weekday + 1;
        const loopDate = new Date(calendar.year, calendar.month, day);
        let dailyTodoArray = todos.filter((todo) =>
          isSameDay(new Date(todo.date), loopDate)
        );
        renderDailyTodos(dailyTodoArray);
      }

      /** Creates new list-elements in todo-section with data from chosen day */
      function renderDailyTodos(array) {
        const ul = document.querySelector("ul");
        ul.innerHTML = "";
        for (const todo of array) {
          const li = createLi(todo);
          ul.appendChild(li);
        }
      }
    }
    /** renders visible last days of previous month */
    for (firstDayIndex -= 2; firstDayIndex >= 0; firstDayIndex--) {
      dateCells[firstDayIndex].innerHTML = previousLastDay;
      previousLastDay--;
      dateCells[firstDayIndex].classList.add("other-month");
    }
  }
}
/**
 * Checks if two dates matches
 * @param {number} date1
 * @param {number} date2
 */
function isSameDay(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

async function renderCalendarHolidays() {
  await getSwedishHolidays(calendar.year, calendar.month);
}

let dateCells = document.querySelectorAll("div.date-cells");
let firstDayIndex = calendar.date.getDay();

/**
 * fetches api with swedish holidays based on current month in calendar. 
 */
async function getSwedishHolidays(year,month) {
  
  const response = await fetch(`https://sholiday.faboul.se/dagar/v2.1/${year}/${month + 1}`);
  const data = await response.json();
  const days = data.dagar;

  /** creates array and pushes holidays to the array */
  const holidays = [];
  for (let i = 0; i < days.length; i++) {
    if (days[i].helgdag) {
      holidays.push(days[i]);
    }
    /** Fills calendar cells with correct holiday data */
    for (let day of holidays) {
      let str = day.datum;
      let holidayName = day.helgdag;
      let splittedStr = str.split("-");
      let holidayDates = splittedStr[2];
      let holidayParagraph = document.createElement("p");
      holidayParagraph.classList.add("holiday-text");
      holidayParagraph.textContent = holidayName;

      /** If cell contains holidayname stop loop. If not, puts correct data in cell */
      for (let i = 0; i < 42; i++) {
        if (dateCells[i].innerHTML.includes(`${holidayName}`)) {
          break;
        } else if (dateCells[i].innerHTML.includes(`${holidayDates}`)) {
          dateCells[i].append(holidayParagraph);
        }
      }
    }
  }
  return holidays;
}

/** If month is changed forward update calendar object with correct data and renders calendar */
function changeMonthForward() {
  if (calendar.month === 11) {
    calendar.month = 0;
    calendar.year++;
  } else {
    calendar.month++;
  }
  calendar.date = new Date(calendar.year, calendar.month, 1);
  renderCalendar();
  renderCalendarHolidays();
}
/** If month is changed backwards update calendar object with correct data and renders calendar */
function changeMonthBack() {
  if (calendar.month === 0) {
    calendar.month = 11;
    calendar.year--;
  } else {
    calendar.month--;
  }
  calendar.date = new Date(calendar.year, calendar.month, 1);
  renderCalendar();
  renderCalendarHolidays();
}

