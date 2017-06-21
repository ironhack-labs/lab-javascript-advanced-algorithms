$(document).ready(function(){

  var stack;
  $('.stack .add').on('click', function() {
    stack = new StackDataStructure();
    stack.isEmpty();
    stack.canPush();
    stack.push(0);

    $(".stack .unpint:last").addClass('active');
    $(".stack .unpint:last").removeClass('disabled');
  });

  $('.stack .take').on('click', function() {
    stack = new StackDataStructure();
    stack.isEmpty();
    stack.canPush();
    stack.pop();

    $(".stack .pint:first").addClass('disabled');
    $(".stack .pint:first").removeClass('active');
  });

});
