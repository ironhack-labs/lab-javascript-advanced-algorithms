var stack = new StackDataStructure()
stack.MAX_SIZE = 5

var stackDiv = document.getElementById("stack")

var newElement = document.createElement("div")
newElement.setAttribute("class", "element")

for(var i = 0; i < stack.MAX_SIZE; i++){
  stackDiv.innerHTML+= newElement.outerHTML
}

$(".add").click(function(){
  if(stack.canPush() == true){
    stack.push($("#stack-input").val())
    $(".element").eq(stack.MAX_SIZE - stack.stackControl.length).html($("#stack-input").val())
    $(".element").eq(stack.MAX_SIZE - stack.stackControl.length).addClass("has-content")
    $("#stack-input").val("")
    if($(".element").eq(stack.MAX_SIZE - 1).hasClass("overflow")){
      $(".element").eq(stack.MAX_SIZE - 1).removeClass("overflow")
    }
  }else{
    $(".element").eq(0).html("Stack Overflow")
    $(".element").eq(0).addClass("overflow")
  }
})

$(".take").click(function(){
  if(stack.isEmpty() == false){
    $(".element").eq(stack.MAX_SIZE - stack.stackControl.length).html("")
    $(".element").eq(stack.MAX_SIZE - stack.stackControl.length).removeClass("has-content")
    if($(".element").eq(0).hasClass("overflow")){
      $(".element").eq(0).removeClass("overflow")
    }
    stack.pop()
  }else{
    $(".element").eq(stack.MAX_SIZE - 1).html("Stack Underflow")
    $(".element").eq(stack.MAX_SIZE - 1).addClass("overflow")
  }
})


