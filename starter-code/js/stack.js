$( document ).ready(function() {
var stack = new StackDataStructure();

  $('#addStack').on('click', function(){
    if(stack.canPush()){
      console.log(stack.push($('#textStack').val()));
      $('.left li:nth-child('+ (stack.MAX_SIZE - stack.stackControl.length+1)+')').addClass('paint').removeClass('text-alert').empty().append($('#textStack').val());
    }else{
      $('.left li:nth-child('+ (stack.MAX_SIZE - stack.stackControl.length+1)+')').addClass('text-alert').text('Stack Overflow');
    }
  });

  $('#deleteStack').on('click', function(){

    if(stack.isEmpty()){
      $('.left li:nth-child('+(stack.MAX_SIZE - stack.stackControl.length)+')').addClass('text-alert').text('Stack Underflow');

      }else{
        console.log(stack.pop());
        console.log(stack.stackControl);
        $('.left li:nth-child('+(stack.MAX_SIZE - stack.stackControl.length)+')').removeClass('paint text-alert').empty();
      }
  });
  
});
