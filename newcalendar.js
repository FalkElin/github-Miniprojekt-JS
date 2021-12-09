window.onload = main();

function main() {
    addCalendarEventlisteners();
    renderCalendar();
}
function addCalendarEventlisteners() {

}

let calendar = {
    date: new Date(),
    cells: null,
    month: null,
    year: null,
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
