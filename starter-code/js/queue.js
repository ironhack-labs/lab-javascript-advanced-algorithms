
$(document).ready(function(){
  var queue = new QueueDataStructure()

  var queueDivs = ''
  for (var i = 0; i < queue.MAX_SIZE; i++) {
    queueDivs += '<div></div>'
  }

  $('#queue').html(queueDivs)
  $('#queueElement').click(queueElement)
  $('#unqueueElement').click(unqueueElement)


  //Function called when add to queue button is clicked
  function queueElement() {
    var element = $('#queueInput').val()
    if (element != "") {
      printQueue(queue.enqueue(element))
      $('#queueInput').val('')
    }
  }


  //Function called when take from queue button is clicked
  function unqueueElement() {
    var ret = queue.dequeue()
    if (ret != 'Queue Underflow') {
      printQueue(queue.queueControl)
    }
    printQueue(ret)
  }

  //Function that printe the queue
  function printQueue(arg) {
    if (arg == 'Queue Overflow') {
      $('#queue').append('<div class="error">' + arg + '</div>')
    } else if (arg == 'Queue Underflow'){
      queueDivs = ''
      queueDivs += '<div class="error">' + arg + '</div>'
        for (var i = 1; i < queue.MAX_SIZE; i++) {
        console.log('hey')
        queueDivs += '<div></div>'
      }
      $('#queue').html(queueDivs)
    } else {
      var queueDivs = ''
      var index = 0
      for (;index < queue.queueControl.length; index++) {
        queueDivs += '<div class="active">' + queue.queueControl[index] + '</div>'
      }
      for (; index < queue.MAX_SIZE; index++) {
        queueDivs += '<div></div>'
      }
      $('#queue').html(queueDivs)
    }
  }








})
