var stack = new StackDataStructure();

var stackInput = $('#stackelement');

$('#add-stack').on('click', function(){
  if(stack.push(stackInput.val()) !== "Stack Overflow"){
    $('.stack-element:not(.addedelement):last').addClass('addedelement').text(stackInput.val());
    $('.error-stack.under').css({display:'none'});
    //Reset input value
    stackInput.val("");
  } else {
    $('.error-stack.over').css({display:'flex'});
  }

});

$('#delete-stack').on('click', function(){
  $('.error-stack.over').css({display:'none'});

  (stack.pop() !== 'Stack Underflow') ? $('.addedelement:first').text("").removeClass("addedelement") :
  $('.error-stack.under').css({display:'flex'});
});
