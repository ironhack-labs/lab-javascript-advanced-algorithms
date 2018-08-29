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
        var x=stack.stackControl.length;
        for (var i=x;i>x-1;i--)
        $(".box")[stack.MAX_SIZE-i].append(element);
    }
    else{
        
        $(".container").append("<div class='box'>Stack overflow</div>")
    }
    });
$("#take").on("click",function(){


}


})
    
  
    
    



});




