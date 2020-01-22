let qadd = document.getElementById("qadd")
let qinput = document.getElementById("qinput")
let qdivs = document.getElementsByClassName("q")
let qover = document.getElementsByClassName("qover")
let qtake = document.getElementById("qtake")
let qunder = document.getElementsByClassName("qunder")
let queue = new QueueDataStructure()

qadd.addEventListener("click", () => {

    if (!queue.canEnqueue()) {
        qover[0].classList.add("flow")
        qover[0].classList.remove("normal")

    } else {

        if (queue.isEmpty()) {
            qunder[0].classList.remove("flow")
            qunder[0].classList.add("normal")

        }
        queue.enqueue(qinput.value)

        qdivs[queue.queueControl.length - 1].classList.add("full")
        qdivs[queue.queueControl.length - 1].classList.remove("empty")
        qdivs[queue.queueControl.length - 1].innerHTML = qinput.value
    }


})

qtake.addEventListener("click", () => {

    if (queue.isEmpty()) {

        qunder[0].classList.add("flow")
        qunder[0].classList.remove("normal")

    } else {
        if (!queue.canEnqueue()) {
            qover[0].classList.remove("flow")
            qover[0].classList.add("normal")
        }
        queue.enqueue()
        qdivs[queue.queueControl.length - 1].classList.add("empty")
        qdivs[queue.queueControl.length - 1].classList.remove("full")
        qdivs[queue.queueControl.length - 1].innerHTML = ""
    }
})