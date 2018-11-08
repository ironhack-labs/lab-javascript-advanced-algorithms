$(document).ready(function(){
   var stack = new StackDataStructure()
   var contador=0
   $('#numStack').change(function(){
        var html = '';
        stack.MAX_SIZE = $(this).val()
        $('#contenedor-stack').html(html);
        for(let i =0;i<stack.MAX_SIZE;i++){
            html += '<div class="contenedor">';
            html += '<span></span>';
            html += '</div>';
       }
       
        // Añade contenedores al html segun el maximo establecido
        $('#contenedor-stack').html(html);
        contador = 0;
   })
   $('#agstack').click(function(){
        var texto = $('#texStack').val();
        
        var children = $('#contenedor-stack').children()
        if(stack.push(texto) != 'Stack Overflow'){
            
            $(children[(children.length-1)-contador]).text(texto)
              $(children[(children.length-1)-contador]).addClass('lleno')
             contador++
             
             
        }else{
            $(children[(children.length)-contador]).text('Stack Overflow')
            $(children[(children.length)-contador]).addClass('rojo')

        }
    })
        
        
    $('#quitstack').click(function(){
        
        var children = $('#contenedor-stack').children('.lleno')
        
        if(stack.pop() !='Stack Underflow'){
            console.log(stack.stackControl)
            $(children[0]).text('')
            $(children[0]).removeClass('lleno')
            $(children[0]).removeClass('rojo')
            contador--
            
        } else{
            var children = $('#contenedor-stack').children()
            $(children[(children.length)-1]).text('Stack Underflow')
            $(children[(children.length)-1]).addClass('azul')
            
        }

    })
        
        
        
        

        
   })
   

