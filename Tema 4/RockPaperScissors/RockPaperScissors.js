
var paperButton = document.querySelector("#paperId"); 
var scissorButton = document.querySelector("#scissorId");
var rockButton = document.querySelector("#rockId");
var result;
var wins = 0;
var games = 0;
var ratio = 0;

function play() {
    var dict = { 0: "Rock", 1: "Paper", 2: "Scissor" }
    var computerNumber = Math.floor(Math.random() * 3);
    var computer = dict[computerNumber];
    var human = dict[document.activeElement.value];

    document.querySelector("#computerId").innerHTML = computer;

    if (   (human == "Rock" && computer == "Paper")
        || (human == "Paper" && computer == "Scissor")
        || (human == "Scissor" && computer == "Rock")) {
        result = 0;
        
    } else if (human == computer){
        result = 1;
    } else {
        result = 2;
    }

    setTimeout(alertToPlayer, 1000)
    
}

function alertToPlayer() {
    games++;

    if (result == 0) { alert("Computer wins! Bad luck!");}
    if (result == 1) { alert("That is a draw!");}

    if (result == 2) {
        alert("You WON! One more time?");
        wins++;
    }
    document.activeElement.blur()
    document.querySelector("#computerId").innerHTML = "COMPUTER";

    winUpdater();
}

function winUpdater() {
    document.querySelector("#winId").innerHTML = "Number of Wins: " + wins
    document.querySelector("#ratioId").innerHTML = "Win Ratio: " + wins/games
}

rockButton.addEventListener("click", play, false);
paperButton.addEventListener("click", play, false);
scissorButton.addEventListener("click", play, false);



