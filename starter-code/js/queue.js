$(document).ready(function () {
  var queue = new QueueDataStructure();
  $(".error-queue2").css('display', 'flex');
  $('#add-queue').click(function () {
    var Input = $("#queue-input").val()
    var elementos = queue.enqueue(Input);
    var divElementos = $(".queue-element"); 
    if(elementos !== "Queue Overflow"){
      for(var i = 0; i < elementos.length; i++){
        divElementos[i].innerHTML= elementos[i]
        $(divElementos[i]).show(1000).css('background-color', 'blue');
        $(".error-queue2").hide(1000);
      }
    }
    else {
      $(".error-queue1").show(600).css('display','flex');
    }
  }); 
  
  $("#delete-queue").click(function () { 
    $(".queue-element").text("");
    $(".queue-element").css('background-color', 'lightgrey');
    });
});