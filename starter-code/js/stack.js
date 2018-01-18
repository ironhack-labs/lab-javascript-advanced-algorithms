$(document).ready(function() {
  var stackDataStructure = new StackDataStructure();
  var focusedInput = null;
  var addingStack = null;
  var stackInput = $("#stackInput");

  //Add Stack button
  $("#addStack").on("click", function() {
    $("#stackUnderflow").addClass("hidden");
    if (stackInput.val() !== "" && stackDataStructure.canPush() === true) {
      $(".stackItems>.notStacked:last").text(stackInput.val());
      addStackColor(9 - stackDataStructure.stackControl.length);
      stackDataStructure.push(stackInput.val());
    } else if (!stackDataStructure.canPush()) {
      $("#stackOverflow").removeClass("hidden");
    }
  });

  //Take Stack button
  $("#takeStack").on("click", function() {
    $("#stackOverflow").addClass("hidden");
    if (stackDataStructure.isEmpty()) {
      $("#stackUnderflow").removeClass("hidden");
    } else {
      $(".stackItems>.Stacked:first").text("");
      removeStackColor(
        stackDataStructure.MAX_SIZE + 2 - stackDataStructure.stackControl.length
      );
      stackDataStructure.stackControl = stackDataStructure.stackControl.slice(
        0,
        stackDataStructure.stackControl.length - 1
      );
    }
  });
});

//Function to change the class formatting the background color for stacks
//It takes the length of the stackDataStructure.stackControl array and applies the color to the first n elements of the stack
function addStackColor(nthChild) {
  //Change format of the highest stack
  $(".stackItems>:nth-child(" + nthChild + ")")
    .removeClass("notStacked")
    .addClass("list-group-item-info Stacked");
  //Change the format of all previous stacks
  $(".stackItems>.Stacked:first")
    .nextAll()
    .removeClass("notStacked")
    .addClass("list-group-item-info Stacked");
}

function removeStackColor(nthChild) {
  //Change format of the highest stack
  $(".stackItems>:nth-child(" + nthChild + ")")
    .removeClass("Stacked list-group-item-info")
    .addClass("notStacked");
  //Change the format of all stacks leading to that one (as seen form above)
  $(".stackItems>.notStacked:last")
    .prevAll()
    .removeClass("Stacked list-group-item-info")
    .addClass("notStacked");
}
