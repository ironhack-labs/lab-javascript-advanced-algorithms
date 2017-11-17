/// Jquery
var stack = new StackDataStructure();

//// create boxes
for (var a = 0; a < stack.MAX_SIZE ; a++){
  $('div.books').append("<div class='well well-lg " + a + "'><p></p></div>");
}
//// push value + clear input
$('button.add').click(function () {
  stack.push($('#book').val());
  $('#book').val("");
  $('body > section > div.books.col-lg-9 > div:nth-child(10)').toggleClass('active');
  $('body > section > div.books.col-lg-9 > div:nth-child(10) > p').text(stack.stackControl[0]);
});
//// toggle
//$('body > section > div.books.col-lg-9 > div:nth-child(10)').toggleClass('active');
//$('body > section > div.books.col-lg-9 > div:nth-child(10) > p').text(stack.stackControl[0]);