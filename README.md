# Miniprojekt-JS

Verktyget

Det ni skall skapa är ett verktyg för att lägga till och ta bort todos.
Dessa todos skall visas i en lista till vänster i det grafiska gränssnittet.
Till höger skall det finnas en kalender som är länkad till de todos som har skapats.
Men andra ord ska todos kunna vara kopplade till en viss dag och visas i kalendern
med en siffra som representerar hur många todos som ska göras den dagen.
Ni får själva ta fram en egen grafisk profil för verktyget.

1. Skapa layouten enligt skiss (dölj kalender på mobilvy) - (G)
2. Skapa och designa titeln för verktyget - (G)
3. Skapa och designa välkomstsegmentet (delen ovanför todo-listan). Segmentet skall minst innehålla tid, veckodag och datum. - (G)
4. Användaren skall kunna lägga till en todo - (G)
5. Användaren skall kunna ta bort en todo - (G)
6. Skapa och designa kalendervyn med en månadsvy över aktuell månad - (G)
7. Skapade todos skall kopplas till kalender och visas med en siffra som representeras antal todos på en viss dag. - (G)
8. Spara todos i local storage och visa dessa vid omladdning av sidan - (VG)
9. Användaren skall kunna ändra en todo - (VG) 10. Användaren skall kunna växa till andra månader i kalendervyn - (VG)
10. Svenska helgdagar visas i kalendern - (VG)
11. Filtrera todolistan utifrån vald dag i kalendern, det ska gå avmarkera vald dag (VG)


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

Finns en array funktion som heter .filter =  Filter 