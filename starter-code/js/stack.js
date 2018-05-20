$(document).ready(function () {
    var stackObject = new StackDataStructure;

    addStackItem(stackObject);
    removeStackItem(stackObject);  
    showOverUnderFlowStack(stackObject);  
});

function showOverUnderFlowStack(stackObject){
    if(stackObject.stackControl.length === 10){
        $('#stack-overflow').show();
    }else{
        $('#stack-overflow').hide();
    }
    
    if(stackObject.stackControl.length === 0){
        $('#stack-underflow').show();
    }else{
        $('#stack-underflow').hide();
    }
}

function addStackItem(stackObject) {
    $("#add-stack-item").on("click", function () {
        var $stackValue = $("#stack-value").val();
        if ($stackValue) {          
            stackObject.push($stackValue);
            $("#stack-value").val('');           
            itemListStack(stackObject);
        }
        showOverUnderFlowStack(stackObject);
    });
}


function removeStackItem(stackObject) {
    $("#remove-stack-item").on("click", function () {
        stackObject.pop();
        itemListStack(stackObject);
        showOverUnderFlowStack(stackObject);
    });
}

function itemListStack(stackObject) {
    $('.array-stack-item').empty();
    stackObject.stackControl.forEach(element => {
        var $item = $('#template-item').clone();
        $item[0].style.display = 'block';
        $item.text(element);     
        $(".array-stack-item").append($item);
    }); 
}