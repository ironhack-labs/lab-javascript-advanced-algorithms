let queue = new QueueDataStructure

var addToQueue = document.getElementById("add-to-queue");
var removeFromQueue = document.getElementById("remove-from-queue");
var queueInput = document.getElementById("queue-input");
var queueList = document.querySelector(".queue-list");
var queueRemovedItem = document.querySelector(".current-queue-take");


function addItemToQueue (){
  let liHtml = ""
  queue.enqueue(queueInput.value)
  for(let i = queue.queueControl.length-1; i >= 0; i-- ){
    liHtml+= `<li>${queue.queueControl[i]}</li>`
  }
  queueList.innerHTML = liHtml
}

function removeItemFromQueue (){
  let liHtml = ""
  let toBeRemoved = queue.queueControl[queue.queueControl.length-1]
  queue.dequeue()
  for(let i = queue.queueControl.length-1; i >= 0; i-- ){
    liHtml+= `<li>${queue.queueControl[i]}</li>`
  }
  queueList.innerHTML = liHtml
  queueRemovedItem.innerHTML = toBeRemoved
}

addToQueue.onclick = addItemToQueue
removeFromQueue.onclick = removeItemFromQueue