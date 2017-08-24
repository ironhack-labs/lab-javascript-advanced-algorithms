$( document ).ready(function() {
  var queue = new QueueDataStructure();

  $(".right #addStack").on("click", function(){
    console.log(queue.enqueue($(".right #textStack").val()));
    // console.log(stack.stackControl);
    $(".right li.last-try:first").prop("class", "last-try2");


  });

  $(".right #deleteStack").on("click", function(){

    console.log(queue.dequeue());
    $(".right li.last-try2:first").prop("class", "last-try");
  });

});
