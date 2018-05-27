$(document).ready(function (){
    var stack = new StackDataStructure();
    stack.stackControl = ["stack1","stack2"];

    printStack(stack.stackControl);
    addElement(stack);
    removeElement(stack);

});

function addElement(stack) {
    $("#add-stack-button").click(function(){
        if(stack.canPush()){
            var InputVal = $("input[name='add-stack-element']").val();
            stack.push(InputVal);  
            //probably not the best option to clear and reprint the whole array each time, but I wanted to use the 
            printStack(stack.stackControl);
            //$("#stack-elements").append("<li>" + InputVal + "</li>");
        } else {
            //first check to see if we have already shown the warning
            if ($(".overflow").length == 0) {
                var overflowText = "Stack Overflow";
                $("#stack-elements").prepend("<div class='overflow'>" + overflowText + "</div>");
            }
        }
    }); 
}

function removeElement(stack) {
    $("#remove-stack-button").click(function(){            
        if(!stack.isEmpty()){
            stack.pop(); 
            printStack(stack.stackControl);
        } else {
            var overflowText = "Stack Underflow";
            $("#stack-elements").text(overflowText);
        }
    }); 
}

// print each element in the stack list as an li
function printStack(array) {
    $("#stack-elements").empty();
    jQuery.each(array, function(i, arrayEl) {
       // is this an xss attack risk?
        $("#stack-elements").prepend("<li>" + arrayEl + "</li>");
    });
}
