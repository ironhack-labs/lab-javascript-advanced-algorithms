var stack;

$("document").ready(function() {
    console.log("stack ready");

    // Initialize stack
    stack = new StackDataStructure();
    stack.MAX_SIZE = 8;

    // Listeners
    $("#stack button.add").click(function() {
        console.log("Add to stack");
        var input = $("#stack input");
        if ($.isNumeric(input.val())) {
            if (stack.canPush()) {
                stack.push(parseInt(input.val()));
                updateStackRepresentation();
                $("#stack .underflow").addClass("hidden");
            } else {
                $("#stack .overflow").removeClass("hidden");
            }
        } else {
            input.val("");
        }
    });

    $("#stack button.delete").click(function() {
        console.log("remove from stack");
        if (!stack.isEmpty()) {
            $("#stack .overflow").addClass("hidden");
            stack.pop()
            updateStackRepresentation();
        } else {
            $("#stack .underflow").removeClass("hidden");
        }
    });

    // Helpers
    function updateStackRepresentation() {
        //foreach existing element, draw it
        for (var i = 0; i < stack.stackControl.length; i++) {
            var selector = "#stack-representation div:nth-child(" + (8 - i) + ")";
            // var tile =$(selector);
            $(selector).addClass("filled");
            $(selector).html(stack.stackControl[i]);
        };
        //Empty the remaining divs
        for (; i < 8; i++) {
            var selector = "#stack-representation div:nth-child(" + (8 - i) + ")";
            $(selector).removeClass("filled");
            $(selector).html("");
        }
    }
})