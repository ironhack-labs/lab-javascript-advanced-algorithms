//Stack Selectors
var stack = new StackDataStructure();
var stackInput = $('#stackelement');
var addStackBtn = $('#add-stack');
var removeStackBtn = $('#delete-stack');
var stackOverError = $('#stack-div .over');
var stackUnderError = $('#stack-div .under');
var removeStackList = $('#removed_stack ul');

//Queue Selectors
var queue = new QueueDataStructure();
var queueInput = $('#queue-input');
var addQueueBtn = $('#add-queue');
var removeQueueBtn = $('#delete-queue');
var queueOverError = $('#queue-container .over');
var queueUnderError = $('#queue-container .under');
var removeQueueList = $('#removed_queue ul');

//Button Actions
addStackBtn.click(function(){
  //Check Value
  if(stackInput.val() == ''){
    alert('Favor de ingresar un valor');
    return;
  }
  
  //Check for overflow
  var pushResult = stack.push(stackInput.val());

  if(pushResult == 'Stack Overflow'){
    stackOverError.text(pushResult);
    stackOverError.addClass('show');
  } else {
    stackUnderError.removeClass('show');
    for(var i = 0; i < pushResult.length; i++){
      var turn = $('.stack-element:nth-child(' + (14 - i) + ')');
      turn.addClass('addedelement');
      turn.text(pushResult[i]);
    }
  }
});

removeStackBtn.click(function(){
  var popResult = stack.pop();

  if(popResult == 'Stack Underflow'){
    stackUnderError.text(popResult);
    stackUnderError.addClass('show');
  } else {
    $('.stack-element').removeClass('addedelement');
    $('.stack-element').text('');
    stackOverError.removeClass('show');
    for(var i = 0; i < stack.stackControl.length; i++){
      var turn = $('.stack-element:nth-child(' + (14 - i) + ')');
      turn.addClass('addedelement');
      turn.text(stack.stackControl[i]);
    }
    var newLi = $('<li></li>');
    newLi.text(popResult);
    removeStackList.append(newLi);
  }
});

addQueueBtn.click(function(){
  //Check Value
  if(queueInput.val() == ''){
    alert('Favor de ingresar un valor');
    return;
  }
  
  //Check for overflow
  var pushResult = queue.enqueue(queueInput.val());

  if(pushResult == 'Queue Overflow'){
    queueOverError.text(pushResult);
    queueOverError.addClass('show');
  } else {
    queueUnderError.removeClass('show');
    for(var i = 0; i < pushResult.length; i++){
      var turn = $('.queue-element:nth-child(' + (i + 1) + ')');
      turn.addClass('addedelement');
      turn.text(pushResult[i]);
    }
  }
});

removeQueueBtn.click(function(){
  var popResult = queue.dequeue();

  if(popResult == 'Queue Underflow'){
    queueUnderError.text(popResult);
    queueUnderError.addClass('show');
  } else {
    $('.queue-element').removeClass('addedelement');
    $('.queue-element').text('');
    queueOverError.removeClass('show');
    for(var i = 0; i < queue.queueControl.length; i++){
      var turn = $('.queue-element:nth-child(' + (i + 1) + ')');
      turn.addClass('addedelement');
      turn.text(queue.queueControl[i]);
    }
    var newLi = $('<li></li>');
    newLi.text(popResult);
    removeQueueList.append(newLi);
  }
});
