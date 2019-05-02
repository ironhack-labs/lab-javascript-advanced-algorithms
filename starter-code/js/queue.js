const queue = new QueueDataStructure
let queueContainer = document.getElementById('queue')
console.log(queueContainer)
console.log(queue.MAX_SIZE)

for (let i= 0; i <  queue.MAX_SIZE; i++){
  let div = document.createElement('div')
  div.setAttribute('class', 'queueBox')
  queueContainer.appendChild(div)
}

// LOGICA DE ADD

let enqueue = document.getElementById("enqueue")
let queueElm = document.getElementById("queueInput")
let queueBoxes = document.getElementsByClassName("queueBox")
let currentQueue = 0
let firstElmIn =0 

enqueue.onclick = () => {
  console.log("entra")
  queue.enqueue(queueElm.value)
  let currentQueueBox = queueBoxes[currentQueue]
  currentQueueBox.innerHTML = queueElm.value
  currentQueueBox.setAttribute("class", "stackBox fill")
  console.log(queue.queueControl)
}

let dequeue = document.getElementById("dequeue")

dequeue.onclick = () => {
  let currentQueueBox = queueBoxes[currentQueue]
  currentQueueBox.setAttribute("class", "stackBox")
  currentQueueBox.innerHTML = ""
  queue.dequeue()
  console.log(stack.stackControl)
}

