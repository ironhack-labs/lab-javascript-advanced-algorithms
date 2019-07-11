
let stack = new StackDataStructure

// ALMACENAR VALOR DEL INPUT USUARIO
let inputContent 

function getInputValue() {
    inputContent = document.querySelectorAll('input.btn')
    console.log(`El contenido del input es: ${inputContent}`)  
}

// DIBUJAR BLOCK
let draw = document.getElementById('btn-add')

let pruebaColor = document.querySelectorAll('div.block')
console.log (pruebaColor)

draw.onclick = () => {
    for (let i = 0; i < pruebaColor.length; i++) {

    pruebaColor[i].style.backgroundColor = "#64a3f5"
    pruebaColor[i].innerHTML = ''
    pruebaColor[i].style.color = "white"
    }
}
