
var stack;

$(document).ready(function(){
    stack = new StackDataStructure();
});

    $(".add-button-stack").on("click", function(){
        element = $(".element-input-stack").val();
        if (!stack.canPush() && element) {
            $(".element-input-stack").val("")
            alert("Stack Overflow");
        } else if (element) {
            stack.push(element);
            var pushBox = $(".stack-box").last();
            pushBox.text(element);
            pushBox.removeClass("stack-box");
            pushBox.addClass("stack-box-filled");
            $(".element-input-stack").val("")
        } else {
            alert("Can't add empty item!")
        }
    });

    $(".remove-button-stack").on("click", function(){
        if (stack.isEmpty()) {
            alert("Stack Underflow");
        } else {
            var popBox = $(".stack-box-filled").first();
            popBox.removeClass("stack-box-filled");
            popBox.addClass("stack-box");
            popBox.text("")
            stack.pop();
        }
    });
