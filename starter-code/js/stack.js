$(document).ready(function () {
var stack = new StackDataStructure();

$("#size-button").click(function(){
    $(".inputs").children().each(function(){
        $(this).toggleClass("d-none");
    })
    stack.MAX_SIZE = parseInt($("#max-size").val());
    var stackSlotsHtml = "";
    for(var i = 0; i < stack.MAX_SIZE; i++){
        stackSlotsHtml += '<div class="my-1 border border-dark bg-light"><span>...</span></div>'
    }
    $("#stacks-container").html(stackSlotsHtml);
});



function updateSlots() {
    var spanArr = $("#stacks-container > div").children();
    for(var i = 0; i < spanArr.length; i++){
        if(stack.canPush() && stack.stackControl.length > i){
            spanArr[i].innerText = stack.stackControl[i];
        } else {
            spanArr[i].innerText = "...";
        }
        
    }
    

}

// function checkIfFull () {
//     if
// }



$("#add").click(function(){
    stack.push($("#push").val());
    updateSlots();
});

});
