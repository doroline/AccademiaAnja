export const normalizzaCorsi = (corsiObj) => {

    const arrayNormalizzato = Object.keys(corsiObj).map((corsiChiave) => (
        { // queste sono le parentesi graffe dell'oggetto
            nome: corsiObj[corsiChiave].nome,
            programma: corsiObj[corsiChiave].programma,
            prezzo: corsiObj[corsiChiave].prezzo,
            durata: corsiObj[corsiChiave].durata,
            id: corsiChiave
        }
    ));
    return arrayNormalizzato;
};

export const filtra = (stringaDaCercare, arrayCorsi) => {
    let stringaDaCercareArray = null;
    if (typeof stringaDaCercare === 'string' && stringaDaCercare.length > 0) { // il typeof è un controllo di javascript che va a verificare che il contenuto di stringaDaCercare sia di tipo stringa
            stringaDaCercareArray = stringaDaCercare.toLowerCase().split(" "); // porto il contenuto che riceverà dentro a stringaDaCercare, quello che scriverà l'utente nel campo di ricerca, a minuscolo e poi gli dico di dividerlo con split, in tanti elementi in base alle parole scritte, ogni volte che trova uno spazio  
    }
    let arrayCorsiFiltrate = arrayCorsi;
    // qui opero il filtro per la barra di ricerca
    if (stringaDaCercareArray){
        //attraverso il filter mi vado a filtrare le ricette che hanno nel NAME una stringa uguale alla parola cercata
        arrayCorsiFiltrate = arrayCorsiFiltrate.filter((corso)=>{
            let corsoDaIncludere = false;
            /* col forEach scorro tutta l'array con i prodotti, esempio sto cercando "Cannelloni romana", questa ricerca verrà assegnata alla proprietà 'elemento' del forEach, poi gli diremo che SE trova quell'elemento nel nome della corso scorrendola, allora dovrà far diventare True la variabile corsoDaIncludere, bloccarsi e fare il return di corsoDaIncludere. Gli diremo anche di trasformare tutto in minuscolo per far meglio la comparazione */
            stringaDaCercareArray.forEach((elemento) => {
                if(corso.nome.toLowerCase().includes(elemento)){
                    corsoDaIncludere = true;
                }
                return corsoDaIncludere;
            })
            return corsoDaIncludere;
        })
    }
    return arrayCorsiFiltrate;
 };
 