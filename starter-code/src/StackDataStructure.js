$(document).ready(function(){
    stackList = [];
    overFlow = 10;
    underFlow = [];
    divArray = $('.stack-element');

    queueList = [];

    function sustituirHtmlAdd(){
        if(stackList.length-1 == 0){
        $('.clase9').addClass('addedelement');
        $('.clase9').html(stackList[0]);
        } else if(stackList.length-1 == 1){
            $('.clase8').addClass('addedelement');
            $('.clase8').html(stackList[1]);
        }else if(stackList.length-1 == 2){
            $('.clase7').addClass('addedelement');
            $('.clase7').html(stackList[2]);
        }else if(stackList.length-1 == 3){
            $('.clase6').addClass('addedelement');
            $('.clase6').html(stackList[3]);
        }else if(stackList.length-1 == 4){
            $('.clase5').addClass('addedelement');
            $('.clase5').html(stackList[4]);
        }else if(stackList.length-1 == 5){
            $('.clase4').addClass('addedelement');
            $('.clase4').html(stackList[5]);
        }else if(stackList.length-1 == 6){
            $('.clase3').addClass('addedelement');
            $('.clase3').html(stackList[6]);
        }else if(stackList.length-1 == 7){
            $('.clase2').addClass('addedelement');
            $('.clase2').html(stackList[7]);
        }else if(stackList.length-1 == 8){
            $('.clase1').addClass('addedelement');
            $('.clase1').html(stackList[8]);
        }
    }


    function removeHtmlAdd(){
        if(stackList.length == 1){
        $('.clase9').removeClass('addedelement');
        $('.clase9').empty();
        } else if(stackList.length == 2){
            $('.clase8').removeClass('addedelement');
            $('.clase8').empty();
        }else if(stackList.length == 3){
            $('.clase7').removeClass('addedelement');
            $('.clase7').empty();
        }else if(stackList.length == 4){
            $('.clase6').removeClass('addedelement');
            $('.clase6').empty();
        }else if(stackList.length == 5){
            $('.clase5').removeClass('addedelement');
            $('.clase5').empty();
        }else if(stackList.length == 6){
            $('.clase4').removeClass('addedelement');
            $('.clase4').empty();
        }else if(stackList.length == 7){
            $('.clase3').removeClass('addedelement');
            $('.clase3').empty();
        }else if(stackList.length == 8){
            $('.clase2').removeClass('addedelement');
            $('.clase2').empty();
        }else if(stackList.length == 9){
            $('.clase1').removeClass('addedelement');
            $('.clase1').empty();
        }
    }

    /////////////////////////////////////////////////
    ///////////////     STACKS     //////////////////
    /////////////////////////////////////////////////


    $('#add-stack').click(function(){
        var usuario = prompt("¿Qué quieres almacenar?");
        if(stackList === underFlow){
            console.log("StackList is empty");
        }else if(stackList.length === overFlow){
            console.log("StackList full");
        }else {
        stackList.push(usuario);
        console.log("Elemento añadido");
        sustituirHtmlAdd()
     }
    })

    $('#delete-stack').click(function(){
        stackList.pop();
        $('.stack-element').removeClass('addedelement');
        console.log("Elemento Borrado")
        removeHtmlAdd()
    });


    /////////////////////////////////////////////////
    ///////////////     QUEUE     //////////////////
    /////////////////////////////////////////////////

    $('#add-queue').click(function(){
        var usuario = prompt("¿Qué quieres almacenar?");
        if(queueList.length === overFlow){
            console.log("QueueList is Full")
        } else {
            queueList.unshift(usuario);
            $('.queue-element').addClass('addedelement');
            console.log("Elemento añadido");
            sustituirHtml2();
        }
    })

    $('#delete-queue').click(function(){
        queueList.splice(0 , 1);
        $('.queue-element').last().removeClass('addedelement');
        console.log("Elemento Borrado")
    });
});

/////////////////////////////////////////////////////////
//////////     LOGICA DE PILAS Y COLAS     //////////////
///////////////////////////////////////////////////////// 

/*
stackList = [];
overFlow = 10;
underFlow = [];
queueList = [];

///////////////////   PILAS   //////////////////////////

function stackAdd (){
  var usuario = prompt("¿Qué quieres almacenar?");
  if(stackList === underFlow){
    console.log("StackList is empty");
  }else if(stackList.length === overFlow){
    console.log("StackList full");
  }else {
    stackList.push(usuario);
  }
}

function stackRemove(){
  stackList.pop();
}

//////////////////   COLAS   /////////////////////////////


function queueAdd (){
  var usuario = prompt("¿Qué quieres almacenar?");
  if(queueList === underFlow){
    console.log("StackList is empty");
  }else if(queueList.length === overFlow){
    console.log("StackList full");
  }else {
    queueList.unshift(usuario);
  }
}

function queueRemove(){
  queueList.splice(0 , 1);
}
*/