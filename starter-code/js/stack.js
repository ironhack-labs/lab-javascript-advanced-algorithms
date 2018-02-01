$(document).ready(function(){
    var stack = new StackDataStructure();
    $("#add-stack").on("click", function(){
        if (stack.canPush() && $("#stackelement").prop("value")!=""){
            var eli = $("#stackelement").prop("value");
            stack.push(eli);
            console.log(stack.stackControl);
            var length = stack.stackControl.length;
            for (var i = length; i >0  ; i--){
                $(".stack-element:nth-last-child("+(i+1)+")").text(stack.stackControl[i-1]);
                $(".stack-element:nth-last-child("+(i+1)+")").addClass("addedelement");
            }
            $("#stackelement").prop("value", "");
        } else if (stack.canPush()===false){
            $("#stack-div .over").css("display", "block");
            setTimeout(function(){
                $("#stack-div .over").css("display", "none");
            }, 1000);
        }
    });
    $("#delete-stack").on("click", function(){
        console.log("estas borrando")
        if (stack.isEmpty()){
            $("#stack-div .under").css("display", "block");
            setTimeout(function(){
                $("#stack-div .under").css("display", "none");
            }, 1000);
        } else{
            $(".stack-element:nth-last-child("+(stack.stackControl.length+1)+")").text("");
            $(".stack-element:nth-last-child("+(stack.stackControl.length+1)+")").removeClass("addedelement");
            stack.pop();
            console.log(stack.stackControl);
            var length = stack.stackControl.length;
            for (var i = length; i >0  ; i--){
                $(".stack-element:nth-child("+(i+1)+")").text(stack.stackControl[i-1]);
                $(".stack-element:nth-child("+(i+1)+")").addClass("addedelement");
            }
        }
    });
});