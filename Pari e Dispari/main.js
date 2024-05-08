'use strict';
const numeroCasuale = casualNumber();
const pari = 'pari';
const dispari = 'dispari';
//modifico l'input dell'utente per evitare frustrazioni
let sceltaUtente = prompt("Inserisci pari o dispari").toLowerCase().replaceAll(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
//verifico che l'utente inserisca pari o dispari
while (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
    sceltaUtente = prompt("Inserisci pari o dispari").toLowerCase().replaceAll(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
}

let nUtente = Number(prompt("Inserisci un numero tra 1 e 5"));
//verifico che l'utente abbia inserito un numero corretto
while (isNaN(nUtente) && !(1 <= nUtente <= 5)) {
    alert("Hai inserito un numero non valido");
    nUtente = Number(prompt("Inserisci un numero tra 1 e 5"));
}
if (sceltaUtente === pari && evenOddCheck(nUtente, numeroCasuale)) {
    console.log(`Hai scritto pari e la somma è ${nUtente + numeroCasuale} quindi hai vinto`);
}
else if (sceltaUtente === dispari && evenOddCheck(nUtente, numeroCasuale) === false) {
    console.log(`Hai scritto dispari e la somma è ${nUtente + numeroCasuale} quindi hai vinto`);
} else {
    console.log(`Hai scritto ${sceltaUtente} e la somma è ${nUtente + numeroCasuale} quindi hai perso`);
}

//funzione creatrice di numeri casuali 1 - 5
function casualNumber() {
    return Math.ceil(Math.random() * 5);
}

//funzione di verifica pari dispari
function evenOddCheck(nUtente, numeroCasuale) {
    const somma = nUtente + numeroCasuale;
    console.log(somma);
    if (somma % 2 === 0) {
        return true
    }
    return false
}



