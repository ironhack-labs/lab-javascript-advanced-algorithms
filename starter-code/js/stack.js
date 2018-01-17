$(document).ready(function() {
    var allstacks = new StackDataStructure();
    $("#btn-1").on("click",function(){
        allstack.push($("imput").val());
        consolo.log(allStacks);
        $(".grey").last().removeClass("grey").addClass("active");
    })
    $("#btn-2").on("click",function(){
        allStacks.stackControl.pop();
})
});