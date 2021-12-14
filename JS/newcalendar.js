window.onload = main();

function main() {
    addCalendarEventlisteners();
    // renderCalendar();
}
function addCalendarEventlisteners() {
}

let calendar = {
    date: new Date(),
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
    renderCells();
    renderHeader();


    /**-----Header---- */
    function renderHeader() {
        document.getElementById('calendarHeader').innerText = months[calendar.month];
        document.querySelector('.today-text').innerHTML = weekdays[calendar.today] + " " + calendar.year;
    }

    


    /**------Calendar body------- */
    
    
    function renderCells() {
        let dateCells = document.querySelectorAll('div.date-cells');

        /** Clears each cell of text */
        for (let cell of dateCells) {
        cell.innerHTML = '';
        }
         /** Fill cells with correct date number */
        for (let i = 1; i <= 31; i++) {
        dateCells[i].innerHTML= i;
        }
         /** Adds background-color to todays date */
        i=1;
        if (dateCells[i].innerHTML == calendar.today) {
        dateCells[i].classList.add('today');
    }
    }
  

   

   

// decembers nr 1 i kalendern === decembers 1a datum. 
// 

// Loopa igenom alla datum. När datum matchar calendar.today sätt klassen .today 

// för varje datecell skapa nytt P element
// I varje P element ska siffran stiga med ett 
//
/** Får antal dagar i månad x genom att addera 32 till första dagen för att sedan subtrahera datumet man landar på. */



console.log(calendar.year);
console.log(calendar.month);

console.log(32 - new Date(calendar.year, calendar.month, 32).getDate());
}