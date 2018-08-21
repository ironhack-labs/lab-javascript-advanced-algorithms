
$(document).ready(function () {
    var stack = new StackDataStructure();
    $(".error-stack2").css('display', 'flex');

    $('#add-stack').click(function () {
         var Input = $("#stackelement").val()
         var elementos = stack.push(Input);
         var divElementos = $(".stack-element"); 
         if(elementos !== "Stack Overflow"){
             for(var i = 0; i < elementos.length; i++){
                 divElementos[i].innerHTML = elementos[i];
                 $(divElementos[i]).show(1000).css('background-color', 'blue');
                 $(".error-stack2").hide(1000);
                }
            }
            else{
                $(".error-stack1").show(600).css('display','flex');
            }
        });
        $("#delete-stack").click(function () {
            $(".stack-element").text("");
            $(".stack-element").css('background-color', 'lightgrey');
        });
    });