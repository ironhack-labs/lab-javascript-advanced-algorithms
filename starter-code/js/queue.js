let queue = new QueueDataStructure()
const queueUlDOMEl = document.querySelector(".queue-container")
const queueLiDOMEl = document.querySelectorAll(".emptyqueue");
const queueAddBtn = document.querySelector(".queue-add");
const queueRmvBtn = document.querySelector(".queue-remove");



for (i = 0; i < queue.MAX_SIZE; i++) {
    let e = document.createElement("li")
    e.className = `emptyqueue b${queue.MAX_SIZE-i}`;
    let t = document.createTextNode("EMPTY")
    queueUlDOMEl.appendChild(e).appendChild(t)
}



queueAddBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let inputText = document.querySelector(".queueAddFld").value
    if (inputText === "") {
        alert("¡Pon el nombre de la pizza! ;)")
        return false
    }
    queue.enqueue(inputText)
    printQueueEl()
    queueRmvBtn.setAttribute("class", "queue-remove")
    if (queue.queueControl.length === queue.MAX_SIZE) {
        queueAddBtn.setAttribute("class", "queue-add blocked")
    }

})

queueRmvBtn.addEventListener("click", function (e) {
    e.preventDefault()
    queue.dequeue()
    removeQueueEl()
    if (queue.queueControl.length === 0) {
        queueRmvBtn.setAttribute("class", "queue-remove blocked")
    }
    queueAddBtn.setAttribute("class", "queue-add")
})


function printQueueEl() {
    let liID = (queue.queueControl.length)
    let liID2 = liID.toString()
    let queueLastLi = document.querySelector(`.b${liID2}`)
    queueLastLi.className = `b${liID2} added`
    let t = document.createTextNode(document.querySelector(".queueAddFld").value)
    queueLastLi.innerHTML = ""
    queueLastLi.appendChild(t)
}

function removeQueueEl() {
    let qRev = queue.queueControl.reverse()
    for (i = 1; i <= queue.queueControl.length; i++) {
        let actual = document.querySelector(`.b${i}`)
        actual.innerHTML = qRev[i - 1]
        if (i === queue.queueControl.length) {
            let actual = document.querySelector(`.b${i+1}`)
            actual.innerHTML = "EMPTY"
            actual.className = `emptyqueue b${i+1}`
        }
    }
}