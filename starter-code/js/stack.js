$(document).ready(function(){
    var stack = new StackDataStructure;
    var crearDiv = $('<div/>');
    $(".container #addButton").on("click", function(){
        $(this).add("<div/>").addClass("blue_box");
    })  

    $(".container #takeButton").on("<div>", function(){
        $(this).add(crearDiv).addClass("blue_box")
    })

})