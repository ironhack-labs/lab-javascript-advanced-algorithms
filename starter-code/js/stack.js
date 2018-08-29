function stackUnderFlow(arr, stackLength) {
    arr[stackLength].innerHTML = 'STACKUNDERFLOW';
}

function stackOverFlow(arr, stackLength) {
    arr[stackLength - 1].innerHTML = 'STACKOVERFLOW';
}



var init = function () {
    var stackData = new StackDataStructure();
    var stackSpaces = document.getElementsByClassName('stack-control')
    var arr = Array.from( stackSpaces );
    arr.reverse();
    var $purple = $("<div class='.stack-element'></div>");


    $('.take').click(function() {
    
        if(stackData.isEmpty()) {
            stackUnderFlow(arr, stackData.stackControl.length);
        } else {
        stackData.stackControl.pop();
        $(arr[stackData.stackControl.length]).removeClass('stack-element');
        arr[stackData.stackControl.length].innerHTML = "";
    }
    })

    $('.add').click(function() {
        
        if (stackData.canPush()) {
            
            var $input = $("input").val();
            $(arr[stackData.stackControl.length]).toggleClass('stack-element');
            arr[stackData.stackControl.length].innerHTML = $input;
            stackData.stackControl.push($input);
        } else {
            stackOverFlow(arr, stackData.stackControl.length);
        }

        
    });
}

$(document).ready(init());