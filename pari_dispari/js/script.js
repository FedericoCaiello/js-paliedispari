 // L’utente sceglie pari o dispari e un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer. Sommiamo i due numeri e dichiariamo chi ha vinto.
var pariDispari = prompt('scegli pari o dispari');
console.log(pariDispari);
var numero = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(numero);
var computer = Math.floor(Math.random() * 5) + 1;
console.log(computer);
var somma = sommaNumeri(numero, computer);
console.log('variabile somma', somma);
var messaggio = ('hai vinto');
var messaggioCiao =('hai perso');
function sommaNumeri(numero, computer) {
  var risultato = numero + computer;
  if (somma%2 == 0){
    console.log(messaggio);
  }else{
    console.log(messaggioCiao);
  }
  console.log(risultato);
  return risultato;
}
