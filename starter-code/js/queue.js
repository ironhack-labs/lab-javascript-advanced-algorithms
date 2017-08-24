var queue;

$(document).ready(function(){

  queue = new QueueDataStructure()

  $('#add-queue-btn').on('click', function(){
    var inputText = $('#queue-input-text').val()

    var enqueueResult = queue.enqueue(inputText)

    drawQueueAfterPush(enqueueResult)
  })

  $('#remove-queue-btn').on('click', function(){
    var dequeueResult = queue.dequeue()

    drawQueueAfterPop(dequeueResult)
  })
})

function drawQueueAfterPush(enqueueResult){
  enqueueResult == 'Queue Overflow' ? drawQueueOutOfBounds('last', 'Overflow') : drawNormalQueue()
}

function drawQueueAfterPop(dequeueResult){
  dequeueResult == 'Queue Underflow' ? drawQueueOutOfBounds('first', 'Underflow') : drawNormalQueue()
}

function drawQueueOutOfBounds(child, overUnderFlow){
  var $queueOutOfBoundsDiv = $('.queue-container div:' + child + '-child()')
  $queueOutOfBoundsDiv.addClass('out-of-bounds')
  $queueOutOfBoundsDiv.text('Queue ' + overUnderFlow)
}

function drawNormalQueue(){
  removeQueueStyles()

  var numElements = queue.queueControl.length
  var childrenNum = 2
  var indexQueue = 0;
  var $element

  if(numElements == 0){
    $element = $('.queue-container div:nth-child(' + childrenNum + ')')
    $element.removeClass('full')
    $element.text('')
  }

  while(numElements > 0){
    $element = $('.queue-container div:nth-child(' + childrenNum + ')')
    $element.addClass('full')
    $element.text(queue.queueControl[indexQueue])

    indexQueue++
    childrenNum++
    numElements--
  }
}

function removeQueueStyles(){
  var $queueOverflowDiv = $('.queue-container div:first-child()')
  $queueOverflowDiv.removeClass('out-of-bounds')
  $queueOverflowDiv.text('')

  var $queueUnderflowDiv = $('.queue-container div:last-child()')
  $queueUnderflowDiv.removeClass('out-of-bounds')
  $queueUnderflowDiv.text('')

  var $fullElements = $('.queue-container').children('.full')
  for(var i = 0; i < $fullElements.length; i++){
    $($fullElements[i]).removeClass('full')
    $($fullElements[i]).text('')
  }
}
