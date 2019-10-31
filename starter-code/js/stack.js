let stackNuovo = new StackDataStructure()

// esto non me sta claro, cada vez que lo voy a invocar, no vas a crear un objecto nuevo e distinto ?


// interactive elements of Html
let textInpunt = document.getElementById("textInput");

let addButton = document.getElementById("addStck");
// console.log(addButton)

let delButton = document.getElementById("takeStack");

let stackBar = document.getElementsByClassName("stackBar");
console.log(stackBar[0])


// functionalities of buttons

addButton.addEventListener('click', function () {
    addStack()
})


function addStack() { // coge el valor in input text 
    stackNuovo.push(textInpunt.value)
    console.log(typeof stackNuovo);

    // stackNuovo.forEach(function(item, index) {
    //   console.log(item, index);
    // }); no funciona XD XD XD

    for (let pos in stackNuovo) {
        console.log(stackNuovo[pos].length);
        console.log(stackNuovo);
        // stackBar[pos].innerText = textInpunt.value;
        }
    
    
    


    
}