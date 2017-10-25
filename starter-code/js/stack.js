var stack = new StackDataStructure();

var stackInput = $('#stackelement');
// var stackDiv = $('stack-div');

$('#add-stack').on('click', function(){
  if(stack.push(stackInput.val()) !== "Stack Overflow"){
    if(stack.stackControl.length == 1){

      $('.stack-element:last').addClass('addedelement');
      $('.stack-element:last').text(stackInput.val());
      stackInput.text("");
    } else {

      $('.addedelement:first').prev().addClass('addedelement');
      $('.addedelement:first').text(stackInput.val());
      stackInput.text("");
    }
  } else {
    alert("Stack Overflow");
  }

});

$('#delete-stack').on('click', function(){
  if(stack.pop() !== 'Stack Underflow'){
    $('.addedelement:first').text("");
    $('.addedelement:first').removeClass("addedelement");
  } else {
    alert('Stack Underflow');
  }
});
