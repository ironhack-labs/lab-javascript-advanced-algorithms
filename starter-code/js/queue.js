// VARIABLES PARA LOS ELEMENTOS DEL DOM
let queueValue
let queueElement
let queueContainer = document.querySelector('#queue-element-container')
let queueAddBtn = document.querySelector('#queue-add-btn')
let queueTakeBtn = document.querySelector('#queue-take-btn')

// CREAMOS UN OBJETO
let queue = new QueueDataStructure

function showHTML() {
    // CARGA LOS ELEMENTOS DEL ARRAY
    queue.queueControl.forEach((arrPos) => {
        // CREA EL ELEMENTO HTML E INSERTA POR APPEND CHILD
        queueElement = document.createElement("li")
        queueElement.classList.add("element")
        queueElement.innerHTML = `${arrPos}`
        queueContainer.appendChild(queueElement)
    })
}

queueAddBtn.addEventListener("click", () => {
    // RESETEA EL HTML
    queueContainer.innerHTML = ""

    // SELECCIONA EL VALOR DEL INPUT
    queueValue = document.querySelector('#queue-value').value
    if (queue.canEnqueue()) {
        queue.enqueue(queueValue)
        // INSERTA EL ARRAY EN LA PAGINA
        showHTML()
        //console.log(queue.queueControl)
    } else {
        // INSERTA EL ARRAY EN LA PAGINA
        showHTML()
        // CREA EL ELEMENTO ERROR HTML E INSERTA POR APPEND CHILD
        queueElement = document.createElement("li")
        queueElement.classList.add("element-red")
        queueElement.innerHTML = `${queue.enqueue(queueValue)}`
        queueContainer.appendChild(queueElement)
        //console.log(queue.queueControl)
    }
})

queueTakeBtn.addEventListener("click", () => {
    //console.log(queue.queueControl)
    // RESETEA EL HTML
    queueContainer.innerHTML = ""
    // ELIMINA EL VALOR DEL ARRAY
    if (queue.isEmpty()) {
        // INSERTA EL ARRAY EN LA PAGINA
        showHTML()
        // CREA EL ELEMENTO ERROR HTML E INSERTA POR APPEND CHILD
        queueElement = document.createElement("li")
        queueElement.classList.add("element-red")
        queueElement.innerHTML = `${queue.dequeue(queueValue)}`
        queueContainer.appendChild(queueElement)
    } else {
        queue.dequeue()
        // INSERTA EL ARRAY EN LA PAGINA
        showHTML()
    }
})