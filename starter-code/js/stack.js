var stack =new StackDataStructure();
var cssStack = {
                background: "blue",
                "font-size": "2em",
                "text-align": "center",
                color: "white",
                padding: "5px 0"
                };
var cssElement = {
                background: "grey",
                width: "100%",
                height: "60px",
                margin: "1px 0"
                };
var cssOverflow = {
                "text-align": "center",
                "font-size": "2em",
                background: "red",
                color: "white",
                width: "100%",
                height: "60px",
                padding: "5px 0",
                margin: "1px 0"
                };

$(document).ready(function(){
    for (var i=0; i<stack.MAX_SIZE; i++){ 
        $(".stack").append("<div class='stack-element'></div>");
    }
    
    $(".stack-element").css(cssElement);

    $("#form-stack .btn-primary").click(function (e){
        pushElement ($("#input-stack").val());

    });

    $("#form-stack .btn-danger").click(function (e){
        popElement ();
    });
});

function outOfBounds(direction){
    stack.stackControl = ["I", "R", "O", "N", "H", "A", "C", "K"];
    var parent = $(".stack");
    console.log(parent);
    if (direction=="overflow"){
        parent.prepend("<div class='"+direction+"'></div>");
    } else {
        parent.append("<div class='"+direction+"'></div>");
    }
    $("."+direction).css(cssOverflow).text("stack "+direction);
    reasignValues();
    $(".stack-element").css(cssStack);
}

function reasignValues(){
    $(".stack-element").text("");
    for (var i = stack.stackControl.length; i>0; i--){
        var element = $(".stack-element:nth-child("+parseInt(stack.MAX_SIZE-stack.stackControl.length+i)+")");
        element.text((stack.stackControl[i-1]));
    }
}

function pushElement(value) {
    if ($("#input-stack").val()==""){
        return;
    }
    $("#input-stack").val("");
    if(stack.push(value) != "Stack Overflow"){
        $(".underflow").remove();
        var element = $(".stack-element:nth-child("+parseInt(stack.MAX_SIZE-stack.stackControl.length+1)+")");
        element.css(cssStack);
        reasignValues();
    } else {
        outOfBounds("overflow");
    }
}

function popElement(){
    if(stack.pop()!="Stack Underflow"){
        $(".overflow").remove();
        var element = $(".stack-element:nth-child("+parseInt(stack.MAX_SIZE-stack.stackControl.length)+")");
        element.css(cssElement);
        reasignValues();
    } else {
        outOfBounds("underflow");
    }
}
