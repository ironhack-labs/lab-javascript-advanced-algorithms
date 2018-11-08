$(document).ready(function(){
    var queue = new QueueDataStructure()
    var contador=0
    $('#numQueue').change(function(){
         var html = '';
         queue.MAX_SIZE = $(this).val()
         $('#contenedor-queue').html(html);
         for(let i =0;i<queue.MAX_SIZE;i++){
             html += '<div class="contenedor">';
             html += '<span></span>';
             html += '</div>';
        }
        
         // Añade contenedores al html segun el maximo establecido
         $('#contenedor-queue').html(html);
         contador = 0;
    })
    $('#agqueue').click(function(){
         var texto = $('#texQueue').val();
         
         var children = $('#contenedor-queue').children()
         if(queue.enqueue(texto) != 'Queue Overflow'){
             
             $(children[(children.length-1)-contador]).text(texto)
               $(children[(children.length-1)-contador]).addClass('lleno')
              contador++
              
              
         }else{
             $(children[(children.length)-contador]).text('Queue Overflow')
             $(children[(children.length)-contador]).addClass('rojo')
 
         }
     })
         
         
     $('#quitqueue').click(function(){
         
         var children = $('#contenedor-queue').children('.lleno')
         
         if(queue.dequeue() !='Queue Underflow'){
             console.log(queue.queueControl)
             $(children[children.length-1]).text('')
             $(children[children.length-1]).removeClass('lleno')
             $(children[children.length-1]).removeClass('rojo')
             contador--
             
         } else{
             var children = $('#contenedor-queue').children()
             $(children[(children.length)-1]).text('Queue Underflow')
             $(children[(children.length)-1]).addClass('azul')
             
         }
 
     })
         
         
         
         
 
         
    })