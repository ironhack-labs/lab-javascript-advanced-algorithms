$(document).ready(function() {
  var stack;
  stack = new StackDataStructure();
  $('.c-left-button .btn-add').on('click', function() {
    stack.isEmpty();
    stack.canPush();
    stack.push(0);

    $('.left:last').addClass('azul-L');
    $('.left:last').removeClass('left');

  });

  $('.c-left-button .btn-take').click(function() {
    $('.azul-L:first').addClass('left');
    $('.azul-L:first').removeClass('azul-L');


  });


});
