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
console.log(arrayMine);


// GENERO NUMERI CASUALI
for (var i = 0; i < 16; i++) {
  var mine = Math.floor(Math.random() * 100) + 1;
  // INSERISCO NUMERI NEL CONTENITORE
  arrayMine.push(mine);
  console.log(mine);
}
