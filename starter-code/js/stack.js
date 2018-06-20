stack =new StackDataStructure();

$(document).ready(function(){
    for (var i=0; i<stack.MAX_SIZE; i++){ 
        $(".stack").append("<div class='stack-element'></div>");
    }
    
    $(".stack-element").css({
                            background: "grey",
                            width: "100%",
                            height: "30px",
                            margin: "1px 0"
                            });

    $("#form-stack .btn-primary").click(function (e){
        pushElement ($("#input-stack").val());

    });

    $("#form-stack .btn-danger").click(function (e){
        popElement ();
    });
});

function pushElement(value) {
    if ($("#input-stack").val()==""){
        return;
    }
    $("#input-stack").val("");
    var element = $(".stack-element:nth-child("+parseInt(stack.MAX_SIZE-stack.stackControl.length)+")");
    element.css({background: "red"});
    console.log(stack.push(value));
    reasignValues();
}

function reasignValues(){
    $(".stack-element").text("");
    for (var i = stack.stackControl.length; i>0; i--){
        var element = $(".stack-element:nth-child("+parseInt(stack.MAX_SIZE-stack.stackControl.length+i)+")");
        element.text((stack.stackControl[i-1]));
    }
}

function popElement(){
    var element = $(".stack-element:nth-child("+parseInt(stack.MAX_SIZE-stack.stackControl.length+1)+")");
    element.css({background: "grey"});
    console.log(stack.pop());
    console.log(stack.stackControl);
    reasignValues();
}
