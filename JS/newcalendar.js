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
}
calendar.month = calendar.date.getMonth();
console.log(calendar.month);
calendar.year = calendar.date.getFullYear();

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
      'Mån',
      'Tis',
      'Ons',
      'Tor',
      'Fre',
      'Lör',
      'Sön'
  ]

renderCalendar();

function renderCalendar() {

    /**-----Header---- */
    
document.getElementById('calendarHeader').innerText = months[calendar.month];
document.querySelector('.today-text').innerHTML 
= calendar.date.toLocaleDateString('sv-SE');


/**------Calendar body------- */

/** Får antal dagar i månad x genom att subtrahera 32 till första dagen för att sedan subtrahera datumet man landar på. */
// let lastDay = 32 - new Date(calendar.month, calendar.year).getDate();
// console.log(fullMonthDays);

let dateCells = document.querySelectorAll('div.date-cells');

for (let i = 1; i <= 31; i++) {
    dateCells[i].innerHTML= i;

}


//     let days = '';
//     // dateCells.innerHTML = 'datecells hittas en gång';
//     console.log(dateCells);
//     for (let i = 1; i <= 31; i++) {
//         days += `<p>${i}</p>`;
//         dateCells.innerHTML = days;
//         console.log(dateCells);
//     }
// }

// för varje datecell skapa nytt P element
// I varje P element ska siffran stiga med ett 
//
/** Får antal dagar i månad x genom att addera 32 till första dagen för att sedan subtrahera datumet man landar på. */
  // let fullMonthDays = 32 - new Date(year, month, 32).getDate();
}