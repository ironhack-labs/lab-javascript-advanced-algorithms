var stack = new StackDataStructure();

$("#add-btn-stack").click(function() {
  stack.push(1);
  console.log(stack.stackControl);
  var i = (stack.MAX_SIZE) - stack.stackControl.length;
    $($(".div-sec")[i]).addClass("stack-div");
    
    
});
