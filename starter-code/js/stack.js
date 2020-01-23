// VARIABLES PARA LOS ELEMENTOS DEL DOM
let stackValue
let stackElement
let stackContainer = document.querySelector('#stack-element-container')
let stackAddBtn = document.querySelector('#stack-add-btn')
let stackTakeBtn = document.querySelector('#stack-take-btn')

console.log(stackContainer)
console.log(stackAddBtn)
console.log(stackAddBtn)

// CREAMOS UN OBJETO
let stack = new StackDataStructure

function showHTMLStack() {
    // CARGA LOS ELEMENTOS DEL ARRAY
    stack.stackControl.forEach((arrPos) => {
        // CREA EL ELEMENTO HTML E INSERTA POR APPEND CHILD
        stackElement = document.createElement("li")
        stackElement.classList.add("element")
        stackElement.innerHTML = `${arrPos}`
        stackContainer.appendChild(stackElement)
    })
}

// BOTON ANADIR
stackAddBtn.addEventListener("click", () => {
    // RESETEA EL HTML
    stackContainer.innerHTML = ""

    // SELECCIONA EL VALOR DEL INPUT
    stackValue = document.querySelector('#stack-value').value
    // SI SE PUEDE ANADIR
    if (stack.canPush()) {
        // ANADE ELEMENTO AL ARRAY
        stack.push(stackValue)
        // INSERTA EL ARRAY EN LA PAGINA
        showHTMLStack()
        //console.log(stack.stackControl)

        //SI NO INSERTA EL FALLO
    } else {
        // INSERTA EL ARRAY EN LA PAGINA
        showHTMLStack()
        // CREA EL ELEMENTO ERROR HTML E INSERTA POR APPEND CHILD
        stackElement = document.createElement("li")
        stackElement.classList.add("element", "red")
        stackElement.innerHTML = `${stack.push(stackValue)}`
        stackContainer.appendChild(stackElement)
        console.log(stack.stackControl)
    }
})

// BOTON QUITAR
stackTakeBtn.addEventListener("click", () => {
    console.log(stack.stackControl)
    // RESETEA EL HTML
    stackContainer.innerHTML = ""
    // SI ESTA VACIO
    if (stack.isEmpty()) {
        // INSERTA EL ARRAY EN LA PAGINA
        showHTMLStack()
        // CREA EL ELEMENTO ERROR HTML E INSERTA POR APPEND CHILD
        stackElement = document.createElement("li")
        stackElement.classList.add("element", "red")
        stackElement.innerHTML = `${stack.pop(stackValue)}`
        stackContainer.appendChild(stackElement)
    } else {
        // QUITA DEL ARRAY
        stack.pop()
        // INSERTA EL ARRAY EN LA PAGINA
        showHTMLStack()
    }
})