$( document ).ready(function() {
    console.log( "ready!" );
    $('.add-queue').on("click", function(){
      addQueue();
    });

    $('.remove-queue').on("click", function(){
      deleteQueue();
    })

});
