

$(document).ready(function(){
var juanStack = new StackDataStructure();

$("btn-primary").on("click", function(){
  if (juanStack.canPush()){
    juanStack.push(1);
    $("#stack").children().text("");
    $("#stack .colorTake:last").addClass("colorAdd");
    $("#stack .colorTake:last").removeClass("colorTake");
    if(juanStack.stackControl.length == 0){
       $('#stack').children().addClass('colorTake');
       $('#stack').children().removeClass('colorError');
  }

 } else {

    $('#stack').children().addClass('colorError');
    $('#stack').children().removeClass('colorTake');
    $('#stack').children().removeClass('colorAdd');
    $('#stack').children().text('STACK OVERFLOW').css({
      color: "red",
      fontSize: "18px",
      textAlign: "center"
  });
 }
});
});
