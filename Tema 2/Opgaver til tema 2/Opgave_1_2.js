/*
Opgave 1.2
Lav et program, som omregner mellem Celcius og Fahrenheit. 
*/

function converter() {
    var type = document.getElementById("types").value;
    var temp = document.getElementById("temp").value;
    type == 'Fahrenheit'
        ? alert("The temperature is " + ((temp - 32) * 5/9) + " Celcius")
        : alert("The temperature is " + ((temp * 9 / 5) + 32) + " Fahrenheit");
}