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
let dateCells = document.querySelectorAll('div.date-cells');




for (let i = 1; i <= 31; i++) {
    dateCells[i].innerHTML= i;

}

/**------Calendar body------- */

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
}