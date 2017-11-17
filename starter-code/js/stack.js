/// Jquery
var stack = new StackDataStructure();

//// append + for loop
for (var a = 0; a < stack.MAX_SIZE ; a++){
  $('div.books').append("<div class='well inactive'></div>");
}

$('button.add').click(function () {
  stack.push($('#book').val());
  $('body > section > div.books > div:nth-child(1)').removeClass('inactive');
});