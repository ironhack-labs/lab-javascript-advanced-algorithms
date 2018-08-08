var s;
//var topStack = $('.stacked:first');

$(document).ready(function(){
var s = new StackDataStructure();
var html = '';

for (let i=0; i<s.MAX_SIZE;i++){
    html += '<div class="col btn-outline-secondary empty">Empty Stack</div>'
  };
// Add all divs
$('#stack').html(html);
//push button
$("#add").click(function() {
    var stackVal = $('input').val();
    console.log(stackVal);
//    topStack.addClass('stacked');

$('.empty:last').toggleClass("stacked empty");
    console.log("stack it");
});
//pop button
$("#sub").click(function() {
    $('#stack').children().toggleClass("stacked");
    console.log("de stack it");
});


// END OF DOC READY ---------------------
});