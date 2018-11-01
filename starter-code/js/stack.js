$(document).ready(function() {
  var stack = new StackDataStructure();

  $(".add-button").click(function(){
    var inputText = $("input").val();
    stack.push(inputText);
    $('.noactive').last().toggleClass('active').toggleClass('noactive').text(inputText);
  })

  $(".take-button").click(function(){
    stack.pop();
    $('.active').first().toggleClass('noactive').text("");
  })
})
