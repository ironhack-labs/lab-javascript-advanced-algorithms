var stack = new StackDataStructure();
$(document).ready(function() {
  var stack = new StackDataStructure();
  var stackStructure = "";
  for (var i = stack.MAX_SIZE - 1; i >= 0; i--) {
    stackStructure += `<div class="array arrayContentStack${i}"></div>`;
  }

  $(".stackStructure").html(stackStructure);

  function draw() {
    for (var j = 0; j < stack.MAX_SIZE; j++) {
      $(`.arrayContentStack` + j).empty();
      $(`.arrayContentStack` + j).text(stack.stackControl[j]);
    }
  }

  $(".addStack").click(function() {
    if(!stack.canPush())
      alert(stack.push())
    stack.push($(".inputStack").val());
    draw();
  });

  $(".removeStack").click(function() {
    stack.pop();
    draw();
  });
});
