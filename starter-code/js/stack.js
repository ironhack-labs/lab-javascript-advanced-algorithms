$(document).ready(function() {
  stack = new StackDataStructure();

  // Handle the add button stack
  $('#stack-add').on("click", function() {
    var data = $('#stack-data').val();

    if (stack.canPush()) {
      stack.push(data);
      $('.stack .item:last').removeClass('item');
    } else {
      $('.stack-item:first').css('backgroundColor', '#FF0040');
    }
  });

  // Handle the TAkE button stack
  $('#stack-take').on("click", function() {

    if (!stack.isEmpty()) {
      stack.pop();
      $('.stack .item:first').addClass('item');
    } else {
      $('.stack-item:last').css('backgroundColor', '#FF0040');
    }
  });

});
