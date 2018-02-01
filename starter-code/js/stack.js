var stackData = new StackDataStructure ();

$(document).ready(function() {
    var index = 14;

    $("#add-stack").click(function(){

        var stackValue = $('#stackelement').val();
        if (stackData.canPush()){
            stackData.push(stackValue);
            $('.stack-element:nth-child('+index+')').text(stackValue);
            index--
        }else{

        }
      });
 
 
    $("#delete-stack").click(function(){
      });
 
 
    //   $(‘li’).removeClass(“active”)
    //   $(this).toggleClass(“active”)
 
 });