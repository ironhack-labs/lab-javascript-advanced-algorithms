$(document).ready(function(){
  stack = new StackDataStructure()

  $(".stack-blue").on("click",function(){
    stack.stackControl.push("STACK")
    console.log(stack.stackControl)
    $("#stack-number .s-number:nth-child("+(9-stack.stackControl.length)+")").addClass("active")
  })
  
  $(".stack-red").on("click",function(){
    stack.pop()
    console.log(stack.stackControl)
    $("#stack-number .s-number:nth-child("+(8-stack.stackControl.length)+")").removeClass("active")
  })


})
