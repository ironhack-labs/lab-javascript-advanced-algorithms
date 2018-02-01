$(document).ready(function(){
    var queue = new QueueDataStructure();
      // ante evento de click en añadir
        $('#add-queue').on('click',function(){
            // añadir elemento a la cola
           var element = $('#queue-input').prop("value");
            // si el array esta vacio guardo la primera
            if (queue.isEmpty()){
               queue.enqueue(element);
               $('.queue .queue-element:first').addClass("queue-item");
               $('.queue .queue-element:first').text(element);
             // si esta lleno doy error de OverFlow
            }else if (!queue.canEnqueue()){
                $('.error-queue:first').css("display","block");
                setTimeout(function () {
                    $('.error-queue:first').css("display","none");
                  }, 250);
            }else { // si no esta lleno sigo metiendo valores en mi cola-se va llenando y se 
                // van corriendo todos los valores hacia la derecha
                queue.enqueue(element);
                console.log(queue.queueControl);
                $('.queue .queue-element:first').text(element);
                $('.queue-element:not(.queue-item):first').text(queue.queueControl[queue.queueControl.length-1]);
                $('.queue-element:not(.queue-item):first').addClass("queue-item");
                for (let index = 1; index < queue.queueControl.length-1; index++) {
                $('.queue .queue-element:nth-child('+index.toString()+')').text(queue.queueControl[index-1]);
                }
            }
        });
        // quitar elemento a la cola
        $('#delete-queue').on('click',function(){
            // si esta vacio doy error de underflow
            if (queue.isEmpty()){
                $('.error-queue:last').css("display","block");
                setTimeout(function () {
                    $('.error-queue:last').css("display","none");
                  }, 250);
            }else {
               // si no lleno la cola-
                queue.dequeue();
                $('.queue-item:last').text('');
                $('.queue-item:last').removeClass("queue-item");  
                console.log(queue.queueControl);
            }
        });
    
    });