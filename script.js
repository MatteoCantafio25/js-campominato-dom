//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");


//  RECUPERO GLI ELEMENTI DALLA PAGINA
const grid = document.getElementById("grid");

const button = document.querySelector("button");

// CREO UNA FUNZIONE CHE CREA CELLE 

const createCell = (content) => {
    const cell = document.createElement("div");
    cell.className = ("cell");
    cell.innerText = content;
    return cell;
}


// CREO DUE COSTANTI PER SCEGLIERE IL NUMERO DI ROWS E COLS CHE SERVONO
const rows = 10;
const cols = 10;

// CREO UNA COSTANTE CHE MI DICA IL NUMERO DI CELLE CHE SERVONO
const totalCells = rows * cols;



// AGGIUNGO UN EVENT LISTENER AL CLICK DEL BOTTONE
button.addEventListener("click", () => {

    button.innerText = "Retry"

    grid.innerText = "";

    // USO UN CICLO PER CREARE LE CELLE
    for (let i = 1; i <= totalCells; i++) {
        const cell = createCell(i);

        // AGGIUNGO UN EVENT LISTENER AL CLICK DELLA CELLA
        cell.addEventListener("click", (e) => {

            e.target.classList.toggle("clicked");
            console.log("Hai cliccato la cella numero: ", i);
        })

        grid.appendChild(cell);
    }
})