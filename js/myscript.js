// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.




// CREO CONTENITORE PER LE MINE
var arrayMine = [];

// GENERATORE MINE

generatoreDi16NumeriCasuali(arrayMine)
console.log(arrayMine);






// CHIEDO INPUT UTENTE
// var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
// while ((numeroUtente < 1) || (numeroUtente > 100)) {
//   alert("Devi inserire un numero da 1 a 100!!!!");
//   numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
// }
// console.log("questo è il tuo numero ", numeroUtente);
//
// // INIZIO IL GIOCO
// campoMinato(arrayMine, numeroUtente);












//-----------------------------------------------------------------------

// FUNZIONE GENERA NUMERI CASUALI
function generatoreDi16NumeriCasuali(array) {
  var i = 1;
  while ( i <= 16) {
    // GENERO 16 MINE
    var numero = Math.floor(Math.random() * 100) + 1;
    // INSERISCO LE MINE NEL CONTENITORE
    i++
    array.push(numero);
  }
}
// CREO REGOLE GIOCO
function campoMinato(array, numero) {
  var result = (false)
  for (var i = 0; i < array.length; i++) {
    if (numero == array[i]) {
      result = (true)
    }
  }
  if (result == true) {
    alert("Hai perso!")
  } else {
    alert("Sei stato fortunato, prosegui!")
    numero = parseInt(prompt("inserisci un numero da 1 a 100"));
  }
}
