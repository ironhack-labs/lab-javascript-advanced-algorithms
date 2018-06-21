var stack = new StackDataStructure();

$("#add-stack").click(function(){
  var i = 9 - stack.stackControl.length;
  stack.canPush();
  if (stack.canPush() === true){
    $("#delete-stack").next().hide();
    $("#stack-div div").last().hide();
    if(i>=0){
  var inputValue = $("#stackelement").val();
  stack.push(inputValue);
  $(".stack-element:eq("+i+")").html(inputValue);
    } 
    }else{
      console.log("overflow")
      $("#delete-stack").next().show();
  }
})

$("#delete-stack").click(function(){
  var i= 10 - stack.stackControl.length;
  stack.isEmpty();
  if (stack.isEmpty() === false){
    $("#stack-div div").last().hide();
    $("#delete-stack").next().hide();
  var takeValue = $(".stack-element:eq("+i+")").html();
  stack.stackControl.pop();
  $("#removed_stack strong").first().html("Removed element: "+takeValue);
  $(".stack-element:eq("+i+")").html("");
  console.log(stack.stackControl)
    }else{
      $("#stack-div div").last().show();
  }
})
