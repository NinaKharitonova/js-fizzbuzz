//* Esercizio FizzBuzz

/**CONSEGNA
 * 
 * Scrivi un programma che stampi i numeri da 1 a 100,
   ma per i multipli di 3 stampi “Fizz” al posto del numero 
   e per i multipli di 5 stampi Buzz.

   Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


   Prima di partire a scrivere codice poniamoci qualche domanda:
   Come faccio a sapere se un numero è divisibile per?
   Abbiamo visto qualcosa di particolare che possiamo usare?
*/

// ! ELABORAZIONI

// NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) {
  // SE I NUMERI SONO MULTIPLI DI 3 E DI 5
  if (i % 3 === 0 && i % 5 === 0) {
    //STAMPA
    console.log("FizzBuzz");

    // ALTRIMENTI SE NUMERI MULTIPLI DI 3
  } else if (i % 3 === 0) {
    //STAMPA
    console.log("Fizz");

    // ALTRIMENTI SE NUMERI MULTIPLI DI 5
  } else if (i % 5 === 0) {
    //STAMPA
    console.log("Buzz");

    // ALTRIMENTI
  } else {
    // STAMPA NUMERI DA 1 A 100
    console.log(i);
  }
}

// ! OUTPUT
