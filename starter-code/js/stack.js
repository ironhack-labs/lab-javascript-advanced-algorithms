$(document).ready(function(){
  var stack = new StackDataStructure();

  $("#stack-add").on("click", function(e){
    e.preventDefault()
    if(stack.canPush()){
      var a =  $("#stack-value").val()
      console.log(a)

      stack.push(a)

      var b = ".block-" + stack.stackControl.length

      console.log(b)

      $(b).removeClass("grey")
      $(b).addClass("blue")
      var c = document.getElementsByClassName("stack")
      c.innerHTML = stack.stackControl[stack.stackControl.length]

    }
  });
});
