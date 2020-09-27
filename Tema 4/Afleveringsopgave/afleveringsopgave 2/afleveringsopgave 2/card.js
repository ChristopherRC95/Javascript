/*
//Kortspilsopgave
//1-13 er Hjerter
//14-26 er Spar
//27-39 er Ruder
//40-52 er Klør
*/
  
function KortSpillet() {
    var cardAsString = document.getElementById(1).value;
    var card = parseInt(cardAsString);

    var colour = "";
    var value = "";
   	var error = "";

    const result = document.querySelector("#result");

    if(card >= 1 && card <= 13) {
        colour = "Hjerter";
        value = getCardValue(card);
    }
    else if(card >=14 && card <= 26) {
        colour = "Spar";
        value = getCardValue(card - 13);
    }
    else if(card >=27 && card <=39) {
        colour = "Roder";
        value = getCardValue(card - 26);
    }
    else if(card >=40 && card <=52) {
        colour = "Klør";
        value = getCardValue(card - 39);
    }
    else {
    	error = "Indsæt et tal mellem 1 og 52";
    }

    result.textContent = error + colour + " " + value;
}

function getCardValue(cardNumber) {
	switch (cardNumber){
    case 1:
        return "Es";
    case 2:
        return "2";
    case 3:
        return "3";
    case 4:
        return "4";
    case 5:
        return "5";
    case 6:
        return "6";
    case 7:
        return "7";
    case 8:
        return "8";
    case 9:
        return "9";
    case 10:
        return "10";
    case 11:
        return "Knægt";
    case 12:
        return "Dronning";
	case 13:
		return "Konge";
	}
}