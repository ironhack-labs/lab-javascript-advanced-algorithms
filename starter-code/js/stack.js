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

$("#add-stack").click(function() {
  var addElem = stack.push($("#stack-elem").val());

  if (addElem == "Stack Overflow") {
    $("#stack-overflow").removeClass("hidden");
  } else {
    updateStackShowcase(addElem);
  }
});
$("#remove-stack").click(function() {
  var removeElem = stack.pop();

  if (removeElem == "Stack Underflow") {
    $("#stack-underflow").removeClass("hidden");
  } else {
    updateStackShowcase(stack.stackControl);
  }
});
