$(document).ready(function(){
    var stack=new StackDataStructure();
    var html="";

    for (var i=0;i<stack.MAX_SIZE;i++){
        html+="<div class='box'></div>"
    }
    $(".container").append(html);



$("#add").on("click",function(){
    if(stack.canPush()){
        var element=$("#element").val();
        stack.push(element);
        var long=stack.stackControl.length;
        $($(".box")[stack.MAX_SIZE-long]).text(element);
        $($(".box")[stack.MAX_SIZE-long]).addClass("filled")
    }
    else{
        //meter div con stack overflow
    }
    });
$("#take").on("click",function(){
    if(stack.isEmpty()){
        //meter div con underflow
    }
    else{
        stack.pop();
        var long=stack.stackControl.length;
        console.log(long);
        $($(".box")[stack.MAX_SIZE-long-1]).removeClass("filled");
        $($(".box")[stack.MAX_SIZE-long-1]).empty();
    }

});
    
});




