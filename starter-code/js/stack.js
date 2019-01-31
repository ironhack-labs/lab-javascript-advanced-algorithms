const stack = new StackDataStructure();


function take() {

    if (stack.isEmpty()) {
        return void $('#index-1').addClass('underflow');
    }

    $(`#index-${stack.stackControl.length}`).text('');

    stack.stackControl.pop();
}


function add() {

    let value = $('#input')[0].value;

    if (stack.push(value) === 'Stack Overflow') {
        $(`#index-${stack.stackControl.length}`).text('');
        return void $('#index-8').addClass('overflow');
    };

    
    $(`#index-${stack.stackControl.length}`).text(value);
}
