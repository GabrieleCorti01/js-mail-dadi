
let numeroUtente = parseInt(prompt("scegli un numero da 1 a 10!"))


if ((Number.isNaN(numeroUtente)) || (numeroUtente < 1) || (numeroUtente > 10)){
    alert("Dovei scegliere un numero compreso tra 1 e 10, ora sarà casuale");
    numeroUtente = parseInt((10 * Math.random () )) +1;
}
console.log(numeroUtente)
document.getElementById("numero-utente").innerHTML = numeroUtente

let numeroCpu = parseInt((10 * Math.random () )) +1;
console.log(numeroCpu)
document.getElementById("numero-cpu").innerHTML = numeroCpu


if (numeroUtente > numeroCpu) document.getElementById("testo-vittoria").innerHTML = "Hai vinto!!"
if (numeroUtente < numeroCpu) document.getElementById("testo-sconfitta").innerHTML = "Hai perso!"