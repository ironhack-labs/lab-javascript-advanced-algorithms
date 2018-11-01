$(document).ready(function(){
    var stack = new StackDataStructure();
    
    $('.add').click(function () {
      var textToAdd = $('input').val();

      if(stack.stackControl.length === stack.MAX_SIZE){
        setTimeout(removeOverflow, 500);  
        $('.tabla-stack').prepend('<div class="overflow">Stack Overflow<div>');
        $('.add').toggleClass('add').toggleClass('off'); //Inutilizo el botón hasta q se desaparezca 'Stack Overflow'
      } else {
        stack.push();
        $('.empty').last().toggleClass('empty').toggleClass('full').text(textToAdd);
      } 
      $('input').val("");   
    });

    $('.take').click(function () {
        if(stack.stackControl.length === 0){
            setTimeout(removeUnderflow, 500);  
            $('.tabla-stack').append('<div class="overflow">Stack Underflow<div>');
            $('.take').toggleClass('take').toggleClass('off'); //Inutilizo el botón hasta q se desaparezca 'Stack Underflow'
          } else {
            stack.pop();
            $('.full').first().toggleClass('empty').toggleClass('full').text('');
          } 
          $('input').val("");

    });

    function removeOverflow(){
        $('.tabla-stack > div').first().remove();
        $('.off').toggleClass('add').toggleClass('off');
    }
    function removeUnderflow(){
        $('.tabla-stack > div').last().remove();
        $('.off').toggleClass('add').toggleClass('off');
    }
  });