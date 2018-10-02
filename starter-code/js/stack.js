var stack = new StackDataStructure();

var $sList = $("#stackList");
var $sAdd = $("#stackAdd");
var $sTake = $("#stackTake");
var $sInput = $("#stackInput");
var $sOverflow = $("#sOverflow");
var $sUnderflow = $("#sUnderflow");

for (var i = 0; i < stack.MAX_SIZE; i++) {
  $sList.append("<li></li>");
}
var $sItems = $("#stackList li");

$sAdd.click(function () {
  $sInput.focus();
  clear($sUnderflow, "underflow");
  if ($sInput.val() === "") {
    alert("You can't add an empty item");
  } else {
    sCheckOverflow();
  }
});

var sCheckOverflow = function () {
  if (stack.push($sInput.val()) === "Stack Overflow") {
    $sOverflow.text("Stack Overflow");
    $sOverflow.addClass("overflow");
  } else {
    var i = stack.MAX_SIZE - stack.stackControl.length;
    $sItems.eq(i).text($sInput.val());
    $sItems.eq(i).addClass("full");
  }
  $sInput.val("");
}

$sTake.click(function () {
  clear($sOverflow, "overflow");
  sCheckUnderflow();
});

var sCheckUnderflow = function () {
  if (stack.pop() === "Stack Underflow") {
    $sUnderflow.text("Stack Underflow");
    $sUnderflow.addClass("underflow");
  } else {
    var i = stack.MAX_SIZE - stack.stackControl.length - 1;
    $sItems.eq(i).text("");
    $sItems.eq(i).removeClass("full");
  }
  $sInput.val("");
}

var clear = function (elem, clas) {
  elem.text("");
  elem.removeClass(clas);
}
