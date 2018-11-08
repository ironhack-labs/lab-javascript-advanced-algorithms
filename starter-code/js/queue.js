$(document).ready(function(){
  var queue = new QueueDataStructure();
  var canEnqueue = true
  var dequeueElement
  var inputQueue = document.getElementById("queue-input")
  var elementQ
  var elementsQ = []
  var dequeuer = 0
  // var queuer = 1

  // console.log(stack.MAX_SIZE)

  // Enqueue it
  function enqueueIt(){
    elementQ = "queue" + queue.queueControl.length
    elementQ = document.getElementById(elementQ)
    elementQ.firstChild.innerText = inputQueue.value
    elementQ.className = "fillq"
  }

  // Dequeue it
  function dequeueIt(item){
    elementQ = "pop" + dequeuer
    elementQ = document.getElementById(elementQ)
    elementQ.firstChild.innerText = item
    elementQ.className = "take-container"
    freeQueue(item)
  }

  // Free space
  function freeQueue(item){
    elementsQ = document.getElementsByClassName("fillq")
    var i = 0
    while(i < elementsQ.length && elementsQ[i].firstChild.innerText != item){
      i++
    }
    if(elementsQ[i].firstChild.innerText === item){
      // console.log("sale " + item)
      elementsQ[i].firstChild.innerText = ""
      elementsQ[i].className = "element-container"
    } else {
      console.log("revisa " + item)
    }
  }

  // Bind the click event of each element to a function
  $('.add-queue').click(function () {
    // TODO: write some code here
    if(inputQueue.value){
      canEnqueue = queue.canEnqueue()
      if(canEnqueue){
        queue.enqueue(inputQueue.value)
        enqueueIt()
      } else {
        alert("Queue Overflow!")
      }
    }
    else {
      alert("Add element first ¬¬")
    }
    inputQueue.value = ""
  });

  $('.take-queue').click(function () {
    // TODO: write some code here
    dequeueElement = queue.dequeue()
    if(dequeueElement === "Queue Underflow"){
      alert(dequeueElement)
    } else {
      // console.log(takeElement)
      dequeuer++
      if(dequeuer === 6){
        dequeuer = 1
      }
      dequeueIt(dequeueElement)
    }
  });
});
