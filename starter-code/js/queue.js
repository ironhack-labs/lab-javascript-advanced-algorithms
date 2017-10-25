// Paint Boxes


// Buttons click
$('document').ready(function(){
  var myQueue = new QueueDataStructure();
  // First item is always painted (MAX_SIZE MIN 1)
  //var toPaint = document.querySelector('.queue').cloneNode(true);
  for (var x=1; x < myQueue.MAX_SIZE ; x++){
    $(".queue:first").clone().appendTo( ".queuelist" );
  }

  $('.addQueue').on('click',function(){
    var result = myQueue.enqueue($('.queueData > input').val());
    if (result == ""){
      result = 'NO DATA';
    }
    if (result == 'Queue Overflow'){
          console.log($('.queuelist .queue:first'));
        $('.queue:first').addClass('warning');
        $('.queue:first > p').html('Queue Overflow');
    }
    else{
      $('.queue').removeClass('warning');
      $('.queue.empty:last > p').html(result);
      $('.queue.empty:last').toggleClass("empty full");
    }
  });

  $('.takeQueue').on('click',function(){
    var items = myQueue.dequeue();
    if(items == 'Queue Underflow'){
      $('.queue:last').addClass('warning');
      $('.queue:last > p').html('Queue Overflow');
      // Paint last item red

    }else{
      $('.queue').removeClass('warning');
      $('.queue.full:first > p').html('EMPTY');
      $('.queue.full').toggleClass('empty full');
      for (var z = 0; z < myQueue.queueControl.length; z++){
        $('.queue.empty:last').toggleClass('empty full');
      }

      // Paint last empty (toggleClass)
    }
  });


});
