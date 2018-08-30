$(document).ready(function(){
    $(".overs").css("display", "none");
    $(".unders").css("display", "none");
    var myStack = new StackDataStructure();

    $('#adds').click(function () {
        
        if (myStack.canPush()){
            myStack.push($('#inputs').prop('value'));
            
            for (i = 0; i < myStack.stackControl.length; i++){
                var j = myStack.MAX_SIZE - 1 - i;
                document.getElementsByClassName('stack')[j].innerHTML = myStack.stackControl[i];
                $(".unders").css("display", "none");
                $($(".stack")[j]).addClass("hh");
            }
            
        } else {
            $(".overs").css("display", "inherit");
        }

    });

    $('#takes').click(function () {
        
        if (!myStack.isEmpty()){
            var popped = myStack.pop();
                var j = myStack.MAX_SIZE - myStack.stackControl.length - 1;
                document.getElementsByClassName('stack')[j].innerHTML = " ";
                $($(".stack")[j]).removeClass("hh");
                $(".overs").css("display", "none");
        } else {
            $(".unders").css("display", "inherit");
        }


    });
});