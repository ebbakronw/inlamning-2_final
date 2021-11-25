

//har kopplat mina två knappar till funktionen 
document
    .querySelector("button")
    .addEventListener("click", countBudget)

    // skapar två tomma arrays för att koppla listona med map längre ner
const inkomstLista = [];
const kostnadLista = [];

//skapar en funktion för att kunna beräkna + och - och få ut en vinst
//lägger in preventDefault för att funktionen in ska uppdateras
function countBudget(e) {
    e.preventDefault(); 

    //deklarerar två variabler 
    let kostnadSumma = 0;
    let inkomstSumma = 0;

    const select = document.querySelector("select");

    const description = document.querySelector(".beskrivning").value
    const number = document.querySelector(".nummer").value;
    

//skapar ett alert så det inte går att trycka på knappen innan du fyllt i info
    if (!description || !number) return alert("FYLL I INFO")

    // if och else statement
    if (select.value == "+") {

        document
            .querySelector(".inkomst-container")
            .innerHTML += `<li class="inkomst-lista"> ${description} : ${number} SEK </li>`

        inkomstLista.push(number);

    }
    else if (select.value == "-") {
        document
            .querySelector(".kostnad-container")
            .innerHTML += `<li class="kostnad-lista"> ${description} : ${number} SEK </li> `

        kostnadLista.push(number)
    }
    else if (select.value == "choose") {
        alert("VÄLJ MELLAN + ELLER -")
    }

    inkomstLista.map((e) => {
        inkomstSumma += parseFloat(e)
    })

    kostnadLista.map((e) => {
        kostnadSumma += parseFloat(e)
    })
    //
    const vinstSum = document.querySelector(".vinst") 

    // detta är för att kunna få ut vinsten
    vinstSum.textContent = inkomstSumma - kostnadSumma 


    document.querySelector(".beskrivning").value = null
    document.querySelector(".nummer").value = null
}
