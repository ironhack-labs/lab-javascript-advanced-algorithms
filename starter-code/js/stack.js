$( document ).ready(function() {
    var myStack = StackDataStructure;

    $(".stack .ADD").on('click', function (){
      console.log("me estas pulsando");
      if (myStack.canPush == false) {
        console.log("hola caracola");
      }
      else{
        console.log("ADiod");
      }
    });
});
