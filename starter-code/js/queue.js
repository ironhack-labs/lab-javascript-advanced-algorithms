const queueDataStructure = new QueueDataStructure()
let btnAQueue = document.getElementById("btnAQueue")
let btnTQueue = document.getElementById("btnTQueue")
let queueItem = document.getElementById("queueItem")
let divQueue = document.getElementsByTagName("div")




// btnAQueu
let contador = 0
let contador2 = 0
btnAQueue.addEventListener('click', function () {
    let num = queueDataStructure.MAX_SIZE - 1 - queueDataStructure.queueControl.length
    if (queueDataStructure.queueControl.length == 0) {
        contador = 0
    }
    if (num == 0) {
        alert("Queue Overflow")

    } else {
        queueDataStructure.queueControl.length
        console.log(divQueue)
        divQueue[contador + 11].innerHTML = queueItem.value
        queueDataStructure.enqueue(queueItem.value)
        queueDataStructure.queueControl.forEach((elm, index) => {
            divQueue[index + 11].innerHTML = elm
        })
        contador++

    }
});
btnTQueue.addEventListener('click', function () {
    let num = queueDataStructure.MAX_SIZE - queueDataStructure.queueControl.length
    if (queueDataStructure.queueControl.length == 0) {
        contador2 = 0
    }
    if (queueDataStructure.queueControl.length == 0) {
        alert("Queue underflow")
    } else {
        console.log(divQueue)
        divQueue[queueDataStructure.queueControl.length + 10].innerHTML = ""
        queueDataStructure.dequeue()
        //queueDataStructure.queueControl.forEach((elm, index) => {
        //  divQueue[index + 11].innerHTML = elm
        //  })
        contador--
    }
});