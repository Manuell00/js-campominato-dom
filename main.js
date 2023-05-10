// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



// DEFINISCO LE VARIABILI
const gridElement = document.getElementById("grid")
const button = document.getElementById("playButton")
let mioArray = createOrderArray(1, 101)

button.addEventListener("click", clearBox)
button.addEventListener("click", chooseDifficult)
button.addEventListener("click", generateSquare)




// FUNZIONI

// Creo una funzione per creare un elemento tag e inserirgli una classe e infine ritornarlo
function createGridSquare(tagType, classToAdd) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd)
    return newElement
}

// Creo una semplicissima funzone che generi un array con numeri ordinati della lunghezza desiderata
function createOrderArray(min, max) {

    // Creo un array
    const intArr = []

    // Popolo il mio array
    for (let i = min; i < max; i++) {
        intArr.push(i)
    }

    // Inserisco le bombe
    for (let i = 0; i < 17; i++) {
        let random = intArr[randomNumMinMax(min, max)]

        if (random !== "bomba") {
            intArr.splice(random, 1,"bomba")
        }

        else {
            i--
        } 
    }

    return intArr;
    
}




// Creo la funzione per generare i quadrati
function generateSquare() {

    difficult = document.getElementById("difficultButton").value

    // Inserisco la casistica in cui non sia scelta la difficoltà
    if (difficult === "Nan") {
        alert("Attento non hai scelto la difficoltà")
    }

    // Inserisco la casistica per cui il gioco sia "easy"
    else if (difficult === "easy") {

        for (let i = 0; i < mioArray.length; i++) {

            // Utilizzo la funzione CreateGridSquare per creare il blocco square
            let square = createGridSquare("div", "square-easy")

            // Creo degli span che andrà in square con all'interno un numero di arrayNum
            const newSpan = document.createElement("span")
            newSpan.append(mioArray[i]);
            square.append(newSpan)


            // Associarel'evento allo square
            square.addEventListener("click",
                function () {
                    this.classList.add("clicked-true")
                    console.log(`È stata colorata la cella numero  ${mioArray[i]}`)
                }
            );

            gridElement.append(square)
        }

    }

    // Inserisco la casistica per cui il gioco sia "medium"
    else if (difficult === "medium") {

        for (let i = 0; i < mioArray.length; i++) {

            // Utilizzo la funzione CreateGridSquare per creare il blocco square
            let square = createGridSquare("div", "square-medium")

            // Creo degli span che andrà in square con all'interno un numero di arrayNum
            const newSpan = document.createElement("span")
            newSpan.append(mioArray[i]);
            square.append(newSpan)


            // Associarel'evento allo square
            square.addEventListener("click",
                function () {
                    this.classList.add("clicked-true")
                    console.log(`È stata colorata la cella numero  ${mioArray[i]}`)
                }
            );

            gridElement.append(square)
        }

    }

    // Inserisco la casistica per cui il gioco sia "hard"
    else {

        for (let i = 0; i < mioArray.length; i++) {

            // Utilizzo la funzione CreateGridSquare per creare il blocco square
            let square = createGridSquare("div", "square-hard")

            // Creo degli span che andrà in square con all'interno un numero di arrayNum
            const newSpan = document.createElement("span")
            newSpan.append(mioArray[i]);
            square.append(newSpan)

            let contatore = 0

            // Associarel'evento allo square
            square.addEventListener("click",
                function () {
                    
                    console.log(contatore)
                
                    this.classList.add("clicked-true")

                    const span = this.querySelector('span');
    
                    // Ottieni il valore interno dello span
                    const valore = span.textContent;
                    
            
                    if (valore != "bomba") {
                        contatore++
                        console.log(contatore)
                        console.log(`È stata colorata la cella numero  ${mioArray[i]}`)
                    }

                    else{
                        alert(`Mi dispiace hai perso, il tuo punteggio ${contatore}`)
                        contatore=0
                        
                    }
                }
            );

            gridElement.append(square)
        }

    }


}

// Utilizzo una funzione chooseDifficult per selezionare la difficoltà e quindi la lunghezza dell'array
function chooseDifficult() {
    difficult = document.getElementById("difficultButton").value


    if (difficult === "easy") {
        mioArray = createOrderArray(1, 101)
    }

    else if (difficult === "medium") {
        mioArray = createOrderArray(1, 82)
    }

    else {
        mioArray = createOrderArray(1, 50)
    }
}


// Creo una funzione per pulire il container

function clearBox()
{
    document.getElementById("grid").innerHTML = "";
}

// Creo una funzione che generi un numero causale tra il max e il min
function randomNumMinMax(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin)
}

console.log(randomNumMinMax(1,101))

