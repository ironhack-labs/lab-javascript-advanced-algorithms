const stack = new StackDataStructure();
$('document').ready(function() {
    // init stack
    $('#overflow').hide();
    initStackElements();
    initUnderflowElement();

    // init button listeners
    $('#addButt').click(addButtClicked);
    $('#takeButt').click(takeButtClicked);
})

function initStackElements() {
    for (let i=0; i<stack.MAX_SIZE; i++) {
        let stackElement = $('<div>').addClass('element');
        stackElement.attr('id', `stack-element-${stack.MAX_SIZE-i}`);
        $('.container').append(stackElement);
    }
}

function initUnderflowElement() {
    let underflowElement = $('<div>').addClass('element');
    underflowElement.addClass('errorElement')
    underflowElement.attr('id', 'underflow');
    underflowElement.html('Stack Underflow');
    $('.container').append(underflowElement);
    underflowElement.hide();
}

function addButtClicked() {
    let input = $('#input').val();
    if (input) {
        if (stack.canPush()) {
            stack.push(input);
            let stackElement = $(`#stack-element-${stack.stackControl.length}`);
            stackElement.html(input);
            stackElement.toggleClass('filledElement');
        } else {
            showOverflow();
            setTimeout(hideOverflow, 1000);
        }
    }
}

function takeButtClicked() {
    if (!stack.isEmpty()) {
        let stackElement = $(`#stack-element-${stack.stackControl.length}`);
        stackElement.html('');
        stackElement.toggleClass('filledElement')
        let poppedVal = stack.pop();
        setPoppedValue(poppedVal);
        setTimeout(clearPoppedValue, 2000);
    } else {
        showUnderflow();
        setTimeout(hideUnderflow, 1000);
    }
}

function showUnderflow() {
    $('#underflow').show();
}
function hideUnderflow() {
    $('#underflow').hide();
}
function showOverflow() {
    $('#overflow').show();
}
function hideOverflow() {
    $('#overflow').hide();
}
function setPoppedValue(value) {
    $('#poppedValue').html(value);
}
function clearPoppedValue() {
    $('#poppedValue').html('');
}