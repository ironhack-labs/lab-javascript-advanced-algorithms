const POPPED_VAL_DISPLAY_TIME = 2000;
const ERR_ELEMENT_DISPLAY_TIME = 1000;

const stack = new StackDataStructure();

$('document').ready(function() {
    initStackElements();
    initUnderflowElement();

    $('#addButton').click(addButtonClicked);
    $('#takeButton').click(takeButtonClicked);
    $('#input').keypress(inputKeypressed);    
})

function initStackElements() {
    for (let i=0; i<stack.MAX_SIZE; i++) {
        let newStackElement = $('<div>').addClass('element');
        newStackElement.attr('id', `stack-element-${stack.MAX_SIZE-i}`);
        $('.container').append(newStackElement);
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

function inputKeypressed(event) {
    if (event.which == 13) {
        addButtonClicked();
        event.preventDefault();
    }
}

function addButtonClicked() {
    let input = $('#input').val();
    if (input) {
        if (stack.canPush()) {
            stack.push(input);
            let stackElement = $(`#stack-element-${stack.stackControl.length}`);
            stackElement.html(input);
            stackElement.toggleClass('filledElement');
        } else {
            showOverflowElement();
            setTimeout(hideOverflowElement, ERR_ELEMENT_DISPLAY_TIME);
        }
    }
}

function takeButtonClicked() {
    if (!stack.isEmpty()) {
        let stackElement = $(`#stack-element-${stack.stackControl.length}`);
        stackElement.html('');
        stackElement.toggleClass('filledElement')

        let poppedVal = stack.pop();
        setPoppedValueDisplay(poppedVal);
        setTimeout(clearPoppedValueDisplay, POPPED_VAL_DISPLAY_TIME);
    } else {
        showUnderflowElement();
        setTimeout(hideUnderflowElement, ERR_ELEMENT_DISPLAY_TIME);
    }
}

function showUnderflowElement() {
    $('#underflow').show();
}
function hideUnderflowElement() {
    $('#underflow').hide();
}
function showOverflowElement() {
    $('#overflow').show();
}
function hideOverflowElement() {
    $('#overflow').hide();
}
function setPoppedValueDisplay(value) {
    $('#poppedValue').html(value);
}
function clearPoppedValueDisplay() {
    $('#poppedValue').html('');
}