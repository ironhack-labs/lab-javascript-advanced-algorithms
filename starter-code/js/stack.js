$( document ).ready(function() {

  var stack = new StackDataStructure;
  
  
  $("#add-btn-stack").on("click", function(){
    var text = $("#input1").val()
    stack.push(text)
    if(stack.stackControl.length == 1){
      $("#stack-8").removeClass("gold")
      $("#stack-8").addClass("blue").text(text);
      $("#input1").val("");
    }
    else if(stack.stackControl.length == 2){
      $("#stack-7").addClass("blue").text(text);
      $("#input1").val("");
    }
    else if(stack.stackControl.length == 3){
      $("#stack-6").addClass("blue").text(text);
      $("#input1").val("");
    }
    else if(stack.stackControl.length == 4){
      $("#stack-5").addClass("blue").text(text);
      $("#input1").val("");
    }
    else if(stack.stackControl.length == 5){
      $("#stack-4").addClass("blue").text(text);
      $("#input1").val("");
    }
    else if(stack.stackControl.length == 6){
      $("#stack-3").addClass("blue").text(text);
      $("#input1").val("");
    }
    else if(stack.stackControl.length == 7){
      $("#stack-2").addClass("blue").text(text);
      $("#input1").val("");
    }
    else if(stack.stackControl.length == 8){
      $("#stack-1").text(stack.push());
      $("#stack-1").addClass("gold")
      $("#input1").val("");
    }
  });

  $("#take-btn-stack").on("click", function(){

    
    
    if(stack.stackControl.length == 8){
      $("#stack-1").removeClass("blue gold").text("");
      
    }
    else if(stack.stackControl.length == 7){
      $("#stack-2").removeClass("blue").text("");
      
    }
    else if(stack.stackControl.length == 6){
      $("#stack-3").removeClass("blue").text("");
      
    }
    else if(stack.stackControl.length == 5){
      $("#stack-4").removeClass("blue").text("");
      
    }
    else if(stack.stackControl.length == 4){
      $("#stack-5").removeClass("blue").text("");
      
    }
    else if(stack.stackControl.length == 3){
      $("#stack-6").removeClass("blue").text("");
      
    }
    else if(stack.stackControl.length == 2){
      $("#stack-7").removeClass("blue").text("");
      
    }
    else if(stack.stackControl.length == 1){
      $("#stack-8").removeClass("blue").text("STACK UNDERFLOW");
      $("#stack-8").addClass("gold")
    }
    stack.pop()

    
})
});