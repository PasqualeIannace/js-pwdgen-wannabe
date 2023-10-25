const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Inserisci il tuo cognome");
const colore = prompt("Inserisci il tuo colore preferito");

document.getElementById("password").innerHTML = `La tua password è: ${nome}${cognome}${colore}#23`