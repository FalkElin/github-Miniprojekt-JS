let calendarState = {
  today: new Date(),
  currentMonth: today.getMonth(),
  currentYear: today.getFullYear(),
  selectYear: null,
  selectMonth: null,
  month: null,
  monthAndYear: null,
};
function startCalendar() {
  calendarState.selectYear = document.getElementById("year");
  calendarState.selectMonth = document.getElementById("month");
  calendarState.monthAndYear = document.querySelector(".monthAndYear");
  createCalendar();
}
console.log(today);
let allMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Maj",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dec",
];
let calendarCells = [];

createCalendar(currentMonth, currentYear);

// condition ? if true = expression1 : if false = expression2
function next() {
  if (currentMonth === 11) {
    currentYear = currentYear + 1;
    currentYear--;
  } else {
    currentYear;
  }

  currentMonth = (currentMonth + 1) % 12;
  createCalendar(currentMonth, currentYear);
}

function previous() {
  /**If nuvarande måndag = januari[0] */
  if (currentMonth === 0) {
    currentYear--;
  } else {
    currentYear;
  }
  if (currentMonth === 0) {
    currentMonth = 11;
  } else {
    currentMonth--;
  }
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  createCalendar(currentMonth, currentYear);
}

function createCalendar(month, year) {
  console.log(year);
  /** Sätter första dagen på månaden.*/
  let firstDayOfMonth = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let table = document.getElementById("tableBody");

  /** tömmer alla tidigare celler */
  table.innerHTML = " ";

  monthAndYear.innerHTML = allMonths[today.getMonth()] + " " + currentYear;
  selectYear.value = year;
  selectMonth.value = month;

  /** Får antal dagar i månad x genom att addera 32 till första dagen för att sedan subtrahera datumet man landar på. */
  // let fullMonthDays = 32 - new Date(year, month, 32).getDate();
  //   function fullMonthDays(iMonth, iYear) {
  //     return 32 - newDate(iYear, iMonth, 32).getDate();
  //   }
  let date = 1;
  for (let i = 0; i < 6; i++) {
    /**Skapar en table row */
    let row = document.createElement("tr");

    /**Skapar nya celler och lägger in rätt data */
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        cell = document.createElement("td");
        cellText = document.createTextNode(date);
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
      // Kan lägga in att highlightea dagens datum
    }
    table.appendChild(row);
  }
}
