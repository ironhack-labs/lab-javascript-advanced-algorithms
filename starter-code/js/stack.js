$(document).ready(function(){
  var stack = new StackDataStructure();

  $("#stack-add").on("click", function(){

    if(stack.canPush()){
      var inputValue =  $("#stack-value").val()
      console.log(inputValue)

      stack.push(inputValue)

      var newClass = ".block-" + stack.stackControl.length

      console.log(newClass)

      $(newClass).removeClass("grey")
      $(newClass).addClass("blue")

      var articles = document.getElementsByClassName("stack")
      //articles = articles.firstChild.nodeValue = inputValue
        for(var i = 0; i < articles.length; i++) {
            var node =  articles[i]
            node.innerHTML = inputValue
        }


    }
  });
});
