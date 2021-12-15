window.onload = main();

function main() {
    addCalendarEventlisteners();
}

let calendar = {
    date: new Date(),
    month: null,
    year: null,
    today: null
}
// let monthInfo = {
//         dateCells: document.querySelectorAll('div.date-cells'),
//         daysInMonth: 32 - new Date(calendar.year, calendar.month, 32).getDate(),
//         firstDayIndex: calendar.date.getDay(),
//         lastDayIndex: new Date(calendar.date.getFullYear(), calendar.date.getMonth() + 1, 0).getDay(),
//         previousLastDay: new Date(calendar.date.getFullYear(), calendar.date.getMonth(), 0).getDate(),
//         nextFirstDay: 7 - 1
// }

calendar.month = calendar.date.getMonth();
calendar.year = calendar.date.getFullYear();
calendar.today = calendar.date.getDay();
let todaysDate = calendar.date.getUTCDate()

calendar.date.setDate(1);
console.log(calendar.month);
console.log(new Date());

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
      'Söndag',
      'Måndag',
      'Tisdag',
      'Onsdag',
      'Tordag',
      'Fredag',
      'Lördag'
  ]

function addCalendarEventlisteners() {
    document.getElementById('arrow-back').addEventListener('click', changeMonthBack);
    document.getElementById('arrow-forward').addEventListener('click', changeMonthForward);
}

renderCalendar();

function renderCalendar() {
    renderCells();
    renderHeader();
    console.log(calendar.date.getDate());
   

    /**-----Header---- */
    function renderHeader() {
        document.getElementById('calendarHeader').innerText = months[calendar.month] + " " +  + calendar.year;
        document.querySelector('.today-text').innerHTML = weekdays[calendar.today] + " " + todaysDate;
    }

    /**------Calendar body------- */
    function renderCells() {
        let dateCells = document.querySelectorAll('div.date-cells');
        let daysInMonth = 32 - new Date(calendar.year, calendar.month, 32).getDate();
        let firstDayIndex = calendar.date.getDay();
        let lastDayIndex = new Date(calendar.date.getFullYear(), calendar.date.getMonth() + 1, 0).getDay();
        let previousLastDay = new Date(calendar.date.getFullYear(), calendar.date.getMonth(), 0).getDate();
        let nextFirstDay = 7 - lastDayIndex - 1;
        console.log(lastDayIndex);

        
        console.log(lastDayIndex);
        console.log(previousLastDay);
        console.log(firstDayIndex);
        console.log(nextFirstDay);
        console.log(daysInMonth);

        /** Clears each cell of text */
        for (let cell of dateCells) {
            cell.innerHTML = '';
        }

         /** Fill cells with correct date number and adds color to todays date*/
        for (let i = 1; i <= daysInMonth; i++) {
            dateCells[i + firstDayIndex - 2].innerHTML= i;

            if (dateCells[i].innerHTML == todaysDate) {
                dateCells[i].classList.add('today');
            }
        }
    
        /** renders visible last days of previous month */
        for (firstDayIndex -= 2; firstDayIndex >= 0; firstDayIndex--) {
            dateCells[firstDayIndex].innerHTML = previousLastDay;
            previousLastDay--;
            dateCells[firstDayIndex].classList.add('other-month');
        }
        /** renders visible days of next coming month */
        for (let i = 1; i <= 7; i++) {
            console.log(daysInMonth + 1);
            dateCells[daysInMonth + i + 1].innerHTML = i;
            dateCells[daysInMonth + i + 1].classList.add('other-month');
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
    //    console.log(monthInfo.firstDayIndex = monthInfo.lastDayIndex +1);
    //     console.log(monthInfo.firstDayIndex);
        renderCalendar();
    } else {
        calendar.month++;
        // firstDayIndex = lastDayIndex + 1;
        // console.log(firstDayIndex);
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



//.1 firstdayindex - 1 = startplats för lastdayofpreviousmonth
//2.få lastdaypfprevmonth att räkna baklänges så långt divvarna räcker.

// dateCells[i + firstDayIndex - 2].innerHTML = i;
//
//prevmonth; prevmonth--;
//dateCells[firstDayIndex - 3].innerHTML = prevmonth;

// 