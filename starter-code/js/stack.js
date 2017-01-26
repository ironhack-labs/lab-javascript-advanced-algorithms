$( document ).ready(function() {
    console.log( "ready!" );
    $('.add-stack').on("click", function(){
      console.log($('.empty-stack:nth-child('+(10-stack.stackControl.length)+')').addClass("fill"))
      console.log($('.empty-stack:nth-child('+(10-stack.stackControl.length)+')').removeClass("empty-stack"))
      stack.stackControl.push("fill");
    });

    $('.remove-stack').on("click", function(){
      console.log($('.fill:nth-child('+(11-stack.stackControl.length)+')').addClass("empty-stack"))
      console.log($('.fill:nth-child('+(11-stack.stackControl.length)+')').removeClass("fill"))
      stack.stackControl.pop();
    })

    $('.add-queue').on("click", function(){
      console.log($('.empty-queue:nth-child('+(4+queue.queueControl.length)+')').addClass("fill-queue"))
      console.log($('.empty-queue:nth-child('+(4+queue.queueControl.length)+')').removeClass("empty-queue"))
      queue.queueControl.push("fill");
    });

    $('.remove-queue').on("click", function(){
      deleteQueue();
    })

});
