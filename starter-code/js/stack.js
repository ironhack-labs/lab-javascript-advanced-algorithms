$( document ).ready(function(){
  var stacker = new StackDataStructure();
  console.log(stacker)

  var stackNumber = 0
  $("#add-stack").click(function() {
    console.log("#stack-boxes")
    console.log($('#stack' + (10 - stackNumber)))
    $('#stack' + (10 - stackNumber)).css("background-color", "blue")
    stackNumber++;

  });






});
