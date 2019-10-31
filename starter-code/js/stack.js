let stack = new StackDataStructure()
stack.MAX_SIZE = document.getElementsByClassName('yellow').length
let liNumber = document.getElementsByClassName('yellow')
let text = document.getElementsByTagName('input')[0]
//funcion integradora
function add() {
    stack.push(text.value)
    let number = stack.MAX_SIZE - stack.stackControl.length
    liNumber[number].innerText = text.value
}
//funcion eliminar
function minus() {
    if (stack.isEmpty()) {
        alert("Ya no quedan")
    } else {
        stack.pop()
        let number = (stack.MAX_SIZE - stack.stackControl.length) - 1
        liNumber[number].innerText = ""
    }
}
//Botones
let addBtton = document.getElementsByTagName('button')[0]
addBtton.onclick = () => {
    if (stack.canPush()) {
        add()
    } else {
        alert("No entran")
    }
}
let takeBtton = document.getElementsByTagName('button')[1]
takeBtton.onclick = () => {
    minus()



}

