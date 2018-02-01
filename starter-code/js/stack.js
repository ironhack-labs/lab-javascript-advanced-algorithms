
var stackData = new StackDataStructure ();

$(document).ready(function() {
    var index = 14;

    //add stack button

    $('#add-stack').click(function(){
        var stackValue = $("#stackelement").val();
    
        if (stackData.canPush()) {
            stackData.push(stackValue);
            $(".stack-element:nth-child("+index+")").text(stackValue)
            console.log(index)
            index--
        } else {

        }
        console.log(stackData.stackControl)
      });

    //delete stack button

    $('#delete-stack').click(function(){
        if (stackData.isEmpty()) {
            
        } else {
            stackData.pop()
            index++
            $(".stack-element:nth-child("+index+")").text("")
            console.log(stackData.stackControl)
            console.log(index)
        }
      });




});