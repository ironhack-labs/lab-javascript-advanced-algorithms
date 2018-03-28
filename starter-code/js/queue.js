

var stack = new StackDataStructure(); // creamos un nuevo objeto Stack

$(document).ready(function () {
    
    $(".btn-primary").on("click", function () {
        $(".vacio").css("display","block");
        
    });

    $(".btn-danger").on("click", function () {
    $(".vacio").css("display","none");
        eliminarstack();       
    })

});

function añadirElemento (e){
    if(stack.push(e)!= "Stack Overflow"){ // si la barra no esta llena 
        
        $("vacio").css("display","block");
    }else{

    }
}

function eliminarstack() {
    if(stack.pop()!="Stack Underflow"){ // el metodo pop no necesita ningún valor 
        $(".vacio").css("display","none");
    }else{

    }
}

function inicializarstack() {
    var limite = stack.MAX_SIZE;
   
}
