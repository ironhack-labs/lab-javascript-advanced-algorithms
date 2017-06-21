$(document).ready(function(){

  var stack;
  stack = new StackDataStructure();
  $('#stack .add').on('click', function() {
    stack.isEmpty();
    stack.canPush();
    stack.push(0);


    $("#stack .disabled:last").addClass('active');
    $("#stack .disabled:last").removeClass('disabled');
  });

  $('#stack .take').on('click', function() {
    stack.isEmpty();
    stack.canPush();
    stack.pop();

    $("#stack .active:first").addClass('disabled');
    $("#stack .active:first").removeClass('active');
  });

});
