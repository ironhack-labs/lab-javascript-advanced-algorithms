let qadd = document.getElementById("qadd")
let qinput = document.getElementById("qinput")
let qdivs = document.getElementsByClassName("q")
let qover = document.getElementsByClassName("qover")
let qtake = document.getElementById("qtake")
let qunder = document.getElementsByClassName("qunder")
let queue = new QueueDataStructure()

qadd.addEventListener("click", () => {

    if (queue.index>=queue.MAX_SIZE) {
        qover[0].classList.add("flow")
        qover[0].classList.remove("normal")

    } else {

        if (!queue.isEmpty()) {
            qunder[0].classList.remove("flow")
            qunder[0].classList.add("normal")

        }
        queue.enqueue(qinput.value)

        qdivs[queue.index].classList.add("full")
        qdivs[queue.index].classList.remove("empty")
        qdivs[queue.index].innerHTML = qinput.value
        queue.index++
    }


})

qtake.addEventListener("click", () => {

    if (!queue.index) {

        qunder[0].classList.add("flow")
        qunder[0].classList.remove("normal")

    } else {
        if (!queue.canEnqueue()) {
            qover[queue.index-1].classList.remove("flow")
            qover[queue.index-1].classList.add("normal")
        }
        queue.enqueue()
        qdivs[queue.index-1].classList.add("empty")
        qdivs[queue.index-1].classList.remove("full")
        qdivs[queue.index-1].innerHTML = ""
        queue.index--
    }
})