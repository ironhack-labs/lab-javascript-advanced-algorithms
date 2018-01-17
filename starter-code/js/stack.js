var stack = new StackDataStructure();

function updateStackShowcase(elems) {
  for (i = 0; i < stack.MAX_SIZE; i++) {
    var datas = $("#stack-container .data");
    if (!elems[i]) {
      $(datas[i]).html("");
    } else {
      $(datas[i]).html(elems[i]);
    }
  }
}

function emptyInputAlert() {
  $("#stack-form-group").addClass("has-error");
}

$("#add-stack").click(function() {
  if ($("#stack-elem").val() == "") {
    emptyInputAlert();
  } else {
    $("#stack-form-group").removeClass("has-error");
    var addElem = stack.push($("#stack-elem").val());

    if (addElem == "Stack Overflow") {
      $("#stack-overflow").removeClass("hidden");
    } else {
      $("#stack-underflow").addClass("hidden");
      updateStackShowcase(addElem);
    }
  }
});
$("#remove-stack").click(function() {
  var removeElem = stack.pop();

  if (removeElem == "Stack Underflow") {
    $("#stack-underflow").removeClass("hidden");
  } else {
    $("#stack-overflow").addClass("hidden");
    updateStackShowcase(stack.stackControl);
  }
});
