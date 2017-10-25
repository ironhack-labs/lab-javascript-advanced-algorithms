$(function(){
  stack = new StackDataStructure();

  console.log("Max stack size: " + stack.MAX_SIZE);

  $('.stack .add').click(function(){
    $('.stack .juan').last().toggleClass('juan active');
  });

  $('.stack .remove').click(function(){
    $('.stack .active').first().toggleClass('active juan');
  });

});
