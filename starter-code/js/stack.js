var stack = new StackDataStructure(); // creamos un nuevo objeto Stack

$(document).ready(function () {
    
    $(".btn-primary").on("click", function () {
        $(".vacio").last().addClass("lleno").removeClass("vacio")
        
    });

    $(".btn-danger").on("click", function () {
        $(".lleno").first().addClass("vacio").removeClass("lleno")
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