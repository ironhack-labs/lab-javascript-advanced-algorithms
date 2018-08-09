$(document).ready(function() {
    var stack = new Stack();

    $('#stack-button-add').on('click', function() {
        var input = $('#stack-input').val();
        if (input === '') return;
        $('#stack-input').val('');

        if ($('#stack-underflow').hasClass('active')) {
            $('#stack-underflow').removeClass('active');
            $('#stack-underflow').css('background-color', '#005b96');
        }

        if (stack.canAddMore()) {
            stack.add(input);
            refreshStackView(stack);
        } else {
            $('.stack-overflow').addClass('active');
            $('.stack-overflow').html('Stack Overflow');
        }
    });

    $('#stack-button-take').on('click', function() {
        if (stack.canTake()) {
            console.log('cantake', stack.canTake());
            stack.take();
            console.log(stack.stackArray);
            cleanStack();
        } else {
            $('#stack-underflow').addClass('active');
            $('#stack-underflow').html('Stack Underflow');
            $('#stack-underflow').css('background-color', '#f69c93');
        }
    });
});

function refreshStackView(stack) {
    var divArray = Array.from($('.stack-element'));

    var j = 0;

    for (var i = divArray.length - 1; i > divArray.length - stack.stackArray.length - 1; i--) {
        if (!$(divArray[i]).hasClass('occupied')) {
            $(divArray[i]).addClass('occupied');
            $(divArray[i]).html(stack.stackArray[j]);
        }
        j++;
    }
}

function cleanStack() {
    var divArray = Array.from($('.stack-element'));

    var index;
    for (var i = divArray.length; i >= 0; i--) {
        if ($(divArray[i]).hasClass('occupied')) index = i;
    }

    $(divArray[index]).removeClass('occupied');
    $(divArray[index]).html('');
}
