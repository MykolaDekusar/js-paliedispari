'use strict';
const parolaUtente = prompt("Inserisci la parola da verificare se è palindroma");
//verifico il ritorno della funzione
if (palindroma(parolaUtente)) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}
console.log(parolaUtente);
function palindroma(parolaUtente) {
    //creo una variabile interna
    let parolaInvertita = '';
    let fraseUtenteSettata = '';
    //configuro un contenitore per la frase utente settata senza segni particolari e spazi
    fraseUtenteSettata = parolaUtente.toLowerCase().replaceAll(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    //faccio un ciclo inverso 
    for (let i = fraseUtenteSettata.length - 1; i >= 0; i--) {
        parolaInvertita += fraseUtenteSettata[i];
    }
    console.log(parolaInvertita);
    console.log(fraseUtenteSettata);
    if (parolaInvertita === fraseUtenteSettata) {
        //ritorno true se sono uguali anche da invertite
        return 1;
        //altrimenti ritorno false
    } else {
        return 0;
    }
}