var stack;
var dataToStack; 
var boxNumber;
var boxSelector;

$(function () {
  stack = new StackDataStructure();
  $(".stack .add").click(function () {

    dataToStack = $(".stack input").val();
    stack.push(dataToStack);

    boxNumber = stack.stackControl.length;
    boxSelector = ".stack .box-" + boxNumber;
    $(boxSelector).html(dataToStack);

    $(boxSelector).removeClass("empty");

  });
});