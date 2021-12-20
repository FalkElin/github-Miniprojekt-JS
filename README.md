# Miniprojekt-JS

1. Skapa layouten enligt skiss (dölj kalender på mobilvy) - (G)

2. Skapa och designa titeln för verktyget - (G)

7. Skapade todos skall kopplas till kalender och visas med en siffra som representeras antal todos på en viss dag. - (G)

8. Filtrera todolistan utifrån vald dag i kalendern, det ska gå avmarkera vald dag (VG)

TANKAR ATT HA MED SIG:
För att få till ett bra flöde är det bäst att anropa alla funktioner från main()

Skapar en funktion i varje separat fil som heter typ initTodos() där allt som är relevant för den sidan startas upp.

function main() {
initCalendar();
initTodos();
}

ex:
function initCalendar() {
// skapar calendern
//hämtar helgdagar från API

}

function todos() {
//ställer in knappar
}

ha todos i en array
en todo är ett objekt med ex title, date,

Vilken typ av data jobbar vi med? todos, ordrar, recept osv

Annat alternativ är att ha days i en array
varje dag får ett indexvärde
pusha in todos på indexplats = rätt dag

annat sätt är att i objektet days så är nyckelorden själva datumen

const days = {
'2021-12-24': "Fira Jul",
}

Finns en array funktion som heter .filter = Filter
