

//Variable donde se van alojar los contenedores dinamicos
var stackDataContainer = $(".stack-data-container");

//Variable para insertar el mensaje
var sOverflow = '<div class="stack-overflow">Stack Overflow</div>';

//Variable para insertar el mensaje
var sUnderflow = '<div class="stack-underflow">Stack Underflow</div>';

//Variable-Input donde metemos los datos
var inputTop = document.getElementsByClassName("input-top");


//Añades Divs dinámicos
function addSDivs (arg){
    for(var i=0; i< arg; i++){
        $(stackDataContainer).append('<div class="stack-data-element"></div>');
    }
}


function addStack(obj) {
    //Si esta lleno aparece el mensaje "stackOverflow"
    if (obj.canPush() === false) {
        $(stackDataContainer).prepend(sOverflow)
    }
    else {
         //Si hay espacio
        var inputVal = inputTop[0].value //Lo que metemos en el Input
        var stackSlots = document.getElementsByClassName("stack-data-element"); //divs dinamicos que hemos añadido
        var arrSlots = [].slice.call(stackSlots);  
        $(arrSlots[arrSlots.length - 1]).toggleClass("fill-stack-element"); //metemos clase
        $(arrSlots[arrSlots.length - 1]).toggleClass("stack-data-element");//quitamos clase
        $(arrSlots[arrSlots.length - 1]).html(inputVal);//metemos texto el texto
        obj.stackControl.push(inputVal)
    }
}
