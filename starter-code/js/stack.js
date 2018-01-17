$(document).ready(function () {
  var stack = new StackDataStructure();
  $('.add-stack').click(function () {
    var value = $('.input-stack').val();
    console.log(value);
    if (stack.canPush()) {
      stack.stackControl.push(value);
      var index = stack.MAX_SIZE - stack.stackControl.length + 1;
      console.log(index);
      console.log(stack.stackControl.length);
      console.log($('.stack-element:nth-child(' + index + ')'));
      $('.stack-element.e' + index).removeClass('light').addClass('dark').html('<p class="p"> ' + value + '</p>');      
    } else {
    $('.stack-element.e' + index).removeClass('light').addClass('overflow').text('STACK OVERFLOW!!!');    
    }  
  });
});



