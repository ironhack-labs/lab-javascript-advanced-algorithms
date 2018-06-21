$(document).ready(function(){
    var queue = new QueueDataStructure()
  
    
  
    $('#queue').click(queueElement)
    $('#unqueue').click(unqueueElement)
  
  
    //Add to queue
    function queueElement() {
      var element = $('#queue').val()
      if (element != "") {
        printQueue(queue.enqueue(element))
        $('#queue').val('')
      }
    }
  
  
    //Button clicked
    function unqueueElement() {
      var a = queue.dequeue()
      if (a != 'Queue Underflow') {
        printQueue(queue.queueControl)
      }
      printQueue(a)
    }
  
    //Print the queue
    function printQueue(arg) {
      if (arg == 'Queue Overflow') {
        $('#queue').append('<div class="error">' + arg + '</div>')
      } else if (arg == 'Queue Underflow'){
        
      } else {
        var index = 0
        for (;index < queue.queueControl.length; index++) {
        }
      }
    }   
  })