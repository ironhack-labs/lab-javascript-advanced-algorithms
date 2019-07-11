const btnBlue = document.getElementById("blue")
const btnRed = document.getElementById("red")
let input = document.getElementsByClassName("bar")[0]

let stack = new StackDataStructure() // creo instancia de la clase. Es un objeto nuevo con propiedades stack control y max-size
btnBlue.onclick = () => {
  stack.push(input.value)
  console.log(stack.stackControl) // muestra que en consola inclye los input.value en  stackControl
  let div = document.getElementsByClassName("div-size")
  div[5 - stack.stackControl.length].innerHTML =
    stack.stackControl[stack.stackControl.length - 1]
}

btnRed.onclick = () => {
  let div = document.getElementsByClassName("div-size")
  div[5 - stack.stackControl.length].innerHTML = ""
  stack.pop()
  if (stack.isEmpty()) {
    // intento que cree un div stack underflow
    let divOver = document.createElement("div")
    divOver.innerHTML = "Underflow"
    div[5].appendChild(divOver)
  }
}
