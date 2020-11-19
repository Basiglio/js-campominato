// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.




// CREO CONTENITORE PER LE MINE
var arrayMine = [];
var numeriUtente =[]

// GENERO E CONTROLLO NUMERI PC
while (arrayMine.length < 16) {
	var number = randomNumber();
  var alreadyExist = isDuplicated(number, arrayMine);
  if( alreadyExist == false ) {
  	 arrayMine.push(number);
  }
}
console.log(arrayMine);

alert("Inizia il Gioco")
// CHIEDO INPUT UTENTE
var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
while ((numeroUtente < 1) || (numeroUtente > 100)) {
	// controllo che inserisca i numeri giusti
  alert("Devi inserire un numero da 1 a 100!!!!");
  numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
}

// controllo se il numero è presente nell'array del pc

var i = 0;
result = false;
while (i < arrayMine.length) {
	if (numeroUtente == arrayMine[i]) {
	result = true;
	}
	if (result == false) {
	 alert("Ottimo Prosegui!")
 	 numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
	}
	i++;
}
if (result == true) {
 alert("Hai Perso!")
}
console.log("questo è il tuo numero ", numeroUtente);

// INIZIO IL GIOCO
// campoMinato(arrayMine, numeroUtente);












//-----------------------------------------------------------------------

// FUNZIONE GENERA NUMERO CASUALE
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// CONTROLLO NUMERI
function isDuplicated(numero, array) {
	var exist = false;
  for(var i = 0; i < array.length; i++) {
  	if(array[i] == numero) {
    	exist = true;
    }
  }
  return exist;
}

// function campoMinato(array, numero) {
//   var result = (false)
//   for (var i = 0; i < array.length; i++) {
//     if (numero == array[i]) {
//       result = (true)
//     }
//   }
//   if (result == true) {
//     alert("Hai perso!")
//   } else {
//     alert("Sei stato fortunato, prosegui!")
//     numero = parseInt(prompt("inserisci un numero da 1 a 100"));
//   }
// }
