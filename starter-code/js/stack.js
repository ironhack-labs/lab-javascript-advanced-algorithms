

$(document).ready(function(){
var juanStack = new StackDataStructure();

$("btn-add").on("click", function(){
  if (juanStack.canPush()){
    juanStack.push(1);
    $("#stack").children().text("");
    $("#stack .colorTake:last").addClass("colorAdd");
    $("#stack .colorTake:last").removeClass("colorTake");
    console.log(juanStack);
  }
});

});
