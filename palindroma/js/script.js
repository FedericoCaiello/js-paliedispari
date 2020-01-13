// Una funzione per capire se la parola è palindroma
var parolaUtente = prompt('inserisci una parola');

var parolaGirata = rovesciaParola(parolaUtente);

if (parolaGirata==parolaUtente) {
  console.log('palindroma');
}else {
  console.log('non palindroma');
}
function rovesciaParola(parola) {
  var parolaReverse = '';
  for (var i = parola.length -1; i >= 0; i--) {
    parolaReverse += parola[i];
  }
  return parolaReverse;
}
