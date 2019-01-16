var stack

$(document).ready(function(){
    stack = new StackDataStructure();
    stack.MAX_SIZE = 8;

    $('.btn-add').click(function() {
        //remove if there was stack underflow displayed
        $('.underflow').removeClass('item').text("")
        //if there is no stack overflow, push item to stack and change the last empty div
        if(stack.canPush()) {
            stack.push($('input').val());
            $('.empty:last').removeClass('empty').addClass('full').text($('input').val());
            $('.last-element').text("");
        } else 
        //if stack is full, display stack overflow
        $('.overflow').addClass('item').text("Stack Overflow");
    })
    $('.btn-take').click(function(){
        //remove if there was stack overflow displayed
        $('.overflow').removeClass('item').text("")
        //if the stack is empty, display stack underflow
        if(stack.isEmpty()){
            $('.underflow').addClass('item').text("Stack Underflow");
        } else {
            //if there is at least one item, write it's value beside and remove it from stack
            stack.pop();
            $('.last-element').text($('.full:first').text());
            $('.full:first').text("");
            $('.full:first').removeClass('full').addClass('empty');
        }
    })

})
