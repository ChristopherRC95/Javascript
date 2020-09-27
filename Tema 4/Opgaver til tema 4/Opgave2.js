/*
    Lav en pinkode-husker. Du kan gøre opgaven mere eller mindre avanceret:

    Simpel:

    Lav pinkodhuskeren, så den består af 8 kolonner og 5 rækker med 1 ciffer i hver celle. Sørg for, at der er lige mange af hvert ciffer.

    Mindre simpel:

    Lad brugeren angive de fire cifre i hans pinkode. Placer dem i de fire celler i øverste venstre hjørne, og sørg for at der fortsat er lige mange af hvert ciffer.

    Lidt kompliceret:

    Vis pinkodehuskeren som HTML - gerne med farver

    Rimelig kompliceret

    Lad brugeren indtaste sin pinkode på websiden. Det skal være muligt at indtaste i ethvert af de 40 forskellige felter.
*/

function createTable() {
    var table = document.querySelector("#pinCodePuzzleId");
    
    for (var row = 0; row < 5; row++) {
        var newRow = document.createElement("tr");
        
        for (var col = 0; col < 8; col++) {
            var newCol = document.createElement("td");
            var input = document.createElement("input");
            input.type = "text";
            input.onblur = inputChecker;
            //input.onchange = inputChecker;
            input.value = "X";
            input.id = 'table' + row + col + 'Id';
            input.style.backgroundColor = colorRandomizer();

            newCol.appendChild(input);
            newRow.appendChild(newCol);
        }

        table.appendChild(newRow);
    }
}

function colorRandomizer() {
    var colorList = ['red', 'green', 'yellow', 'blue', 'orange'];
    var randomNumber = Math.floor(Math.random() * colorList.length);
    return colorList[randomNumber];
}

//On any element in the html body which is gotten out of focus (etc. has written a number and seleced a new box)
//the listener function (x) is executed. This checks if the out of focus element has a input value lenght above 1.

function inputChecker() {
    if (this.value.length > 1) {
        alert("Only 1 character per box");
        this.value = "X";
    }
}
//document.body.addEventListener('focusout',function (x) {
//    input = document.getElementById(x.target.id);
//    if (input.value.length > 1) {
//        alert("Only 1 character per box");
//        document.getElementById(input.id).value = "X";
//    }
//})