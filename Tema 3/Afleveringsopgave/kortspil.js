/*
	13 Cards of same color.
	The hierarchy of the cards are the same for each color, thus
	below object with properties from 0-12, each containing the card value, are created.
*/
var CardHierarchy = {
	1: 'Es',
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	11: 'Knægt',
	12: 'Dame',
	0: 'Konge'
};

function DetermineColor(number) {
	
	var color;

	if (number < 14) {
		color = 'Hjerter';
	} else if (number > 13 && number < 27) {
		color = 'Spar';
	} else if (number > 26 && number < 40) {
		color = 'Ruder';
	} else {
		color = 'Klør';
	}

	return color;
}

function DetermineValue(number) {
	//Method used to determine the value of the card based upon the modulus operator.
	return CardHierarchy[(number % 13)];
}

function getCard() {
	var number = document.getElementById("cardId").value;

	//Input validation to ensure the script works as intended.
	if (number > 0 && number < 53) {
		var color = DetermineColor(number);
		var value = DetermineValue(number);
		document.getElementById("resultId").innerHTML = color + " " + value;
	} else {
		document.getElementById("resultId").innerHTML = "The selected number is not valid";
	}
}