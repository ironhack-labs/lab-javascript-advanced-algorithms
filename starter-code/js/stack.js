$( document ).ready(function() {
    console.log( "ready!" );
    $('.add-stack').on("click", function(){
      addStack();
    });

    $('.remove-stack').on("click", function(){
      deleteStack();
    })

});
