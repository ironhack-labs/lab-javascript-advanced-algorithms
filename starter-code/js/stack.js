function stackUnderFlow(arr, stackLength) {
    arr[stackLength].innerHTML = 'STACKUNDERFLOW';
}

function stackOverFlow(arr, stackLength) {
    arr[stackLength - 1].innerHTML = 'STACKOVERFLOW';
}



var init = function () {
    var stackData = new StackDataStructure();
    var stackSpaces = document.querySelectorAll('stack-position')
    var arr = Array.from( stackSpaces );
    arr.reverse();
    var $introNew = $("<div class='.stack-element'></div>");


    $('.take').click(function() {
    
        if(stackData.isEmpty()) {
            stackUnderFlow(arr, stackData.stackSize.length);
        } else {
        stackData.stackControl.pop();
        $(arr[stackData.stackSize.length]).removeClass('stack-element');
        arr[stackData.stackSize.length].innerHTML = "";
    }
    })

    $('.add').click(function() {
        
        if (stackData.canPush()) {
            
            var $input = $("input").val();
            $(arr[stackData.stackSize.length]).toggleClass('stack-element');
            arr[stackData.stackSize.length].innerHTML = $input;
            stackData.stackSize.push($input);
        } else {
            stackOverFlow(arr, stackData.stackSize.length);
        }

        
    });
}

$(document).ready(init());