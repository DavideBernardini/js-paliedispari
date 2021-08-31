// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// creo una funzione per controllare che una parola sia palindroma o meno
function isPalindrom(word) {
    var reverseWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    if ( word == reverseWord) {
        return true;
    }
    return false;
}

// chiedo all'utente di inserire una parola valida
var wordChoice = prompt("Inserisci una parola.");

while (!isNaN(wordChoice)) {
    wordChoice = prompt("Inserisci una parola, non un numero!");
}

while (wordChoice.length < 3) {
    wordChoice = prompt("Inserisci una parola di almeno tre lettere!");
}

// comunico all'utente se la parola scelta è palindroma o meno
if ( isPalindrom(wordChoice) == true) {
    alert("La parola che hai inserito è palindroma!")
} else {
    alert("La parola che hai inserito non è palindroma.")
}