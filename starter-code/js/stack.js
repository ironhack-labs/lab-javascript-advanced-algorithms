$( document ).ready(function() {
var stack = new StackDataStructure();

  $('#addStack').on('click', function(){
    console.log(stack.push($('#textStack').val()));
    $('.left li:nth-child('+ (stack.MAX_SIZE - stack.stackControl.length+1)+')').css('background', '#7db7e9').append($('#textStack').val());

  });

  $('#deleteStack').on('click', function(){
    console.log(stack.pop());
    console.log(stack.stackControl);
    $('.left li:nth-child('+(stack.MAX_SIZE - stack.stackControl.length)+')').css('background', 'white').empty();
  });

});
