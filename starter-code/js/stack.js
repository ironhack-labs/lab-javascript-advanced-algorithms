
stack = new StackDataStructure(4);
var html = '';
html += "<li class='list-group-item overflow inactive'>Stack Overflow</li>"
for (var i = 0; i < stack.MAX_SIZE; i++) {
  html += "<li class='list-group-item empty'></li>"
}
html += "<li class='list-group-item underflow inactive'>Stack Underflow</li>"

$("#stack-container").html(html);


$(".btn-add").click(function() {
  if (stack.canPush()) {
  $(".underflow").removeClass("active");
  var newItem = $(".input-stack").val();
  $(".empty:last").text(newItem);
  $(".empty:last").toggleClass("empty full");
  return stack.push(newItem);
  }
  else {
    $(".overflow").removeClass("inactive");
    $(".overflow").addClass("active");
  }

})

$(".btn-take").click(function() {
  if(!stack.isEmpty()) {
  $(".overflow").removeClass("active");
  var oldItem = $(".full:first").text();
  $(".taken-item").text(oldItem);

  $(".full:first").text("");
  $(".full:first").toggleClass("empty full");
  stack.pop();}
  else {
    $(".underflow").removeClass("inactive");
    $(".underflow").addClass("active");
  }
})