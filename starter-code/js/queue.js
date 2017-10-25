$(function(){
  var queue = new QueueDataStructure();

  $('#c2 .btn-primary').click(function(){
    if(queue.canEnqueue()){
      queue.enqueue(1);
      $('#queue').children().text('');
      $('#queue .colorTake:first').addClass('colorAdd');
      $('#queue .colorTake:first').removeClass('colorTake');
      $('#queue').children().removeClass('colorError');
      /*
      if(queue.queueControl.length == queue.MAX_SIZE){
        $('#queue').children().addClass('colorTake');
        $('#queue').children().removeClass('colorError');
      }
      */
    } else{
      $('#queue').children().addClass('colorError');
      $('#queue').children().removeClass('colorTake');
      $('#queue').children().removeClass('colorAdd');
      $('#queue').children().text('STACK OVERFLOW').css({
        color: "red",
        fontSize: "18px",
        textAlign: "center"
      });
    }
  });

  $('#c2 .btn-danger').click(function(){
    if(queue.isEmpty()){
      //Solucionar por qué tiene problemas la cola por esta parte
      $('#queue').children().addClass('colorError');
      $('#queue').children().text('STACK UNDERFLOW').css({
        color: "red",
        fontSize: "18px",
        textAlign: "center"
      });
      $('#queue').children().toggleClass('colorError');
    } else{
      queue.dequeue();
      /*
      if(queue.queueControl.length == 0){
        $('#queue').children().addClass('colorAdd');
        $('#queue').children().removeClass('colorError');
      }
      */
      $('#queue').children().text('');
      $('#queue .colorAdd:last').addClass('colorTake');
      $('#queue .colorAdd:last').removeClass('colorError');
      $('#queue .colorAdd:last').removeClass('colorAdd');

    }
  });

});
