window.onload = main;

let calendar = {
  date: new Date(),
  month: null,
  year: null,
  today: null,
};

function main() {
  addCalendarEventlisteners();

  calendar.month = calendar.date.getMonth();
  calendar.year = calendar.date.getFullYear();
  calendar.today = calendar.date.getUTCDate();
  calendar.date.setDate(1);
  renderCalendar();
  renderCalendarHolidays();
}

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

function renderCalendar() {
  renderCells();
  renderHeader();

  /**-----Header---- */
  function renderHeader() {
    let todaysDate = calendar.date.getUTCDate();
    document.getElementById("calendarHeader").innerText =
      months[calendar.month] + " " + +calendar.year;
    document.querySelector(".today-text").innerHTML =
      weekdays[new Date().getDay()] + " " + calendar.today;
  }

  /**------Calendar body------- */
  function renderCells() {
    let dateCells = document.querySelectorAll("div.date-cells");
    let daysInMonth = 32 - new Date(calendar.year, calendar.month, 32).getDate();
    let firstDayIndex = calendar.date.getDay();
    let lastDayIndex = new Date(calendar.date.getFullYear(),calendar.date.getMonth() + 1,0).getDay();
    let previousLastDay = new Date(calendar.date.getFullYear(),calendar.date.getMonth(),0).getDate();
    let nextFirstDay = 7 - lastDayIndex - 1;

    console.log(calendar);
    console.log(lastDayIndex);
    console.log(previousLastDay);
    console.log(firstDayIndex);
    console.log(nextFirstDay);
    console.log(daysInMonth);

    /** Clears each cell of data*/
    for (let cell of dateCells) {
      cell.innerHTML = "";
      cell.classList.remove("other-month");
      cell.classList.remove("today");
    }

    /** Fill cells with correct date number and adds color to todays date*/
    const weekday = calendar.date.getDay();
    let i = weekday;
    if (i > 0) {
      for (let i = weekday; i < daysInMonth + weekday && i > 0; i++) {
        dateCells[i - 1].innerHTML = i - weekday + 1;
        console.log(daysInMonth);
      }
    } else {
      /** When first day of month is a sunday */
      for (j = 1; j < daysInMonth + weekday; j++) {
        for (let i = 6; i < daysInMonth + 6 && i >= 0; i++) {
          dateCells[i].innerHTML = j++;
        }
      }
    }

    for (let i = 1; i <= daysInMonth; i++) {
      let todaysDate = new Date();
      if (
        dateCells[i].innerHTML == calendar.today &&
        calendar.month == todaysDate.getMonth() &&
        calendar.year == todaysDate.getFullYear()
      ) {
        dateCells[i].classList.add("today");
      } else {
        // dateCells[i].classList.remove('today');
      }
    }

    /** renders visible last days of previous month */
    for (firstDayIndex -= 2; firstDayIndex >= 0; firstDayIndex--) {
      dateCells[firstDayIndex].innerHTML = previousLastDay;
      previousLastDay--;
      dateCells[firstDayIndex].classList.add("other-month");
    }
    /** renders visible days of next coming month */
    // for (let i = 1; i <= 7; i++) {
    //   console.log(daysInMonth + 1);
    //   dateCells[daysInMonth + i + 1].innerHTML = i;
    //   dateCells[daysInMonth + i + 1].classList.add("other-month");
    // }
  }
}


async function renderCalendarHolidays() {
  console.log(await getSwedishHolidays(calendar.year, calendar.month));
}

let dateCells = document.querySelectorAll("div.date-cells");
let firstDayIndex = calendar.date.getDay();

  async function getSwedishHolidays(year, month) {
    const response = await fetch(
      `https://sholiday.faboul.se/dagar/v2.1/${year}/${month + 1}`
    );
    const data = await response.json();
    const days = data.dagar;

    const holidays = [];
    for (let i = 0; i < days.length; i++) {
      if (days[i].helgdag) {
        holidays.push(days[i]);
      }
    }
    for (let day of holidays) {
      let str = day.datum;
      let holidayName = day.helgdag;
      let splittedStr = str.split('-');
      let holidayDates = splittedStr[2];
      let holidayParagraph = document.createElement('p');
      holidayParagraph.innerHTML = holidayName;

      for (let i=0;i < 42; i++) {
        
        if (holidayDates == dateCells[i].innerHTML) {
          let holidayCells = dateCells[i];
          holidayCells.appendChild(holidayParagraph);
        }
      }
    }
    return holidays;
}
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


// decembers nr 1 i kalendern === decembers 1a datum.
//

// Loopa igenom alla datum. När datum matchar calendar.today sätt klassen .today

// för varje datecell skapa nytt P element
// I varje P element ska siffran stiga med ett
//
/** Får antal dagar i månad x genom att addera 32 till första dagen för att sedan subtrahera datumet man landar på. */

//.1 firstdayindex - 1 = startplats för lastdayofpreviousmonth
//2.få lastdaypfprevmonth att räkna baklänges så långt divvarna räcker.

// dateCells[i + firstDayIndex - 2].innerHTML = i;
//
//prevmonth; prevmonth--;
//dateCells[firstDayIndex - 3].innerHTML = prevmonth;

// if (days.helgdag = true)

// API:
// hämta ut antalet helgdagar i aktuell månad
// Översätta värdet av helgdagskey från string till number med .getDate()
// Matcha ihop helgdagsdatum med kalenderns datum
///
// For each objekt in holidays loop logga ut datums värde.
//`<p>${helgdagsnamnet}</p>`
