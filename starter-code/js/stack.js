// Stack Data Structure visualization
function initStack() {
    var stack = new StackDataStructure();

    function showStack(stack) {
        var index = 0;
        for (index; index < stack.stackControl.length; index++) {
            var selector = '.stack-data-structure div:nth-child(' + (stack.MAX_SIZE - index) + ')';
            $(selector).addClass('in').text(stack.stackControl[index]);
        }

        for (index; index < stack.MAX_SIZE; index++) {
            var selector = '.stack-data-structure div:nth-child(' + (stack.MAX_SIZE - index) + ')';
            $(selector).removeClass('in').text('');
        }
    }
    
    $('.btn-stack-add').on('click', function() {
        var input = $('.stack-input');
        if (stack.canPush()) {
            stack.push(input.val());
            $('.stack-underflow').addClass('hidden');
            showStack(stack);
        } else {
            $('.stack-overflow').removeClass('hidden');
        }
    });

    $('.btn-stack-take').on('click', function() {
        if (!stack.isEmpty()) {
            stack.pop();
            $('.stack-overflow').addClass('hidden');
            showStack(stack);
        } else {
            $('.stack-underflow').removeClass('hidden');
        }
    });
}

$(document).ready(initStack);
