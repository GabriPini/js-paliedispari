/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//creo la funzione

/* 
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
 */


 /* 
 
 Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function isEven(integer) {

    if (integer % 2 == 0){
        
        return true;

    }

     return false;

}

let userEvenOddChoice = prompt('Scegli se pari o dispari');
let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
let pcNumber = getRandomNumber(1, 5);

let sum = userNumber + pcNumber;

console.log('Il pc ha tirato');
console.log(pcNumber);

console.log('Il Giocatore ha tirato');
console.log(userNumber);

console.log('Ecco il risultato');
console.log(sum);


if ((isEven(sum)) || (userEvenOddChoice == 'pari')) {

    console.log('hai vinto tu')

} else if ((isEven(sum) == false) || (userEvenOddChoice == 'dispari' )){

    console.log('hai vinto tu')

} else {

    console.log('ha vinto il computer')
}