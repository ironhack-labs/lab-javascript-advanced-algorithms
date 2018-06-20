$(document).ready(function(){
  var stack = new StackDataStructure();
  var addStackBtn = $("#stack-add");
  var takeStackBtn = $("#stack-take");
  var stackInput = $('#stack-input');
  function printStack(arr){
    $(".stack-item").removeClass('active').text('');
    for(var i = 0; i < arr.length; i++){
      $('.stack-wrap .stack-item:nth-child('+(10 - i)+')').addClass('active').text(arr[i]);
    }
  }
  addStackBtn.click(function(){
    if(stack.push(stackInput.val()) === 'Stack Overflow'){
      return alert('Stack Overflow');
    }
    printStack(stack.stackControl);
    stackInput.val('');
  });
  takeStackBtn.click(function(){
    if(stack.pop() === 'Stack Underflow'){
      return alert('Stack Underflow');
    }
    printStack(stack.stackControl);
  });
});