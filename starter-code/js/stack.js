
//funcion pintar pila

function pintarPila(pila){

    var tamaño = pila.MAX_SIZE;
    var html='';

    //Pintar pila de la longitud máxima
    html +='<div class="overflow">Stack Overflow</div>';

        for(i=0;i<tamaño;i++){

            html +='<div class="item"></div>';

        }
        html +='<div class="underflow">Stack Underflow</div>';

        $('.stack').html(html);
  

}

$(document).ready(function(){

    //CREAMOS OBJETO
    var myStack = new StackDataStructure();
    //PINTAMOS PILA
    pintarPila(myStack);

    //EVENTOS AÑADIR
    $('.btn-add').click(function () {
     var nuevoItem='';
     var pos;
     $('.underflow').css("display", "none");

        if(myStack.canPush()){

            //coger valor del input

            nuevoItem=$("#valorStack").val();
            
            if(nuevoItem!==''){
            myStack.push(nuevoItem);
            
            //Pintar el item
            pos=myStack.MAX_SIZE-myStack.stackControl.length+2;
            $( ".stack").children(":nth-child("+pos+")").css("background-color","blue");
            $( ".stack").children(":nth-child("+pos+")").text(nuevoItem);
            }else{

             alert("AÑADE EL VALOR DEL ELEMENTO");

            }
        }else{

            $('.overflow').css("display", "block");


        }



    });

    //EVENTOS BORRAR
    $('.btn-delete').click(function () {
       var valor;
       var pos;
       $('.overflow').css("display", "none");

        if(myStack.isEmpty()){
          
            $('.underflow').css("display", "block");

        }else{
            pos=myStack.MAX_SIZE-myStack.stackControl.length+2;

           valor= myStack.pop();

 
            $( ".stack").children(":nth-child("+pos+")").css("background-color","#C2BFBF");
            $( ".stack").children(":nth-child("+pos+")").empty();

        }



    });



    });
  
  
