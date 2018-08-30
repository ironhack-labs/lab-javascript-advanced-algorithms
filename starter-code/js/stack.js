$(document).ready(function(){

// var stackList = $("ul#stack-list > li");
// console.log(stackList);

var stackOverflow = new StackDataStructure();

  $('.btn-add').click(function () {

    stackOverflow.push($("#stack-input").val());
    console.log($("#stack-input").val());
    // console.log(stackOverflow.stackControl)

    var position = (stackOverflow.MAX_SIZE-stackOverflow.stackControl.length);

    $($("ul#stack-list > li")[position]).text($("#stack-input").val());

});

$('.btn-remove').click(function () {

  stackOverflow.pop($("#stack-input").val());

  var position = (stackOverflow.MAX_SIZE-stackOverflow.stackControl.length-1);

  $($("ul#stack-list > li")[position]).empty();

});


})