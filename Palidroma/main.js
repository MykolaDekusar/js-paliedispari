'use strict';
const parolaUtente = (prompt("Inserisci la parola da verificare se è palindroma").toLowerCase().replaceAll(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, ''));
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
    //faccio un ciclo inverso 
    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        parolaInvertita += parolaUtente[i];
    }
    console.log(parolaInvertita);
    console.log(parolaUtente);
    if (parolaInvertita === parolaUtente) {
        //ritorno true se sono uguali anche da invertite
        return 1;

    }
    //altrimenti ritorno false
    return 0;
}