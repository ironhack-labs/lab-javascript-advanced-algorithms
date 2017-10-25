// Paint Boxes


// Buttons click
$('document').ready(function(){
  var myStack = new StackDataStructure();
  // First item is always painted (MAX_SIZE MIN 1)
  for (var x=1; x < myStack.MAX_SIZE ; x++){
    console.log($(".stack:first"));
    $(".stack:first").clone().appendTo( ".stacklist" );
  }

  $('.addStack').on('click',function(){
    var result = myStack.push($('.stackData > input').val());
    if (result == ""){
      result = 'NO DATA';
    }
    console.log(result);
    if (result == 'Stack Overflow'){
      console.log("OVERFLOW");
        $('.stack.full:first > p').addClass('warning');
        $('.stack.full:first > p').html('Stack Overflow');
    }
    else{
      $('.stack > p').removeClass('warning');
      $('.stack.empty:last > p').html(result);
      $('.stack.empty:last').toggleClass("empty full");
    }
  });

  $('.takeStack').on('click',function(){
    var items = myStack.pop();
    if(items == 'Stack Underflow'){
      $('.stack:last > p').addClass('warning');
      $('.stack:last > p').html('Stack Overflow');

    }else{
      $('.stack > p').removeClass('warning');
      $('.stack.full:first > p').html('EMPTY');
      $('.stack.full:first').toggleClass('empty full');
    }
  });


});
