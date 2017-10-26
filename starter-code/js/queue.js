$(function() {
  queue = new QueueDataStructure();

  console.log("Max queue size: " + queue.MAX_SIZE);

  $('.queue .add').click(function() {
    var input_text = $('.queue .controls input').val();
    $('.queue .not-piled').first().toggleClass('not-piled active').html(input_text);
    $('.queue .controls input').val(null);
  });

  $('.queue .remove').click(function() {
    $('.queue .active').last().toggleClass('active not-piled').html('');
  });

});
