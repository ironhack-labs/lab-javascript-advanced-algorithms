$(document).ready(function () {

  stackSize = prompt("What size do you want for the stack?")
  var stack = new StackDataStructure(stackSize);

  printStack(stack.MAX_SIZE); // print the cells of the stack

  $("#btn-add-stack").click(function() {
    stackClickAddFn(stack);
  });

  $("#btn-take-stack").click(function() {
    stackClickTakeFn(stack);
  });
});

function printStack(numElements) {

  for (var i = 0; i < numElements; i++) {
    var elem = $("#stack-template-box > div").clone(true);  //clone the template...
    $("#stack-boxes").append(elem); //... and append it to the "#stack-boxes" div
  }
}

function stackClickAddFn(stack) {
  
  $("#stack-underflow").attr("style", "visibility: hidden"); //hide the "underflow" div
  $("#stack-elem-taken").empty(); //empty span "#stack-elem-taken" (this span contains the elements taken)
  $("#btn-take-stack").attr("disabled", false); //enable "take" btn

  if ($("#input-stack").val() !="") { //if there is something in the input...
    
    if (stack.canPush()) { //if the stack is not full..
    
      var newElem = "<p>" + $("#input-stack").val() + "</p>"; //create new <p> and put the value on it.

      if (stack.isEmpty()) { // if it's going to be the first item...
        $("#stack-boxes > div").last().addClass("taken").append(newElem);
      } else { //if there are more items in the stack...
        $("#stack-boxes > div > p").first().parent().prev().addClass("taken").append(newElem);
      }
      stack.push($("#input-stack").val()); //put the item in the "stack" object

    } else { // if the stack is full...
      $("#stack-overflow").attr("style", "visibility: visible"); //show "stack overflow"
      $("#btn-add-stack").attr("disabled", true); //disable "add" btn
    }
    $("#input-stack").val(""); //empty the input
  }
}

function stackClickTakeFn(stack) {

  $("#stack-overflow").attr("style", "visibility: hidden"); //hide the "overflow" div
  $("#btn-add-stack").attr("disabled", false); //enable "add" btn
  $("#input-stack").val(""); //empty the input

  if (stack.isEmpty()) { //if the stack is empty
    $("#stack-underflow").attr("style", "visibility: visible"); //show "stack underflow"
    $("#btn-take-stack").attr("disabled",true); //disable "take" btn
    $("#stack-elem-taken").text(""); //empty span "#stack-elem.taken"

  } else { //if there are items in the stack...
    var elementTaken = stack.pop() //take out item and we put it on "elementTaken" var
    $("#stack-elem-taken").text(elementTaken); //show item on "stack-elem-taken" span
    $("#stack-boxes > div > p").first().parent().removeClass("taken").empty(); //we remove the item of the stack(html)
  }
}