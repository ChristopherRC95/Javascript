/*
Lav et Hang-man spil. Computeren skal tænke på et ord, som brugeren skal prøve at gætte.

Hver gang brugeren indtaster et bogstav, skal det vises, hvor i ordet, bogstavet findes.
*/

//GLOBAL VARIABLES
var list = ["smile", "hello", "world", "fun", "programming", "javascript"]
var computerWord = list[Math.floor(Math.random() * (list.length+1))].toLocaleUpperCase();

var charList = new Array();
var indexList = new Array();

function initiateWord() {
    //Adds label siblings to the parent element with id wordGuessId
    //Each sibling is a character in the computerWord
    var parent = document.querySelector("#wordGuessId");
    var newElement;

    for (var i = 0; i < computerWord.length; i++) {
        newElement = document.createElement("label");
        newElement.textContent = '?';
        newElement.id = i+"LabelId";
        newElement.classList.add("label")
        parent.appendChild(newElement);
    }
}

function victory(guessCharLenght, computerWordLenght) {
    /* 
     * When all "?" has been replaced with a character, 
     * the lenght of the computerWord is equal to the guessed characters
     * which means the word has been guessed.
     */
    if (guessCharLenght == computerWordLenght) {
        alert("You solved the mystery! Congratulations");
    }
}

function wordContainer() {
    //Used to add characters already used to the element of id containerId
    var result = document.getElementById("containerId").innerHTML;
    result += charList[charList.length-1] + ", "
    document.getElementById("containerId").innerHTML = result;
}

function charGuess() {
    //The logic for handling character guesses
    
    var char = prompt("Insert character: ").toLocaleUpperCase();

    if (char.length > 1) {
        alert("You are typing more than one character");
        return;
    }

    /*
      Checks if character already has been guessed.
      If exist then return (leave function)
    */
    charList.forEach(x => {
            if (x == char) {
                alert("You have already used: " + char);
                return;
            };
        }
    )

    /*
      If the code has made it this far, the character has not been used before 
      It will therefore be added to the indexList, which contains all the correct characters
      And the "?" will be replaced by the char
    */ 
     
    charList.push(char);
    wordContainer();

    for (var i = 0; i < computerWord.length; i++) {
        if (computerWord[i] == char) {
            indexList.push(i);
            document.getElementById(i + "LabelId").innerHTML = char;
        }
    }

    victory(indexList.length, computerWord.length)
}

function wordGuess() {
    //Logic handler for word guesses

    var word = prompt("Insert word: ").toLocaleUpperCase();

    if (word==computerWord) {
        for (var i = 0; i < computerWord.length; i++) {
            document.getElementById(i + "LabelId").innerHTML = word[i];
        }

        victory(word.length, computerWord.length);

    } else {
        alert("No, " + word + " is not the right word!");
    }
}