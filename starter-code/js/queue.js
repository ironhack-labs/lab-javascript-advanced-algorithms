function drawQueueDataStructure (queue) {
  document.getElementById('queueBuffer').innerHTML = ''
  var queueNode = document.createElement('div')
  for(var i = 0; i < queue.MAX_SIZE; i++) {
    var element = document.createElement('div')

    element.id = i;
    element.className = queue.queueControl.length > i ? 'box full ' : 'box'
    element.innerHTML = queue.queueControl.length > i ? (i+1 === queue.MAX_SIZE ? 'Stack Overflow' : queue.queueControl[i]) : ''

    queueNode.append(element)
  }

  document.getElementById('queueBuffer').append(queueNode)
}

function addElementToQueue () {
  queue.enqueue(document.getElementById('queueInput').value)
  drawQueueDataStructure(queue)
  document.getElementById('queueInput').value = ''
  console.log(queue.queueControl)

}

function removeElementFromQueue () {
  queue.dequeue(document.getElementById('queueInput').value)
  drawQueueDataStructure(queue)
  document.getElementById('queueInput').value = ''
  console.log(queue.queueControl)

}
