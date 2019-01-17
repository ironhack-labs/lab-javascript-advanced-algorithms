var stack = new StackDataStructure()
stack.MAX_SIZE = 5

var stackDiv = document.getElementById("stack")

var newElement = document.createElement("div")
newElement.setAttribute("class", "element")

for(var i = 0; i < stack.MAX_SIZE; i++){
  stackDiv.innerHTML+= newElement.outerHTML
}

$(".stack-controls .add").click(function(){
  if(stack.canPush() == true){
    stack.push($("#stack-input").val())
    $("#stack .element").eq(stack.MAX_SIZE - stack.stackControl.length).html($("#stack-input").val())
    $("#stack .element").eq(stack.MAX_SIZE - stack.stackControl.length).addClass("has-content")
    $("#stack-input").val("")
    if($("#stack .element").eq(stack.MAX_SIZE - 1).hasClass("overflow")){
      $("#stack .element").eq(stack.MAX_SIZE - 1).removeClass("overflow")
    }
  }else{
    $("#stack .element").eq(0).html("Stack Overflow")
    $("#stack .element").eq(0).addClass("overflow")
  }
})

$(".stack-controls .take").click(function(){
  if(stack.isEmpty() == false){
    $("#stack .element").eq(stack.MAX_SIZE - stack.stackControl.length).html("")
    $("#stack .element").eq(stack.MAX_SIZE - stack.stackControl.length).removeClass("has-content")
    if($("#stack .element").eq(0).hasClass("overflow")){
      $("#stack .element").eq(0).removeClass("overflow")
    }
    stack.pop()
  }else{
    $("#stack .element").eq(stack.MAX_SIZE - 1).html("Stack Underflow")
    $("#stack .element").eq(stack.MAX_SIZE - 1).addClass("overflow")
  }
})


