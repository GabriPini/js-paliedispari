/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//creo la funzione


 function palindromValidator ( word ) 
 {

    for (i = 0; i < word.length / 2; i++){

         if ( word.charAt(i) !== word.charAt(word.length -1 -i)) {

             return false;

         } else {

            return true;

        }
     }

 }

 let userWord = prompt('inserisci una parola e vediamo se è palindroma');

 if (palindromValidator(userWord)){

     console.log('la parola è palindroma')
    
 } else {

     console.log('la parola NON è palindroma')
 }

 /* 
 
 Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/