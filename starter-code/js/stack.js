$( document ).ready(function() {

    var stack = new StackDataStructure();

    $('.btn').click(function(){
    

    stack.push($('input:nth-child(1)').val(''));

        
    $('.elements li ul').text(stack.stack[0]);
 

    });




});


