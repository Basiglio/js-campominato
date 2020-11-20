// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// ARRAY BOMBE
var arrayBombs = [];
// ARRAY TENTATIVI
var attemps = [];
// TENTATIVI MASSIMI
var maxAttemps;
// PUNTEGGIO
var score = 0;

// LIVELLO DI DIFFICOLTà
var level;
// NUMERO DI TENTATIVI IN BASE AL LIVELLO DI DIFFICOLTA
var maxNumber;
// DEFINISCO I LIVELLI DI DIFFICOLTà
var level = prompt("Scegli il livello di difficoltà: 0, 1 o 2")
switch (level) {
	case "2":
	 maxNumber = 50;
	 break;
	case "1":
   maxNumber = 80;
	 break;
	default :
	 maxNumber = 100;
}
// SOTTRAGGO LE MINE DAI TENTATIVI MASSIMI PER LIVELLO DI DIFFICOLTà
var maxAttemps = maxNumber - 16;

// GENERO BOMBE
while (arrayBombs.length < 16) {
	// GENERO NUMERO CASUALE
	var randomNumber = randomIntegerBetween(1, maxNumber);
	// CONTROLLO SE IL NUMERO è GIA NELL'ARRAY
	var check = isInArray(arrayBombs, randomNumber);
  // SE NON C'è PUSHA NELL'ARRAY E RIPARTE IL CICLO
	if (check == false) {
		arrayBombs.push(randomNumber);
	}
	// SE C'è RIPARTE IL CICLO
}
console.log("array bombe " + arrayBombs);


// SET UP GIOCO
var lose = false;
// CONDIZIONI DEL WHILE: ENTRA NEL CICLO E PROSEGUILO FINO A QUANDO ARRIVO ALLA FINE DEI MIEI TENTATIVI E FINO A QUANDO IL GAMECHECK RIMANE FALSE
while (attemps.length < maxAttemps && lose == false) {
	// CHIEDO PRIMO NUMERO TRAMITE PROMPT
	var userNumber = parseInt(prompt("inserisci un numero compreso tra 1 e " + maxNumber));
	// SE L'UTENTE NON INSERISCE UN NUMERO NEI PARAMETRI ENTRO IN QUESTO WHILE E CI RESTO FINO A QUANDO NON METTE I NUMERI GIUSTI
	while ((userNumber < 1) || (userNumber > maxNumber)) {
		alert("devi inserire un numero tra 1 e " + maxNumber)
		userNumber = parseInt(prompt("inserisci un numero compreso tra 1 e " + maxNumber));
	}
	// CERCO SE IL NUMERO è GIA PRESENTE NELL'ARRAY DEI NUMERI UTENTE
	var checkUserNumber = isInArray(attemps, userNumber);
	// CERCO IL NUMERO NELL'ARRAY DELLE BOMBE
	var gameCheck = isInArray(arrayBombs, userNumber)
	// SE TROVO UN BOMBA PERDO ESCO DAL CICLO
	if (gameCheck == true){
		alert("Hai perso!")
		lose = true;
		// SE NON LA TROVO PROSEGUI CON IL CICLO
	} else if (checkUserNumber == false) {
		attemps.push(userNumber);
		// AUMENTO LO SCORE
		score++;
	} else {
		alert("numero duplicato")
	}
}


alert("il tuo punteggio è " + score)
console.log("array utente " + attemps);










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
