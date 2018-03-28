// Globals

var maxCapacity = 9;
var myStack = new StackDataStructure;
var myQueue = new QueueDataStructure;
myStack.MAX_SIZE = maxCapacity;



//Start JQuery on page ready
$(document).ready(function() {

  function updateDisplay(mode) {
    if(mode === 'add'){

      var myArray = myStack.stackControl;
      var arrayLength = myStack.stackControl.length;
      if (arrayLength > maxCapacity) {
        $(".stack-element").first().removeClass("filled").addClass("overflown").text("Stack Overflow");
        $("#addButton").attr("disabled", "disabled")
      }
      else {
        console.log("keep going...." + arrayLength + "-" + maxCapacity);
        $(".empty").last().removeClass("empty").addClass("filled").text(myArray[arrayLength-1]);
      }
      myQueue.queueControl = myStack.stackControl;
    }
    
    else if (mode === 'take'){
      console.log("take")
      if (myQueue.queueControl.length == 0){
        $("#takeButton").attr("disabled", "disabled");
        $(".stack-element").last().removeClass("filled").addClass("overflown").text("Stack Underflow");

      }
      else{
       console.log("Empty! Underflow")
      }
      myStack.stackControl = myQueue.queueControl;

    }
  }  
  
  $("#addButton").click(function() {
      myStack.canPush( $("#textInput").val() );    
      updateDisplay('add');
      });

    $("#takeButton").click(function(){      
      myQueue.dequeue( $("#textInput").val() ); 
      updateDisplay('take');
      
    });

});