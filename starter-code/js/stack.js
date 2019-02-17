$(document).ready(function () {
  console.log("ready!");


  $("input").click(function () {
    $(this).val("");
  });
});

var myStack = new StackDataStructure();

$(".add").click(function () {

  if (myStack.canPush() == false) {
    $(".stack-rows").prepend("<div class='stack row-0'>Stack Overflow</div>");
    $(this).addClass("blocked");
  } else {
    $(".row-6").remove();
    $(".take").removeClass("blocked");
    $(this).removeClass("blocked");
    myStack.push($(".input-element").val());
    console.log(myStack.stackControl);
    if ($('.input-element').val()!="") {
      $(".stack:empty").last().text($('.input-element').val()).addClass("active");
    }

  }

});

$(".take").click(function () {
  if (myStack.isEmpty() == true) {
    $("<div class='stack row-6'>Stack Underflow</div>").appendTo(".stack-rows");
    $(this).addClass("blocked");
  } else {
    $(".row-0").remove();
    $(".add").removeClass("blocked");
    $(this).removeClass("blocked");
    myStack.pop();
    console.log(myStack.stackControl)
    $(".stack").not(":empty").first().text("").removeClass("active");
  }
})