$(document).ready(function() {
    stack = new StackDataStructure();
     $(".btn-add").click(function() {
        addToStack(stack);
    });
     $(".btn-take").click(function() {
        takeFromStack(stack);
    });



   function addToStack(stack) {
        var inputValue = $(".form-control").val();
        $("form-control").val("");
        if (stack.push(inputValue) == "Stack Overflow") {
                stackIsOverflow()
            } else {
                displayAddedValue(stack)
            }
        }

    function takeFromStack(stack) {
            if (stack.pop() === "Stack Underflow") {
                stackIsUnderflow(stack)
            } else {
                removeLastValue(stack)
            }
        }

    function displayAddedValue(stack) {
        stackLength = stack.stackControl.length
        itemToDisplay = stack.stackControl[stackLength-1]
        listLength = stack.MAX_SIZE-$(".element").length;
        $(".stack-item").eq(listLength).text(itemToDisplay).addClass("element").removeClass("Underflow");
        }
    
    function stackIsOverflow() {
        $(".stack-item").eq(0).text("Stack OverFlown").addClass("element");
    }


    function removeLastValue(stack){
        stackLength = stack.stackControl.length
        itemToRemove = stack.stackControl[stackLength-1]
        $(".element").eq(0).text("").removeClass("element");
    }

    function stackIsUnderflow(stack) {
        $(".stack-item").eq(stack.MAX_SIZE).text("Stack Underflow").removeClass("element").addClass("Underflow");
    }
});
