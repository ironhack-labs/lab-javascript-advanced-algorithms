
$(document).ready(function(){
//Create the instance of our QueueDataStructure
var stack = new StackDataStructure();

//Listen to the click event on the Stack Button
$('#add-stack').on('click', function() {
  //Retrieve the input from the user and save it on a variable 
  var inputText = $('#stackelement').val();
   //If the user clicked and we have text in the input 
 if (inputText !== "") {
  //We want to push the inputText into the stackControl array, but
    //check first if it is full or not
   if(stack.canPush() === true) {
     stack.push(inputText);
     var index = stack.MAX_SIZE - stack.stackControl.length;
       //Then we want to display the inputText, adding it to the 
    //corresponding div
    $(".stack-element:last").html(inputText);
 
    }
    inputText = $('#stackelement').val("");
  }
});


//Second, listen to the click event on the Remove Button

$('#delete-stack').on('click', function() {
 console.log();
 stack.pop();
 $(".stack-element:last").html("");
});

});