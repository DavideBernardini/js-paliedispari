// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// creo una funzione che genera un numero random entro un range di numeri
function randomNumber(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1) + num1);
}

// creo una funzione che determina se un numero è pari
function isEven(num) {
    if ( num % 2 == 0 ) {
        return true;
    } 
    return false;
}

// chiedo all'utente di scegliere tra pari o dispari(ai quali assegno un valore vero o falso) 
var evenOrOddChoice = prompt("Inserisci pari o dispari.").toLocaleLowerCase();

while ( evenOrOddChoice != "pari" && evenOrOddChoice != "dispari" ) {
    evenOrOddChoice = prompt("Puoi solo inserire pari o dispari.").toLocaleLowerCase();
}

if ( evenOrOddChoice = "pari" ) {
    evenOrOddChoice = true;
} else {
    evenOrOddChoice = false;
}

// chiedo di inserire un numero da 1 a 5
var numberByUser = prompt("Inserisci un numero da 1 a 5.");

while ( numberByUser < 1 || numberByUser > 5 || isNaN(numberByUser)) {
    numberByUser = prompt("Devi inserire un numero da 1 a 5!");
}

// genero un numero random con la funzione precedente
var cpuNumber = randomNumber(1, 5);

// sommo i numeri
var sum = numberByUser + cpuNumber;

// comunico all'utente se ha vinto o perso
if ( isEven(sum) == evenOrOddChoice ) {
    alert("Hai vinto.")
} else {
    alert("Hai perso.")
}