var queue = new QueueDataStructure
var addQueueBtn = document.querySelector("#add-btn")
var takeQueueBtn = document.querySelector("#take-btn")
var queueOverflow = document.getElementsByClassName("queue-overflow")[1]
var queueUnderflow = document.getElementsByClassName("queue-overflow")[0]
var queueElements = document.getElementsByClassName("queue-element")
var queueElementsArr = Array.from(queueElements);
var queueNewElm = ""
var firstEmptyIndex

function fillQueue(queueNewElm){

    for (var i = 0; i < queueElementsArr.length; i++){
        if (!queueElementsArr[i].className.includes("active")){
            firstEmptyIndex = i
            break;
        }
    }

    if (firstEmptyIndex === 0){
        queueElementsArr[0].textContent = queueNewElm
        queueElementsArr[0].className += " active"
    } else {
        queueElementsArr[firstEmptyIndex].className += " active"
        for (var i = firstEmptyIndex; i > 0; i--){
            queueElementsArr[i].textContent = queueElementsArr[i - 1].textContent
        }
        queueElementsArr[0].textContent = queueNewElm
    }

}

function unfillQueue(){
    for (var i = queueElementsArr.length - 1; i >= 0; i--){
        if(queueElementsArr[i].className.includes("active")){
            queueElementsArr[i].className = "queue-element";
            queueElementsArr[i].textContent = ""
            break;
        }
    }
}

function queueOverflowFn(){
    queueOverflow.style.visibility = 'visible';
}

function queueUnderflowFn(){
    queueUnderflow.style.visibility = 'visible';
}

addQueueBtn.onclick = function () {
    if (queueUnderflow.style.visibility === 'visible'){
        queueUnderflow.style.visibility = 'hidden'
    }
    queueNewElm = document.querySelector("#add-element-to-queue").value
    if (queue.enqueue(queueNewElm) === "Queue Overflow") {
        queueOverflowFn()
    } else {
        fillQueue(queueNewElm)
    }
}

takeQueueBtn.onclick = function () {
    
    if (queueOverflow.style.visibility === 'visible'){
        queueOverflow.style.visibility = 'hidden'
    }
    if (queue.dequeue() === "Queue Underflow") {
        queueUnderflowFn()
    } else {
        unfillQueue()
    }
}