$(document).ready(function () {
    var elements = $('#elements').children();
    var addBtn = $('#add');
    var takeBtn = $('#take');
    var input = $('input');

    var myStack = new StackDataStructure();

    $('#stack-underflow').hide()
    $('#stack-overflow').hide();

    addBtn.click(function (e) { 
        e.preventDefault();
        
        myStack.push(input.val());
        if(!myStack.isEmpty()){
            $('#stack-underflow').hide();
        }
        if (myStack.canPush()) {
            elements[myStack.MAX_SIZE - myStack.stackControl.length].classList.add('element-full');
            elements[myStack.MAX_SIZE - myStack.stackControl.length].innerHTML = input.val();
        } else {
            $('#stack-overflow').toggle();
            $('#stack-overflow').addClass('stackInfo');
            $('#stack-overflow').text(myStack.push());
            elements[myStack.MAX_SIZE - myStack.stackControl.length].classList.add('element-full');
            elements[myStack.MAX_SIZE - myStack.stackControl.length].innerHTML = input.val();
        }

        input.val("");
    });

    takeBtn.click(function (e) { 
        e.preventDefault(); 
        
        if($('#stack-overflow').is(':visible')){
            $('#stack-overflow').hide();
        }
        if(myStack.isEmpty()){
            $('#stack-underflow').toggle();
            $('#stack-underflow').addClass('stackInfo');
            $('#stack-underflow').text(myStack.pop());
        }
        if($('.element-full')){
            $('.element-full').first().text('');
            $('.element-full').first().removeClass('element-full');
        }
        myStack.pop();
        console.log(myStack.stackControl.length);
    });

});

