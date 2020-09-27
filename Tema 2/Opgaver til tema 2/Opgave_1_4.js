/*
Opgave 1.4
Lav et program som viser "Den lille tabel" (altså tallene fra 1 til 10 ganget med hinanden).

inspiration: https://code.sololearn.com/Wts7GD6e7wKZ/#html
*/
function createTable() {

    var table = document.getElementById("multiTable");

    //Add 10 rows
    for (var i = 1; i < 11; i++) {
        var row = document.createElement("tr");

        //For each row, add 10 columns
        for (var j = 1; j < 11; j++) {
            var col = document.createElement("td");
            col.innerHTML = i * j;
            row.appendChild(col);
        }
        table.appendChild(row);
    }
}