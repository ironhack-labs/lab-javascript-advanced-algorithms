$(document).ready(function(){
    var overflow = false;
    var underflow = false;

    var theStack = new StackDataStructure ();

    for (let i = 0; i < theStack.MAX_SIZE; i++) {
        var initialStack = document.createElement("div");
        initialStack.setAttribute("class", "stackInitial");
        $(".stackBox").append(initialStack);
    }

    $(".stackContainer .btn-add").click(function() {
        theInput = $(".stackContainer input").val();
        if (theInput.length > 0 && theStack.canPush()) {
            updateContainer(theStack.push(theInput));
            underflow = false;
        } else {
            var stackOverflow = document.createElement("div");
            stackOverflow.setAttribute("class", "stackOverflow");
            stackOverflow.textContent = "Stack Overflow";
            $(".stackBox").prepend(stackOverflow);
            overflow = true;
        }
    });

    $(".stackContainer .btn-take").click(function() {
        if (!(theStack.isEmpty())) {
            theStack.pop();
            updateContainer(theStack.stackControl);
            overflow = false;
        } else {
            var stackUnderflow = document.createElement("div");
            stackUnderflow.setAttribute("class", "stackUnderflow");
            stackUnderflow.textContent = "Stack Underflow";
            $(".stackBox").append(stackUnderflow);
            underflow = true;
        }
    });

    function updateContainer(array) {
        $(".stackBox").empty();
        for (let i = theStack.MAX_SIZE - 1; i >= 0; i--) {
            var theBox = document.createElement("div");
            if (array[i] === undefined) {
                theBox.setAttribute("class", "stackInitial");
            } else {
                theBox.setAttribute("class", "stackFinal");
                theBox.textContent = array[i];
            }
            $(".stackBox").append(theBox);
        }
    }
});

//