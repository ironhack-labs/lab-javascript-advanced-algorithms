var stack = new StackDataStructure();

$("#add-btn-stack").click(function() {
  stack.push(1);
  var i = (stack.MAX_SIZE) - stack.stackControl.length -1;
  var x = $("#inputGroup-sizing-sm").prop('value');
  if(!stack.canPush()){
    $(".div-sec-overflow").addClass("stack-div-overflow");
    $(".div-sec-overflow").html("STACK OVERFLOW");
    return
  }else{
    $($(".div-sec")[i]).addClass("stack-div");
    $($(".div-sec")[i]).html(x);
    $(".div-sec-underflow").removeClass("stack-div-underflow");
    $(".div-sec-underflow").html("");
  }
});


$("#remove-btn-stack").click(function() {
  stack.pop(x);
  var x = (stack.MAX_SIZE-1) - stack.stackControl.length ;
  if(stack.isEmpty()){
    $(".div-sec-underflow").addClass("stack-div-underflow");
    $(".div-sec-underflow").html("STACK UNDERFLOW");
  }else {
    $($(".div-sec")[x]).removeClass("stack-div");
    $($(".div-sec")[x]).html("");
    $(".div-sec-overflow").removeClass("stack-div-overflow");
    $(".div-sec-overflow").html("");
  }
});