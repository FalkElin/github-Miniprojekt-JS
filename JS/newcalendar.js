window.onload = main();

function main() {
    addCalendarEventlisteners();
    // renderCalendar();
}
function addCalendarEventlisteners() {
}

let calendar = {
    date: new Date(),
    cells: null,
    month: null,
    year: null,
    today: null
}
calendar.month = calendar.date.getMonth();
// console.log(calendar.month);
console.log(calendar.date.getDay());
calendar.year = calendar.date.getFullYear();
calendar.today = calendar.date.getDay();




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
      'Sön',
      'Mån',
      'Tis',
      'Ons',
      'Tor',
      'Fre',
      'Lör'
  ]

renderCalendar();
function renderCalendar() {

    /**-----Header---- */

    
document.getElementById('calendarHeader').innerText = months[calendar.month];
document.querySelector('.today-text').innerHTML = weekdays[calendar.today] + " " + calendar.year;


/**------Calendar body------- */

/** Får antal dagar i månad x genom att subtrahera 32 till första dagen för att sedan subtrahera datumet man landar på. */
// let lastDay = 32 - new Date(calendar.month, calendar.year).getDate();
// console.log(fullMonthDays);

let dateCells = document.querySelectorAll('div.date-cells');

for (let i = 1; i <= 31; i++) {
    dateCells[i].innerHTML= i;
}

i=1
if (dateCells[i].innerHTML == calendar.today) {
    dateCells[i].classList.add('today');
}
// för varje div ska få klassen som matchar dess nr? 
// Loopa igenom alla datum. När datum matchar calendar.today sätt klassen .today 

// för varje datecell skapa nytt P element
// I varje P element ska siffran stiga med ett 
//
/** Får antal dagar i månad x genom att addera 32 till första dagen för att sedan subtrahera datumet man landar på. */
  // let fullMonthDays = 32 - new Date(year, month, 32).getDate();
}