$(function(){


    var stack = new StackDataStructure();

    //REMOVE ELEMENT FROM STACK
    $("#take-element-stack").on("click", function(){
        removeFromStack();
    });

    //ADD ELEMENT TO STACK
    $("#add-element-stack").on("click", function(){
        addToStack();
    });


    function addToStack(){
        if(stack.push(2)){
            debugger;
            var freeCell = 10 - stack.stackControl.length;
            //Complete...
        }
        else{
            //Add code...
        }
    }


    function removeFromStack(){
        if(!stack.pop()){
            $("#stack-bottom").html("<p>Stack Underflow</p>").addClass("over");
        }
        else{
            //Add code...
        }
    }







});