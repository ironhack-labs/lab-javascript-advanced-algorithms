var stack = new StackDataStructure();
    for(var i = 0 ; i< 5 ; i++){
      $(".stackStructure").add("div");
    }
$(document).ready(function(){
  var stack = new StackDataStructure();
    var stackStructure='';
    for(var i = stack.MAX_SIZE-1 ; i>=0  ; i++){
      stackStructure += '<div class="array"></div>';
    }
  $('.stackStructure').html(stackStructure);

  $(".addStack").click(function(){
    stack.push($(".inputStack").val());
    $(".stackStructure")[0].html(stack.stackControl[0]);
    console.log($(".inputStack").val());
  });
});