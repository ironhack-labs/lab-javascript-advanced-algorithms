$( document ).ready(function() {

  var stack = new StackDataStructure;
  var max = this.MAX_SIZE
  
  


  $("#add").on("click", function(){
    var text = $("#inputText").val()
    $("#stack").append("<li></li>");
    if(stack.canPush()){
      $("li").addClass("box").text(text);
      $("#inputText").val("");
    }
  
  });

  $("#take").on("click", function(){
    $("li:first-child").remove();
})
});
