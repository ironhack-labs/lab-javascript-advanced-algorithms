var myStack = new StackDataStructure()

$(".add").click(function(){
    $("#addElemet")
    myStack.push(1);
    var i = myStack.MAX_SIZE -myStack.stackControl.length;
    $($(".element")[i]).addClass("element2")


});



$(".take").click(function(){
    $("#takeElement") 
    myStack.pop();
    var i =  myStack.MAX_SIZE-myStack.stackControl.length-1;
    $($(".element")[i]).removeClass("element2");

});


