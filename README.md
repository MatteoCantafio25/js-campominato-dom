# ESERCIZIO CAMPOMINATO


- Recupero gli elementi dalla pagina
- Creo una funzione che crea le celle
- Creo una funzione che genera le bombe
- Creo due costanti per scegliere il numero di rows e cols che servono
- Faccio reagire il bottone al click in pagina con la funzione di far vedere la griglia all'utente e crearla
- Creo una costante su cui appoggiarmi per sapere il numero di celle che servono
- Creo una costante che mi dica il numero di celle che servono nell'esercizio in automatico
- Cambio il il testo al bottone per dargli anche una funzione di retry nel gioco
- Preparo una flag per sapere se la partita è finita o meno
- Svuoto la griglia per non farla creare più volte al click del bottone
- Creo una variabile per tenere conto dello score dell'utente
- Creo una variabile per dire di default quante bombe ci sono nel campo
- Calcolo i punti massimi che l'utente può fare tramite le variabili create
- Uso un ciclo per creare le celle
- Faccio reagire la cella al click
- Se il gioco è finito non rendo cliccabili tutte le altre celle oppure se la cella è già stata cliccata non potrà essere ricliccata la stessa cella
- Aggiungo la classe clicked per far diventare la cella azzurra
- Creo una costante che mi darà un booleano in base a se l'utente ha cliccato sulla bomba o meno
- Se la costante mi da True come valore aggiungo la classe bomb per colorarla di rosso, blocco il gioco e mostro un messaggio
- Altrimenti se mi da false come valore, incremento il punteggio dell'utente
- Se i punti massimi che l'user può fare sono uguali allo score effettivo in quel momento il gioco finisce e mostro un messaggio
- Faccio diventare le celle create dalla funzione direttamente figlie della griglia per mostrarle in pagina
- Svuoto il campo del risultato per non lasciare il risultato della partita precedente in quella successiva