var stack = new StackDataStructure();

var stackInput = $('#stackelement');
// var stackDiv = $('stack-div');

$('#add-stack').on('click', function(){
  if(stack.push(stackInput.val()) !== "Stack Overflow"){
    if(stack.stackControl.length == 1){
      console.log("dsad" + stack.stackControl.length);
      $('.stack-element:last').addClass('addedelement');
      $('.stack-element:last').text(stackInput.val());
      stackInput.text("");
    } else {
      console.log("F");
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
    
  } else {
    alert('Stack Underflow');
  }
}
