$(document).ready(function(){
    $("#addToStack").on("click", function() {
        if($('#newStackElement').val().trim() !== ''){
            pushIntoStack($('#newStackElement').val());
            $('#newStackElement').val(''); 
        }
    });

     $("#takeFromStack").on("click", function() {
        takeFromStack();
    });
});


var Stack; 
function initialiseStack () {
    stack = new StackDataStructure();
    var stackUIParentElement = $('.stack');
    for(var i = 0; i<stack.MAX_SIZE; i++) {
        stackUIParentElement.append("<div class='empty-element'></div>");
    }
}

function listAllStackElements() {
    $('.stack').children('.element').remove();
    var stackUIParentElement = $('.stack');
    console.log(stack.stackControl.length);
    for(var i=0; i<stack.stackControl.length; i+=1) {
        stackUIParentElement.append('<div class="element">' + stack.stackControl[i] + '</div>');
    
    }
}

function pushIntoStack(element) {
    var result = stack.push(element);
    if (result === "Stack Overflow") {
        $('.stackMessage').text("Stack Overflow");
        $('.stackMessage').show();
    }
    else {
        $('.stackMessage').text('');
        $('.stack').children('.empty-element').slice(0, 1).remove();
        $('.stackMessage').hide();
        listAllStackElements();
    }
    
}

function takeFromStack() {
    var elementToRemove = stack.pop();
    if (elementToRemove === "Stack Underflow") {
        $('.stackMessage').text("Stack Underflow");
        $('.stackMessage').show();
    } else {
        stack.stackControl.pop(elementToRemove);
        $('.stackMessage').text('');
        $('.stack').append('<div class="empty-element"></div>');
        $('.stackMessage').hide();
        listAllStackElements();
    }
    
    
}

initialiseStack();