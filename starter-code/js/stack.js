

$(document).ready(function(){
    var newStack = new StackDataStructure();

    $('#add-stack').on('click', function () {
        if (!newStack.canPush()) {
            $('.error-stack:first').css("display", "block");
        } else {
        var input = $('#stackelement').val();
        newStack.push(input);
        var bottom = $('.stack-element:last');
        bottom.text(input);
        bottom.toggleClass('stack-element').toggleClass('stack-element-full');
        $('#stackelement').val('');
        }
    })

    $('#delete-stack').on('click', function () {

        if (newStack.isEmpty()) {
            $('.error-stack:last').css("display", "block");
        } else {
        newStack.pop();
        var top = $('.stack-element-full:first');
        var storeRemoved = top.text();
        top.text('');
        top.toggleClass('stack-element').toggleClass('stack-element-full');
        var removed = $('#removed_stack ul');
        removed.append('<li>' + storeRemoved + '</li>');
    }   
    
    })



})