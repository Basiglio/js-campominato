// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.




// CREO CONTENITORE PER LE MINE
var arrayMine = [];
// CREO CONTENITORE NUMERI UTENTE
var arrayUtente =[]
// NUMERO TENTATIVI
var tantativi = 5;
// PUNTEGGIO
var punteggio = [];



// GENERO E CONTROLLO NUMERI PC (fino a quando il mio array non arriva a 16 contenuti continua a generare numeri casuali che non siano uguali)
while (arrayMine.length < 16) {
	var mina = randomNumber();
  var controlloEsistenza = isInArray(mina, arrayMine);
  if( controlloEsistenza == false ) {
  	 arrayMine.push(mina);
  }
}
console.log(arrayMine);














































//-----------------------------------------------------------------------

// FUNZIONE GENERA NUMERO CASUALE
function randomNumber() {
  var number = Math.floor(Math.random() * 100) + 1;
	return number;
}

// CONTROLLO NUMERI
function isInArray(numero, array) {
	var exist = false;
  for(var i = 0; i < array.length; i++) {
  	if(array[i] == numero) {
    	exist = true;
			return exist;
    }
  }
  return exist;
}








//
// while (arrayUtente.lenght < tentativi) {
// 	var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
// 	while ((numeroUtente < 1) || (numeroUtente > 100)) {
// 	// CONTROLLO CHE INSERISCA I NUMERI GIUSTI
// 	  alert("Devi inserire un numero da 1 a 100!!!!");
// 	  numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
// 	}
//
//
//
// }
