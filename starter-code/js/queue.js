$( document ).ready(function (){
    
   
    var lastChild = $(".empty:last-child");
    var list = [];
    $(".add").click(function(){
        console.log(lastChild);
        var inputVal = $("input").val();
        lastChild.text(inputVal) ;
        $("#empty8").html= inputVal;
        list.push(inputVal);
        console.log(list);
    });

    $(".remove").click(function(){

    });
});


    

    



