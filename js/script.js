// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var lista = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var nome = prompt('Inserisci il tuo cognome');

var carattere = nome.charAt(0).toUpperCase(); //Converto la prima lettera del nome inserito e controllo
var resto = nome.slice(1).toLowerCase();
var nomeCorretto = carattere + resto;
console.log(nomeCorretto);

lista.push(nomeCorretto); //Inserisco nome in Array e controllo
console.log(lista);

var ordineAlfabetico = lista.sort() //Converto array in ordine alfabetico e controllo
console.log(lista);

for (var i = 0; i < lista.length; i++) { //Stampo array su pagina
    document.getElementById('lista-stampata').innerHTML += '<li>' + lista[i] + '</li>';
}

var i = 0;  //Cerco posizione del cognome nell'array
var posizione = -1;
while (i < lista.length && posizione == -1) {
    if (nomeCorretto == lista[i]) {
        posizione = ++i;
    }
    i++;
}
if (posizione != -1) {  //Stampo posizione nell'array
    document.getElementById('position').innerHTML = 'Sei in posizione ' + posizione;
}
