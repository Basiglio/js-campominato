// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var arrayBombs = [];
var maxAttemps = 5;
var attemps = [];
var score = 0;


// GENERO BOMBE
while (arrayBombs.length < 16) {
	// GENERO NUMERO CASUALE
	var randomNumber = randomIntegerBetween(1, 100);
	// CONTROLLO SE IL NUMERO è GIA NELL'ARRAY
	var check = isInArray(arrayBombs, randomNumber);

	// SE NON C'è PUSHA NELL'ARRAY E RIPARTE IL CICLO
	if (check == false) {
		arrayBombs.push(randomNumber);
	}
	// SE C'è RIPARTE IL CICLO
}
console.log(arrayBombs);


// SET UP GIOCO

while (attemps.length < maxAttemps) {
	// CHIEDO PRIMO NUMERO TRAMITE PROMPT
	var userNumber = parseInt(prompt("inserisci un numero compreso tra 1 e 100"))
	// CERCO SE IL NUMERO è GIA PRESENTE NELL'ARRAY DEI NUMERI UTENTE
	var check2 = isInArray(attemps, userNumber);


	if (check2 == false) {
		attemps.push(userNumber);
	}
}
console.log(attemps);










//------------------------------------------------------------------------

// FUNZIONE PER CREARE UN NUMERO CASUALE
function randomIntegerBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNZIONE PER CERCARE IN UN ARRAY
function isInArray(array, element) {
	var result = false;
	for (var i = 0; i < array.length; i++) {
		if (element == array[i]) {
			result = true;
			return result;
		}
	}
	return result;
}
