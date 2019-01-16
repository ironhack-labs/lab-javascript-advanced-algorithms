var stack

$(document).ready(function(){
    stack = new StackDataStructure();
    stack.MAX_SIZE = 8;

    $('.btn-add').click(function() {
        $('.underflow').removeClass('item').text("")
        if(stack.canPush()) {
            stack.push($('input').val());
            $('.empty:last').removeClass('empty').addClass('full').text($('input').val());
            $('.last-element').text("");
        } else 
        $('.overflow').addClass('item').text("Stack Overflow");
    })
    $('.btn-take').click(function(){
        $('.overflow').removeClass('item').text("")
        if(stack.isEmpty()){
            $('.underflow').addClass('item').text("Stack Underflow");
        } else {
            stack.pop();
            $('.last-element').text($('.full:first').text());
            $('.full:first').text("");
            $('.full:first').removeClass('full').addClass('empty');
        }
    })

})
