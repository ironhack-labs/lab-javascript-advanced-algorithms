//my variables
var stack = new StackDataStructure;
stack.MAX_SIZE = 8;
var justAdded = stack.stackControl[stack.stackControl.length-1]


$(document).ready(function()
{  
  // add to stack

  $('.add').click(function(){

  $(".underflow").text("");
  $(".underflow").toggleClass('underflow element'); //remove the underflow message first 
  

    //STACK OVERFLOW WARNING
    if (stack.stackControl.length === stack.MAX_SIZE) 
      {
        $(".stacked.top").text("Stack Overflow");
        $(".stacked.top").toggleClass("stacked overflow");
      }
  
      //ADD TO STACK 
    stack.push($('#input-stack').val());
    var inputStack = $('#input-stack').val();

  //value of last element is now stored in our object stack
  var justAdded = stack.stackControl[stack.stackControl.length-1]

//select the last element that wasnt "turned around" yet, turn it around, and display input.
$(".element:last").text(inputStack);
$('#input-stack').val('');
$(".element:last").toggleClass("element stacked");
  });

  $('.take').click(function(){

    //check in the beginning if stack underflow has to be shown

    if (stack.stackControl.length === 0) 
    {
      $(".element.bottom").text("Stack Underflow");
      $(".element.bottom").toggleClass("element underflow");    
    }

  stack.pop(justAdded); //Add to data object

  //remove the  overflow box as soon as the first "take" has been hit

  $(".overflow").text("");
  $(".overflow").toggleClass('overflow stacked'); 
  

  $(".stacked:first").text("");
  $('#input-stack').val('');
  $(".stacked:first").toggleClass("stacked element")
  
  });

  







  console.log("DOM is Loaded");
})