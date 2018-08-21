var stack = new StackDataStructure();

$("#add-stack").click(function() {
    var val = $("#stackelement").val();
    if(stack.canPush()) {
        $(".error-stack:last").hide();
        $("#delete-stack").prop('disabled', false);
        stack.push(val);
        $(".stack-element:empty:last").text(val);
    } else {
        $(".error-stack:first").show();
        $("#add-stack").prop('disabled', true);
    }
    $("#stackelement").val('');
});

$("#delete-stack").click(function() {
    if(stack.isEmpty()) {
        $(".error-stack:last").show();
        $("#delete-stack").prop('disabled', true);
    } else {
        $(".error-stack:first").hide();
        $("#add-stack").prop('disabled', false);
        stack.pop();
        $(".stack-element:not(:empty):first").text('');
    }
});
