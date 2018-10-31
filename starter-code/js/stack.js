$(function(){
    var stack = new StackDataStructure;
    stack.MAX_SIZE=8;
    // alert("DOM is Loaded");

    var html="";

    for(i=0;i<stack.MAX_SIZE;i++){
        html+= '<div class="stack-element"></div> \n'
        // $('.stack.container').append(`<div class="stack-element"></div>`);
    }
    $('.stack.container').html(html);

    stack.printStack();
    
    $('.stack.add').on("click",function(){
        // if stack.canPush()
        stack.push($('.stack.input').prop("value"));
        stack.printStack();
    });

    $('.stack.take').on("click",function(){
        stack.pop();
        stack.printStack();
    });
})

