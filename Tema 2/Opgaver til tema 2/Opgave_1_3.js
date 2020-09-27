/*
Opgave 1.3
Lav et program, som sl�r med en terning. Programmet skal udskrive det antal �jne terningen viser.

N�r det virker, s� f� programmet til at blive ved med at sl�, indtil det sl�er en sekser.
*/

var id;
var counter;

function dice() {
    /*
    execute rollDice every 1.5 sec
    declared and initialized 'id' to stop the interval when rollDice equals 6
    */
    id = setInterval(rollDice, 1500);
    counter = 0;
    document.getElementById("diceValue").innerHTML = ""
}

function rollDice() {
    /*
    Math.Random returns a value between 0-1.
    To increase the interval to 0-6, Math.Random is multiplied by 6
    */

    var value = Math.floor(Math.random() * 6) + 1;
    counter += 1;

    document.getElementById("diceValue").innerHTML = value;

    if (value == 6) {
        clearInterval(id);
        document.getElementById("diceValue").innerHTML = "You rolled 6 after " + counter + " tries";
    }
}