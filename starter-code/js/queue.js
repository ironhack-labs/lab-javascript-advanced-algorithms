var queue = new QueueDataStructure()                //Creamos nuestro objeto
var btnAddQ = document.getElementById('btnAddQ')    
var btnTakeQ = document.getElementById('btnTakeQ')
let text = document.getElementById("input1")

function printUnshift() {                           //agregamos los valores al div
    let test = [...queue.queueControl]
    for (i = 0; i < queue.queueControl.length; i++){
        let div = document.getElementById(i +21)
        div.style.backgroundColor = ("lightsteelblue")
        let p = div.getElementsByTagName('p')
        p[0].innerHTML = (test.shift())
        console.log(div)
    }
}

function printPopQ() {                              //Quitamos los valores al div
    let acc2 = queue.queueControl.length
    let div = document.getElementById(acc2 + 21)
    div.style.backgroundColor = ("lightgray")
    let p = div.getElementsByTagName('p')
    p[0].innerHTML = ("")
    console.log(div)
}

btnAddQ.addEventListener('click', function () {     //Función para agregar valores al objeto
    if (queue.canEnqueue()) {                       //y llamar a las funciones
        queue.enqueue(text.value)
        printUnshift()
    } else {
        alert("Queue Overflow")
    }
})

btnTakeQ.addEventListener('click', function () {    //Función para quitar valores al objeto
    if (queue.isEmpty()) {                          //y llamar a las funciones
        alert("Queue Underflow")
    } else {
        queue.dequeue()
        printPopQ()
    }
})