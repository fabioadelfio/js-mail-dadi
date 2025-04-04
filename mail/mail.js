// # RACCOLTA DATI 

// Creo la lista delle email degli invitati
const emails = [
    `claudio@gmail.com`,
    `francesco@gmail.com`,
    `marco@gmail.com`,
    `fabio@gmail.com`,
    `biagio@gmail.com`,
    `luigi@gmail.com`,
    `giovanni@gmail.com`
];

// Stampo la lista
console.table(emails);

// Chiedo all'utente di inserire la sua email
const userEmail = prompt(`Inserisci la tua email:`);

// # SVOLGIMENTO 

// Dichiaro un interruttore che inizializzo come false per poi diventare true se l'email inserita è presente in lista
let isEmailValid = false;

// Controllo se l'email fornita dall'utente è presente in lista
for(i = 0; i < emails.length && isEmailValid === false; i++) {
    const currentEmail = emails[i];
    
    // Se l'email corrente è uguale all'email inserita dall'utente allora isEmailValid diventa true (email valida) e si arresta il ciclo
    if(currentEmail === userEmail) {
        isEmailValid = true;
    }
}

// # OUTPUT

// Stampo un messaggio appropriato a seconda dell'esito del controllo
if(isEmailValid === true) {
    alert(`L'email inserita è valida! Benvenuto!`);
} else {
    alert(`L'email inserita non è valida!`);
}


