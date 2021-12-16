window.onload = main();

function main() {
  addCalendarEventlisteners();
}

let calendar = {
  date: new Date(),
  month: null,
  year: null,
  today: null,
};

calendar.month = calendar.date.getMonth();
calendar.year = calendar.date.getFullYear();
calendar.today = calendar.date.getDay();
let todaysDate = calendar.date.getUTCDate();

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

const weekdays = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Tordag",
  "Fredag",
  "Lördag",
];

function addCalendarEventlisteners() {
  document
    .getElementById("arrow-back")
    .addEventListener("click", changeMonthBack);

  document
    .getElementById("arrow-forward")
    .addEventListener("click", changeMonthForward);
}

renderCalendar();

function renderCalendar() {
  renderCells();
  renderHeader();
  console.log(calendar.date.getDate());

  /**-----Header---- */
  function renderHeader() {
    document.getElementById("calendarHeader").innerText =
      months[calendar.month] + " " + +calendar.year;
    document.querySelector(".today-text").innerHTML =
      weekdays[calendar.today] + " " + todaysDate;
  }

  /**------Calendar body------- */
  function renderCells() {
    let dateCells = document.querySelectorAll("div.date-cells");
    let daysInMonth =
      32 - new Date(calendar.year, calendar.month, 32).getDate();

    /** Clears each cell of text */
    for (let cell of dateCells) {
      cell.innerHTML = "";
    }

    /** Fill cells with correct date number and adds color to todays date*/
    for (let i = 1; i <= daysInMonth; i++) {
      dateCells[i].innerHTML = i;

      if (dateCells[i].innerHTML == todaysDate) {
        dateCells[i].classList.add("today");
      }
    }
  }
}
function changeMonthBack() {
  if (calendar.month === 0) {
    calendar.month = 11;
    calendar.year--;
    renderCalendar();
  } else {
    calendar.month--;
    renderCalendar();
  }
}
function changeMonthForward() {
  if (calendar.month === 11) {
    calendar.month = 0;
    calendar.year++;
    renderCalendar();
  } else {
    calendar.month++;
    renderCalendar();
  }
}

// decembers nr 1 i kalendern === decembers 1a datum.
//

// Loopa igenom alla datum. När datum matchar calendar.today sätt klassen .today

// för varje datecell skapa nytt P element
// I varje P element ska siffran stiga med ett
//
/** Får antal dagar i månad x genom att addera 32 till första dagen för att sedan subtrahera datumet man landar på. */
