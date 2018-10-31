$(function(){
    var stack = new StackDataStructure;
    stack.MAX_SIZE=8;
    alert("DOM is Loaded");

    for(i=0;i<stack.MAX_SIZE;i++){
        $('.stack.container').append(`<div class="stack-element"></div>`);
    }
    
    stack.printStack();
    
    $('.stack.add').on("click",function(){
        stack.push($('.stack.input').prop("value"));
        stack.printStack();
    });

    $('.stack.take').on("click",function(){
        stack.pop();
        stack.printStack();
    });

})

