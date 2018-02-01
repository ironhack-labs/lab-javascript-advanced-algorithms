$(document).ready(function(){
   
    //Creación
    var stack = new StackDataStructure();
    var queue = new QueueDataStructure();

    //Definición de inicio de index
    var stackedElem = 14;
    var enqueuedElem = 1;

    //Cuando se da click en añadir elem a stack
    $("#add-stack").on("click", function(){
       
        //Se recupera el valor del input y se inserta en la variable inputValue
        var inputValue = $("#stackelement").prop("value");

        //Si input es diferente de nada
        if(inputValue !== ""){
            //Se comprueba la posición del stack con el index, si es 15 se debe quitar el "Stack Underflow"
            if(stackedElem === 15){
                $("#stack-div div:nth-child(15)").css("display", "none");
                //Se disminuye x1 el valor del index
                stackedElem--;
              //Si el index es mayor a 4
            } else if(stackedElem > 4){
                //Se inserta el valor del input y se asigna a la variable newStack el array que regresa push
                var newStack = stack.push(inputValue);
                //Se actualiza el valor del stack
                $("#stack-div div:nth-child(" + stackedElem + ")").text(newStack[newStack.length-1]);
                //Se añade al elemento del stack la clase addedelement para que se pinte de azul
                $("#stack-div div:nth-child(" + stackedElem + ")").addClass("addedelement");
                //Se decrece el index en 1
                stackedElem--;
                //Se reinicia el value del input a nada
                $("#stackelement").prop("value", "");
            } else{
                //Si el index es 4 o menor, se tiene que mostrar el div de "Stack Overflow"
                $("#stack-div div:nth-child(4)").css("display", "block");
            } 
            //Se reinicia el valor del input en caso de que no proceda el push
            $("#stackelement").prop("value", "");
        } 
    });

    //Si se da click al boton de remove stack elem
    $("#delete-stack").on("click", function(){
        //Si el index del stack elem es igual a 4
        if(stackedElem === 4){
            //Se quita el mensaje de "Stack Overflow"
            $("#stack-div div:nth-child(4)").css("display", "none");
            //Se incrementa en 1 el index
            stackedElem++;
          //Si el index es menor a 15
        } else if(stackedElem < 15){
            //Se saca el elem del stack
            stack.pop();
            //Se reinicia a nada el text que contiene
            $("#stack-div div:nth-child(" + stackedElem + ")").text("");
            //Se le remueve la clase para que deje de ser azul
            $("#stack-div div:nth-child(" + stackedElem + ")").removeClass("addedelement");
            //Se aumenta en 1 el index
            stackedElem++;
        } else {
            //Si es igual o mayor a 15, se muestra el mensaje de "Stack Underflow"
            $("#stack-div div:nth-child(15)").css("display", "block");
        }
    });

    $("#add-queue").on("click", function(){
        var inputQ = $("#queue-input").prop("value");
        if(inputQ !== ""){
            if(enqueuedElem === 0){
                $("#queue-underflow").css("display", "none");
                enqueuedElem++;
            } else if(enqueuedElem < 11){
                var newQueue = queue.enqueue(inputQ);
                console.log(inputQ);
                $("#queue-div div:nth-child(" + enqueuedElem +")").text(newQueue[0]);
                console.log(newQueue[newQueue.length-1]);
                $("#queue-div div:nth-child(" + enqueuedElem +")").addClass("queue-item")
                enqueuedElem++;
                $("#queue-input").prop("value", "")
            } else {
                $("#queue-overflow").css("display", "block");
            }
        }
        $("#queue-input").prop("value", "")
    });

    $("#delete-queue").on("click", function(){
        if(enqueuedElem === 11){
            $("#queue-overflow").css("display", "none");
            enqueuedElem--;
        } else if(enqueuedElem > 0){
            var newQueue = queue.dequeue();
            $("#queue-div div:nth-child(" + enqueuedElem +")").text("");
            $("#queue-div div:nth-child(" + enqueuedElem +")").removeClass("queue-item")
            enqueuedElem--;
        } else {
            $("#queue-underflow").css("display", "block");
        }
    });





});