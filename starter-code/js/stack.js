$("document").ready(function () {
  // OBJETO STACKDATASTRUCTURE

  var objectStack = new StackDataStructure();

  // TEXTO STACK INPUT

  $("#stack-btn-add").click(function () {

    var textoStack = $("#stack-input").val();

    if ($("#stack-input").val() === "") {
      alert("Introduce un elemento");
    } else {
      $("#stack-input").val("");
      objectStack.push(textoStack);

      var element = objectStack.stackControl[objectStack.stackControl.length - 1]

      $(".ready").text(element);

      $(".ready").removeClass("ready").addClass("active");

      $(".active").prev().first().addClass("ready");
    }
  });

  $("#stack-btn-remove").click(function () {

    $("#stack-input").val("");

    objectStack.pop();

    $(".active").first().text("");

    $(".active").prev().first().removeClass("ready");

    $(".active").first().removeClass("active").addClass("ready");
  })

})



