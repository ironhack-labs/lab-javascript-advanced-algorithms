$( document ).ready(function() {
  var stack = new StackDataStructure();

  $(".left #addStack").on("click", function(){
    console.log(stack.push($(".left #textStack").val()));
    // console.log(stack.stackControl);
    $(".left li:nth-child("+stack.stackControl.length+")").css("background-color","black");


  });

  $(".left #deleteStack").on("click", function(){

    console.log(stack.pop());
    // console.log(stack.stackControl);
    $(".left li:nth-child("+(stack.stackControl.length+1)+")").css("background-color","white");
  });

});
