$(document).ready(function () {
  var stack = new StackDataStructure();
  $('.add-stack').click(function () {
    $('.stack-element.e' + stack.MAX_SIZE).removeClass('overflow');
    var value = $('.input-stack').val()
    if (stack.canPush()) {
      stack.stackControl.push(value);
      var index = stack.MAX_SIZE - stack.stackControl.length + 1;
      $('.stack-element.e' + index).removeClass('light').addClass('dark').html('<p class="a"> ' + value + '</p>'); 
      if (index === 1) { $('.stack-element.e' + index).removeClass('dark').addClass('overflow').text('STACK OVERFLOW!!!'); }
    }  
  });
  $('.delete-stack').click(function () {
    if (!stack.isEmpty()) {
    var index = stack.MAX_SIZE - stack.stackControl.length + 1;
    $('.stack-element.e' + index).removeClass('overflow dark').addClass('light').text('');
    stack.stackControl.pop();
    if (index === 8) { $('.stack-element.e' + index).removeClass('light').addClass('overflow').text('STACK UNDERFLOW!!!'); index = 1;}
    }
  });
});




