var queue = new QueueDataStructure();

let botAddQ = document.getElementsByClassName('container')[1].children[3]
let botTakeQ = document.getElementsByClassName('container')[1].children[4]
let meterTextoQ = document.getElementsByClassName('container')[1].children[2]

let elementosQ = document.getElementsByClassName('container')[1].children
//let padre = document.getElementsByClassName('yo')
console.log(padre)
//console.log(botAddQ, botTakeQ, meterTextoQ)

botAddQ.addEventListener('click', function () {
    //console.log("he clicado el add")
    if (queue.MAX_SIZE == queue.queueControl.length) {
        alert("no se pueden meter mas elementos")
    }
    queue.enqueue(meterTextoQ.value)
    let num = queue.MAX_SIZE - queue.queueControl.length + 5
    //console.log(num, queue.queueControl.length)
    elementosQ[num].innerText = meterTextoQ.value

    console.log(num, queue.queueControl.length)
})

botTakeQ.addEventListener('click', function () {
    if (queue.queueControl.length == 0) {
        alert("no hay elementos que sacar")
    }
    //console.log("he clicado el take")
    let num = 14
    console.log(num, queue.queueControl.length)
    let nuevoEnlace = document.createElement("div");
    //padre.append(nuevoEnlace)
    elementosQ[num].remove()

    //padre.appendChild(nuevoEnlace);
    queue.dequeue()
})

//var nuevoEnlace = document.createElement("a");

/*var queue = new queueDataStructure();

let botAdd = document.getElementsByTagName('button')[0]
let botTake = document.getElementsByTagName('button')[1]
let meterTexto = document.getElementById('texto')

let elementos = document.getElementsByTagName('div')

//console.log(botAdd, botTake, meterTexto, elemento3)

botAdd.addEventListener('click', function () {
    //console.log("he clicado el add")
    if(stack.MAX_SIZE == stack.stackControl.length){
        alert("no se pueden meter mas elementos")
    }
    stack.push(meterTexto.value)
    let num = stack.MAX_SIZE - stack.stackControl.length
    //console.log(num, stack.stackControl.length)
    elementos[num].innerText = meterTexto.value
    
    //console.log(num, stack.stackControl.length)
})

botTake.addEventListener('click', function () {
    if (stack.stackControl.length == 0) {
        alert("no hay elementos que sacar")
    }
    //console.log("he clicado el take")
    let num = stack.MAX_SIZE - stack.stackControl.length
    //console.log(num, stack.stackControl.length)
    elementos[num].innerHTML= ""
    stack.pop()
})*/