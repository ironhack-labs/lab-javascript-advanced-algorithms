$(document).ready(function (){
  var stack = new StackDataStructure();

  $(".btn-success").click(function() {
    // console.log("selecciona");
    $(".unselected:last").addClass("selected");
    $(".unselected:last").removeClass("unselected");
  });
});
