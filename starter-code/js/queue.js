let btnAddQ = document.getElementById('addQueue')
let btnTakeQ = document.getElementById('takeQueue')
let queue = new QueueDataStructure()
let txt3 = document.getElementById('input1')
let elements1 = document.getElementsByClassName('div1')
let txt2 = ""


btnAddQ.addEventListener('click', function () {
    if (queue.queueControl.length < 9) {
        let num = queue.MAX_SIZE - 1 - queue.queueControl.length
        elements1[num].innerText = txt3.value
        queue.enqueue(txt3.value)

    } else {
        elements1[0].innerText = `stack Overflow`
    }
})
btnTakeQ.addEventListener('click', function () {
    if (queue.queueControl.length > 0) {
        let num = queue.queueControl.length
        elements1[num].innerText = txt2
        queue.dequeue(txt3)
    } else {
        elements1[9].innerText = `stack Underflow`
        elements1[0].innerText = ``
    }

})
// let num = queue.MAX_SIZE - 1 - queue.queueControl.length
// elements1[num].innerText = txt3.value
// queue.unshift(txt3.value)