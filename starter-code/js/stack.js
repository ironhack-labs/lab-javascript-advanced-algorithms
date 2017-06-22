$(document).ready(function(){
  stack = new StackDataStructure();
  stack.MAX_SIZE = 10;

  $(".btn#stack-add").click(function(){
    var value = $("#stack-input").val();
    stack.push(value);
    updateStack();
    // console.log("it pushes!");
    console.log(stack.stackControl);
  })

  $(".btn#stack-remove").click(function(){
    stack.pop();
    updateStack();
    // console.log("it removes!")
    console.log(stack.stackControl);
  })

  function updateStack(){
    for(var i=0; i < stack.stackControl.length; i++){
      var stackItem = "#stack-list li:nth-child("+ (stack.MAX_SIZE-i) +")";
      $(stackItem).addClass("filled");
    }
    for(;i < queue.MAX_SIZE; i++){
      var stackItem = "#stack-list li:nth-child("+ (stack.MAX_SIZE-i) +")";
      $(stackItem).removeClass("filled");
    }
  }
})
