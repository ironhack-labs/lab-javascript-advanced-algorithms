// New queue obj.
var stack = new StackDataStructure();

// Add element to the queue
$("#add-stack").click(function() {
  // MISSING CHECK IF EMPTY INPUT !!!
    if ($("#stackelement").val() != '') {
        var element = $("#stackelement").val();
        if (stack.canPush()) {
            // Hide Stack Underflow warning
            $(".error-stack:last").hide();
            // Enable stack-push button
            $("#delete-stack").prop("disabled", false);
            stack.push(element);
            // Adds text to the last empty stack-element
            $(".stack-element:empty:last").text(element);
        } else {
            // Show Stack Overflow warning
            $(".error-stack:first").show();
            // Disable add-stack button
            $("#add-stack").prop("disabled", true);
        }
    } else {
        alert('Empty input');
    }

    // Empty input field
    $("#stackelement").val('');
});

// Delete element from the stack
$("#delete-stack").click(function() {
  if (stack.isEmpty()) {
    // Show Stack Underflow warning
    $(".error-stack:last").show();
    // Disable delete-stack button
    $("#delete-stack").prop("disabled", true);
  } else {
    // Hide Stack Overflow warning
    $(".error-stack:first").hide();
    // Enable add-stack button
    $("#add-stack").prop("disabled", false);
    stack.pop();
    // Empty first non empty stack-element
    $(".stack-element:not(:empty):first").text('');
  }
});
