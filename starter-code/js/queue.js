  $(document).ready(function(){

      var queue = new QueueDataStructure();
    $("#add-queue").click(function(){
      if(queue.enqueue() !== 'Queue Overflow'){

      //  $(".stack:last-child").not('.azul').addClass('azul');
      var a= $(".queue").last().children().not('.unselect').addClass('azul');
      a.prev().removeClass('unselect');
    }else {
      alert('Queue Overflow! Debes vaciar el stack antes!');
    }

    });

    $("#take-queue").click(function(){
      if(queue.dequeue() !== 'Queue Underflow'){

      var a= $(".queue").children('.azul').last().removeClass('azul');
      a.prev().addClass('unselect');
    }else {
      alert('No quedan queues! Añade más antes de borrar');
    }

    });



  });
