// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

// Ogni cella ha un numero progressivo, da 1 a 100.

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


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

    for (let i = min; i < max; i++) {
        intArr.push(i)
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


}

// Utilizzo una funzione chooseDifficult per selezionare la difficoltà e quindi la lunghezza dell'array
function chooseDifficult() {
    difficult = document.getElementById("difficultButton").value


    if (difficult === "easy") {
        mioArray = createOrderArray(1, 50)
    }

    else if (difficult === "medium") {
        mioArray = createOrderArray(1, 82)
    }

    else {
        mioArray = createOrderArray(1, 101)
    }
    console.log(difficult)
}


// Creo una funzione per pulire il container

function clearBox()
{
    document.getElementById("grid").innerHTML = "";
}


