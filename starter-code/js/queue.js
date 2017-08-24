$( document ).ready(function() {
var queue = new QueueDataStructure();

  $('#addQueue').on('click', function(){
    console.log(queue.enqueue($('#textQueue').val()));
    for(var i=1; i<=queue.queueControl.length; i++){
      $('.right li:nth-child('+i+')').addClass('paint').text(queue.queueControl[i-1]);
    }
  });

  $('#deleteQueue').on('click', function(){
    console.log(queue.dequeue());
    console.log(queue.queueControl);
    $('.right li:nth-child('+(queue.queueControl.length+1)+')').removeClass('paint').empty();
  });
});
