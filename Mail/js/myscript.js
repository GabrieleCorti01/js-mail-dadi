
const elencoMail = ["boolean@index.it", "ciao@ciao.it", "mail.ciao@ciao.it", "buona.giornata@info.it"]

let mailUtente = (prompt("Indica la tua mail per accedere"));
console.log(mailUtente)

for (var i = 0; i < elencoMail.length; i++){
    let mailCorrente = elencoMail[i]
    console.log(mailCorrente, i);
    if (mailUtente == mailCorrente) {
        alert("Mail corretta, puoi passare!")
}
}


