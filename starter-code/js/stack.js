const stack = new StackDataStructure();


function take() {

    if (stack.isEmpty()) {
        return void $('#index-1').addClass('underflow');
    }

    let element = $(`#index-${stack.stackControl.length}`);

    element.text('');

    if (element.hasClass('overflow')) 
        element.toggleClass('overflow');

    stack.stackControl.pop();
}


function add() {

    let value = $('#input')[0].value;

    let response = stack.push(value);

    let element = $(`#index-${stack.stackControl.length}`);

    if (response === 'Stack Overflow') {
        element.text('');
        return void element.addClass('overflow');
    };

    if (element.hasClass('underflow')) 
        element.toggleClass('underflow');

    element.text(value);
}
