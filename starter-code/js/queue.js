var queue = new QueueDataStructure();

let botAddQ = document.getElementsByClassName('container')[1].children[3]
let botTakeQ = document.getElementsByClassName('container')[1].children[4]
let meterTextoQ = document.getElementsByClassName('container')[1].children[2]
let elementosQ = document.getElementsByClassName('container')[1]
let elementosQDivs = elementosQ.getElementsByTagName('div')


botAddQ.addEventListener('click', function () {
    if (queue.MAX_SIZE == queue.queueControl.length) {
        alert("no se pueden meter mas elementos")
    }
    queue.enqueue(meterTextoQ.value)
    let num = queue.MAX_SIZE - queue.queueControl.length


    elementosQDivs[num].innerText = meterTextoQ.value

})

botTakeQ.addEventListener('click', function () {
    let padre = document.getElementsByClassName('yo')[0]
    if (queue.queueControl.length == 0) {
        alert("no hay elementos que sacar")
    }

    let lastDiv = elementosQDivs.length
    console.log(lastDiv, queue.queueControl.length)
    let nuevoEnlace = document.createElement("div"); //meto un elemento Div arriba de todos los divs
    padre.insertBefore(nuevoEnlace, elementosQDivs[0])

    elementosQDivs[lastDiv].remove() //elimino el ultimo div para que saque de la cola el primer elemento que hemos metido

    queue.dequeue()
})