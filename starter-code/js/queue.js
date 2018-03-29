$( document ).ready(function (){
    
    var lastChild = $(".empty:last-child");
    var list = [];

    $(".add").click(function(){
        // Guardo el valor del input
        var inputVal = $("input").val();
        // Pusheo el value del input en el array base
        
        // A cada box una posición del array
        if (list.length < 8) {
            list.push(inputVal);
            $("#stack-over").css("display", "none");
            for (var i = 0; i < list.length; i++) { 
                var conQuery = $("#empty" + i);
                conQuery.text(list[i]).addClass("blue");
                $("input").val("");
            }    
        } else {
            $("#stack-over").css("display", "block");
        } 
    });

    $(".remove").click(function(){

    });
});


    

    



