
var stackData = new StackDataStructure ();

$(document).ready(function() {
    
    var index = 14;

    //add stack button

    $('#add-stack').click(function(){
        var stackValue = $("#stackelement").val();
        
        if (stackData.canPush()) {
            
            stackData.push(stackValue);
            $(".stack-element:nth-child("+index+")").text(stackData.stackControl[0]);
            $(".stack-element:nth-child("+index+")").addClass("addedelement");
            index--
            $(".stack:first-child > .under").css("display","none");

        } else {

            $(".stack:first-child > .over").css("display","block");

        }
        $("#stackelement").val("");
      });

    //delete stack button

    $('#delete-stack').click(function(){
        if (stackData.isEmpty()) {

            $(".stack:first-child > .under").css("display","block");

        } else {

            stackData.pop()
            index++
            $(".stack-element:nth-child("+index+")").text("")
            $(".stack-element:nth-child("+index+")").removeClass("addedelement");
            $(".stack:first-child > .over").css("display","none");
        }
      });




});