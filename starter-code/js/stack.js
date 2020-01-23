let stack = StackDataStructure


let pila1 = document.getElementById("pila1")

let prueba2 = document.getElementById("btnAdd")
    .onclick = () => {
        stack.push(1)
        pila1.style.backgroundColor = "red"
    }
let prueba = document.getElementById('btnTake')

prueba.onclick = () => {
    console.log("prueba")
    //stack.pop()
    pila1.innerText = "hola";
    pila1.style.backgroundColor = "blue"
}

function convertBlue() {


    let pilas2 = document.querySelector("pila2")
    let pilas3 = document.querySelector("pila3")
    let pilas4 = document.querySelector("pila4")
    let pilas5 = document.querySelector("pilas5")
}
