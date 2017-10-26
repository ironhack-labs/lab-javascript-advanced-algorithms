$(function() {
  stack = new StackDataStructure();

  console.log("Max stack size: " + stack.MAX_SIZE);
  // Creamos tantos li como defina el MAX_SIZE
    // for(var i=0; i < stack.MAX_SIZE, i++){
    //   $('ul').html('<li class="item not-piled"></li>');
    // }

  $('.stack .add').click(function() {
    var input_text = $('.stack .controls input').val();
    $('.stack .not-piled').last().toggleClass('not-piled active').html(input_text);
    $('.stack .controls input').val(null);
  });

  $('.stack .remove').click(function() {
    $('.stack .active').first().toggleClass('active not-piled').html('');
  });

});
