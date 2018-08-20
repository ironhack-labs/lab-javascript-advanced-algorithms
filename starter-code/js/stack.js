$(document).ready(function() {
  var stackDataStructure = new StackDataStructure();
  $("#add-stack").click(function() {
    var values = $("#stackelement").val();
    stackDataStructure.push(values);
    console.log(stackDataStructure.stackControl);

    $(".stack-element").text(values);
  });
});
