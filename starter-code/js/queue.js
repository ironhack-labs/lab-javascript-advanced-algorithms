$( document ).ready(function() {
var queue = new QueueDataStructure();

  $('#addQueue').on('click', function(){
    if(queue.canEnqueue()){
      console.log(queue.enqueue($('#textQueue').val()));
      for(var i=1; i<=queue.queueControl.length; i++){
        $('.right li:nth-child('+i+')').addClass('paint').removeClass('text-alert').text(queue.queueControl[i-1]);
      }
    }else{
      $('.right li:nth-child('+ (queue.MAX_SIZE)+')').addClass('text-alert').text('Queue Overflow');
    }

  });

  $('#deleteQueue').on('click', function(){

    if(queue.isEmpty()){
      $('.right li:nth-child('+(queue.queueControl.length+1)+')').addClass('text-alert').text('Queue Underflow');
    }else{
      console.log(queue.dequeue());
      console.log(queue.queueControl);
      $('.right li:nth-child('+(queue.queueControl.length+1)+')').removeClass('paint text-alert').empty();
    }
  });
});
