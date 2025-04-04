// # RACCOLTA DATI 

// Genero un numero casuale per il giocatore e lo stampo
const playerNumber = Math.floor(Math.random() * 6 + 1);
console.log(`Il numero del giocatore è: ` + playerNumber);

// Genero un numero casuale per il pc e lo stampo
const pcNumber = Math.floor(Math.random() * 6 + 1);
console.log(`Il numero del PC è: ` + pcNumber);

// # SVOLGIMENTO 

let outputText = ``;

// Stabilisco chi è il vincitore
if(playerNumber > pcNumber) {
    outputText = `Il giocatore ha vinto!`;
} else if(pcNumber > playerNumber) {
    outputText = `Il PC ha vinto!`;
} else {
    outputText = `Pareggio! Riprovate un'altra volta!`;
}

// # OUTPUT

console.log(outputText);