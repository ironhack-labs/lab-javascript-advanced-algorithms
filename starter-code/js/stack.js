let stack = new StackDataStructure();

$("#stackItem").click(function() {
  if(stack.canPush()) {
    stack.push("item");
    let currentItem = stack.stackControl.length-1;
    console.log("Current Item: " + currentItem);
    $(".stack-box:nth-child("+(stack.MAX_SIZE-currentItem)+")").addClass("checked");
  } else {
      $("#stackError").text("  Overflow");
      setTimeout(function(){
        $("#stackError").text("");
      },1500);
  }
});

$("#unstackItem").click(function() {
  if(!stack.isEmpty()) {
    let currentItem = stack.stackControl.length-1;
    stack.pop();
    console.log("Current Item: " + currentItem);
    $(".stack-box:nth-child("+(stack.MAX_SIZE-currentItem)+")").removeClass("checked");
  } else {
      $("#stackError").text("  Underflow");
      setTimeout(function(){
        $("#stackError").text("");
      },1500);
  }
});

