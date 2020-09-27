/*
Opgave 1.5
Lav et program, som udskriver tallene fra 1 - 20. 
Efter hvert tal skal der enten skrives Lige eller Ulige 
alt efter om tallet er lige eller ej
*/
function printer() {
    var table = document.getElementById("table");
    table.style.border = "1px solid black";
    table.style.textAlign = "center";
    table.style.padding = "5px"
    table.style.width = "20%"

    //Add rows to the table (1 header and 20 rows)
    for (var i = 0; i < 21; i++) {
        var row = document.createElement("tr");

        //Add two columns to each row
        for (var j = 0; j < 2; j++) {
            var col = document.createElement("td");
            var result;

            //If we are at the first row, add the table header
            if (i == 0) {
                var header = document.createElement("th");
                j == 0 ? result = "Number" : result = "Even Number";
                header.innerHTML = result;
                row.appendChild(header);
            }
            //If it's not the first row (header), then check number
            else {
                j == 0 ? result = i : result = evenNumberChecker(i);

                col.innerHTML = result;
                row.appendChild(col);
            }
        }
        //add the row with two columns to the table
        table.appendChild(row);
    }
}

function evenNumberChecker(number) {
    var result;

    //if the number mod 2 is different from 0 then it is not an even number;
    number % 2 == 0 ? result = true : result = false;
    return result;
}