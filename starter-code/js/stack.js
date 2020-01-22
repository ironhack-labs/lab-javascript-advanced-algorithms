stack = new StackDataStructure()
queue = new QueueDataStructure()
celdA = document.querySelector(".a")
celdB = document.querySelector(".b")
celdC = document.querySelector(".c")
celdD = document.querySelector(".d")
celdE = document.querySelector(".e")



document.getElementById("add").onclick = e => {
    stack.push(1)
    queue.enqueue(1)
}

document.getElementById("take").onclick = e => {
    stack.pop()
    queue.dequeue()
}



