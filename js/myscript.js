// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.




// FACCIO GENERARE AL COMPUTER 16 NUMERI CASUALI DA 1 A 100
// CREO CONTENITORE PER LE MINE
var arrayMine = [];

// CREO IL CICLO GENERATORE DI MINE
for (var i = 0; i < 16; i++) {
  // GENERO 16 MINE
  var mine = Math.floor(Math.random() * 100) + 1;
  // INSERISCO LE MINE NEL CONTENITORE
  arrayMine.push(mine);
}
console.log(arrayMine);

// CHIEDO INPUT UTENTE
var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
while ((numeroUtente < 1) || (numeroUtente > 100)) {
  alert("Devi inserire un numero da 1 a 100!!!!");
  numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
}
console.log("questo è il tuo numero ", numeroUtente);

// CREO REGOLE GIOCO
var result = (false)
for (var i = 0; i < arrayMine.length; i++) {
  if (numeroUtente == arrayMine[i]) {
    result = (true)
  }
}

if (result == true) {
  alert("Hai perso!")
} else {
  alert("Sei stato fortunato, prosegui!")
  numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
}
