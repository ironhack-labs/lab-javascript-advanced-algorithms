var stack = new StackDataStructure();
var queue = new QueueDataStructure();

$(document).ready(function() {
  
  $("#s-add").click(function(){
    var element = $('#s-input').val();
    $('#s-input').val("").focus()
    
    var result = stack.push(element)
    
    if (result === "Stack Overflow")
    $('.s-over').removeClass('hide')
    else
    {
      $('.s-under').addClass('hide')
      console.log(stack.stackControl)
      for (var i=0; i<stack.stackControl.length; i++) {
        var nChild = 8 - i;
        $('.stack').children().eq(nChild).text(stack.stackControl[i])
      }
    }
  });
  
  
  $("#s-take").click(function(){
    var result = stack.pop();
    
    if (result === "Stack Underflow")
    $('.s-under').removeClass('hide')
    else 
    {
      $('.s-over').addClass('hide')
      // Clear display stack
      for (var i=0; i<stack.MAX_SIZE; i++) {
        var nChild = 8 - i;
        $('.stack').children().eq(nChild).text("")
      }
      // Update display with stack
      for (var i=0; i<stack.stackControl.length; i++) {
        var nChild = 8 - i;
        $('.stack').children().eq(nChild).text(stack.stackControl[i])
      }
    }
  });
  
  $("#q-add").click(function(){
    var element = $('#q-input').val();
    $('#q-input').val("").focus()
    
    var result = queue.enqueue(element);
    
    if (result === "Queue Overflow")
      $('.q-over').removeClass('hide')
    else
    {
      $('.q-under').addClass('hide')
      console.log(queue.queueControl)
      for (var i=0; i<queue.queueControl.length; i++) {
        var nChild = 8 - i;
        $('.queue').children().eq(nChild).text(queue.queueControl[i])
      }
    }
  });
  
  $("#q-take").click(function(){
    var result = queue.dequeue();
    
    if (result === "Queue Underflow")
      $('.q-under').removeClass('hide')
    else 
    {
      $('.q-over').addClass('hide')
      // Clear display queue
      for (var i=0; i<queue.MAX_SIZE; i++) {
        var nChild = 8 - i;
        $('.queue').children().eq(nChild).text("")
      }
      // Update display with queue
      for (var i=0; i<queue.queueControl.length; i++) {
        var nChild = 8 - i;
        $('.queue').children().eq(nChild).text(queue.queueControl[i])
      }
    }
  });
  
  
});