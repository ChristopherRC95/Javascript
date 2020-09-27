/*
Opgave 1.1
Lav et program som omregner mellem danske kroner og Euro. Antag at kursen altid er 7.45
*/

function dkkToEur() {
    var rate = 7.45;
    var dkk = document.getElementById("numberInput").value;
    alert(dkk * rate);
}