//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");


//  RECUPERO GLI ELEMENTI DALLA PAGINA
const grid = document.getElementById("grid");
const button = document.querySelector("button");
const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("result");

// CREO UNA FUNZIONE CHE CREA CELLE 

const createCell = (content) => {
    const cell = document.createElement("div");
    cell.className = ("cell");
    cell.innerText = content;
    return cell;
}

// CREO UNA FUNZIONE CHE GENERA 16 BOMBE CON NUMERO CASUALE COMPRESO TRA 1 E MAX
const generateBombs = (maxBombNumber, totalBombs) => {
    let bombs = [];
    while (bombs.length < totalBombs) {
        const randomNumber = Math.floor(Math.random() * maxBombNumber) + 1;
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        }
    }
    return bombs;
}

// AGGIUNGO UN EVENT LISTENER AL CLICK DEL BOTTONE
button.addEventListener("click", () => {

    // CREO DUE COSTANTI PER SCEGLIERE IL NUMERO DI ROWS E COLS CHE SERVONO
    const rows = 10;
    const cols = 10;

    // CREO UNA COSTANTE CHE MI DICA IL NUMERO DI CELLE CHE SERVONO
    const totalCells = rows * cols;

    // RIASSEGNO IL NOME AL BOTTONE DOPO IL CLICK
    button.innerText = "Retry"

    // PREPARO UNA FLAG PER SAPERE SE LA PARTITA E' FINITA O MENO
    let isGameOver = false;

    // SVUOTO IL CAMPO
    grid.innerText = "";

    // CREO UNA VARIABILE PER TENERE CONTO DELLO SCORE DELL'UTENTE
    let userScore = 0;

    scoreElement.innerText = `SCORE: ${userScore}`;

    // CREO UNA VARIABILE PER DIRE DI DEFAULT QUANTE BOMBE CI SONO NEL CAMPO
    let totalBombs = 16;
    const bombs = generateBombs(totalCells, totalBombs);
    console.log(bombs);


    // CALCOLO I PUNTI MASSIMI CHE L'UTENTE PUO' FARE TRAMITE LE VARIABILI CREATE
    const maxPoints = totalCells - totalBombs;

    // USO UN CICLO PER CREARE LE CELLE
    for (let i = 1; i <= totalCells; i++) {
        const cell = createCell(i);

        // AGGIUNGO UN EVENT LISTENER AL CLICK DELLA CELLA
        cell.addEventListener("click", () => {

            // SE IL GIOCO E' FINITO NON RENDO CLICCABILI TUTTE LE ALTRE CELLE OPPURE SE LA CELLA E' GIA' STATA CLICCATA NON POTRA' ESSERE RICLICCATA LA STESSA CELLA
            if (isGameOver || cell.classList.contains("clicked")) return;

            // AGGIUNGO LA CLASSE CLICKED PER FAR DIVENTARE LA CELLA AZZURRA
            cell.classList.add("clicked");
            console.log("Hai cliccato la cella numero: ", i);

            // CREO UNA COSTANTE CHE MI DARA' UN BOOLEANO IN BASE A SE L'UTENTE HA CLICCATO SU UNA BOMBA O MENO
            const HasHitBomb = bombs.includes(parseInt(cell.innerText));

            // SE LA COSTANTE MI DA TRUE COME VALORE AGGIUNGO LA CLASSE BOMB PER COLORARLA DI ROSSO, BLOCCO IL GIOCO E MOSTRO UN MESSAGGIO
            if (HasHitBomb) {
                cell.classList.add("bomb");
                isGameOver = true;
                resultElement.innerText = `Hai perso! Hai totalizzato ${userScore} punti`;
                // ALTRIMENTI  SE MI DA FALSE COME VALORE, INCREMENTO IL PUNTEGGIO DELL'UTENTE
            } else {
                scoreElement.innerText = "SCORE: " + ++userScore;
            }

            // SE I PUNTI MASSIMI CHE L'USER PUO' FARE SONO UGUALI ALLO SCORE EFFETTIVO IN QUEL MOMENTO IL GIOCO FINISCE E MOSTRO UN MESSAGGIO
            if (maxPoints === userScore) {
                isGameOver = true;
                resultElement.innerText = `Hai Vinto complimenti!`;
            }
        })

        // FACCIO DIVENTARE LE CELLE CREATE DALLA FUNZIONE DIRETTAMENTE FIGLIE DELLA GRIGLIA PER MOSTRARLE IN PAGINA
        grid.appendChild(cell);

        // SVUOTO IL CAMPO
        resultElement.innerText = "";
    }

})
