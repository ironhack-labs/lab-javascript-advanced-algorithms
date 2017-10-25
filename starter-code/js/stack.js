$(function() {
  stack = new StackDataStructure();

  console.log("Max stack size: " + stack.MAX_SIZE);

  $('.stack .add').click(function() {
    var input_text = $('.stack .controls input').val();
    $('.stack .not-piled').last().toggleClass('not-piled active').html(input_text);
    $('.stack .controls input').val(null);
  });

  $('.stack .remove').click(function() {
    $('.stack .active').first().toggleClass('active not-piled').html('');
  });

});
