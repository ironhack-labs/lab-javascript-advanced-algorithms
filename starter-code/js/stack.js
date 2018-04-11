
//STACK

var stack = new StackDataStructure
$('#add-stack').on('click',function(){
  if(stack.stackControl.length < stack.MAX_SIZE){
  $('div[class*="error-stack under"').css('display','none')
  var text = $('#stackelement').val()
  stack.push($('#stackelement').val());
  $('#stackelement').val('');
  $('div[class$=nto]').last().text(text)
  $('div[class$=nto]').last().addClass('addedelement')
  console.log(stack.stackControl)
  }else{
    $('div[class*="error-stack over"').css('display','flex')
  }
})

$('#delete-stack').on('click',function(){
  if(stack.stackControl.length > 0){
    $('div[class*="error-stack over"').css('display','none')
  stack.pop();
  var removedText = $('div[class$=nt').first().text()
  $('#removed_stack').append('<div></div>')
  $('#removed_stack div:last-child').append(removedText)
  $('div[class$=nt]').first().text('')
  $('div[class$=nt]').first().removeClass('addedelement')
  console.log(stack.stackControl)
  }else{
    $('div[class*="error-stack under"').css('display','flex')
  }

})


//QUEUE

var queue = new QueueDataStructure
$('#add-queue').on('click',function(){
  if(queue.queueControl.length < queue.MAX_SIZE){
  $('div[class*="error-queue under"').css('display','none')
  var text = $('#queue-input').val()
  queue.enqueue($('#queue-input').val());
  $('#queue-input').val('');
  $('div[class$=nt0]').last().text(text)
  $('div[class$=nt0]').last().addClass('queue-item')
  console.log(queue.queueControl)
  }else{
    $('div[class*="error-queue over"').css('display','flex')
  }
})

$('#delete-queue').on('click',function(){
  if(queue.queueControl.length > 0){
    $('div[class*="error-queue over"').css('display','none')
  queue.dequeue();
  var removedText = $('div[class$=item').first().text()
  $('#removed_queue').append('<div></div>')
  $('#removed_queue div:last-child').append(removedText)
  $('div[class$=item]').first().text('')
  $('div[class$=item]').first().removeClass('queue-item')
  console.log(queue.queueControl)
  }else{
    $('div[class*="error-queue under"').css('display','flex')
  }

})