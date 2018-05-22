$(()=>{
    let stack = new StackDataStructure();
    $("#addStack").on("click", function() {
        addToStack();
    });
    $("#removeStack").on("click", function() {
        removeFromStack();
    });
    function addToStack() {
        let newElementToStack = $("#inputStack").val();
        (newElementToStack) &&
            ((stack.canPush()) ? 
            ($("#StackUnderflow").hide(),stack.push(newElementToStack),
            nextPlace = "#stack_"+(stack.MAX_SIZE - stack.stackControl.length),
            $(nextPlace).toggleClass("filled"),
            $(nextPlace)[0].innerText=newElementToStack) : $("#StackOverflow").show())
    }
    function removeFromStack() {
        (!stack.isEmpty()) ? 
        ($("#StackOverflow").hide(),
        stack.pop(),
        nextPlace = "#stack_"+(stack.MAX_SIZE - 1 - stack.stackControl.length),
        $(nextPlace).toggleClass("filled"),
        $(nextPlace)[0].innerText="-") : $("#StackUnderflow").show()
    }
});