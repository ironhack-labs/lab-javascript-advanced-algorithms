stack = new StackDataStructure();

$("#add-button").on("click", function(){

    let valor = $("#texto").val();

    if (stack.canPush()){
        $("#stack-blocks").append("<div class='empty' style='background-color: gray; border:solid 1px white;'>&nbsp;</div>");
        stack.push(valor);
    } else {
        console.log("No puedes agregar más");
    }   
    console.log(stack.stackControl);

});

