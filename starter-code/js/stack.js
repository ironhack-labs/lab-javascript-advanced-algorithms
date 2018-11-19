

$(document).ready(function () {

    //Creamos una nueva instancia de la clase StackDataStructure
    var stack = new StackDataStructure();
    var elements = $(".stack-element");

    //Funcionalidad del boton add
    $("#btn-add").click(function (e) {

        //Obtenemos el valor del input de stack
        var inputValue = $("#stack-input").val();

        //Comprobamos que se pueda insertar un elemento al stack
        var elementoAgregado = stack.push(inputValue);

        //Agregamos el elemento a la parte correspondiente del HTML
       
    

        switch (elementoAgregado.length) {
            case 1:
                $(elements[8]).html(elementoAgregado[0]).addClass("element-inside");
                break;
            case 2:
                $(elements[7]).html(elementoAgregado[1]).addClass("element-inside");
                break;
            case 3:
                $(elements[6]).html(elementoAgregado[2]).addClass("element-inside");
                break;
            case 4:
                $(elements[5]).html(elementoAgregado[3]).addClass("element-inside");
                break;
            case 5:
                $(elements[4]).html(elementoAgregado[4]).addClass("element-inside");
                break;
            case 6:
                $(elements[3]).html(elementoAgregado[5]).addClass("element-inside");
                break;
            case 7:
                $(elements[2]).html(elementoAgregado[6]).addClass("element-inside");
                break;
            case 8:
                $(elements[1]).html(elementoAgregado[7]).addClass("element-inside");
                break;
            default:
                $(elements[0]).css("display", "block");
                $(elements[9]).css("display", "none");

                break;
        }
    });


    $("#btn-take").click(function (e) {

        debugger;
    
        //Hacemos pop al elemento seleccionado
        var elementoPop = stack.pop()

        //Quitamos el elemento seleccionado del stack
        $(`h1:contains('${elementoPop}')`).removeClass("element-inside");

        if (stack.stackControl.length === 0) {    
            $(elements[9]).css("display", "block");
            $(elements[0]).css("display", "none");
        }

    });


    







})




