var myStack = new StackDataStructure();
var addToTheStack = function () {
  myStack.push($("#stackOF .inputBox").value);
  stackFiller();
};

var removeFromTheStack = function () {
  myStack.pop();
  stackEmptier();
};

  var stackCounter = 9;

var stackFiller = function () {
  var currentStep = $(".stackStep")[stackCounter];
  $(currentStep).toggleClass("filledBox");
  var currentText = $("#stackOF .inputBox").value;
  $(currentStep).html(currentText);
  stackCounter -= 1;
};

var stackEmptier = function () {
  stackCounter += 1;
  var currentStep = $(".stackStep")[stackCounter];
  $(currentStep).toggleClass("filledBox");

};

function stackTrigger () {
  $("#stackOF").append("<div class='topBox'></div>");
  $("#stackOF").append("<div class='bottomBox'></div>");
  $("#stackOF .topBox").append("<div class='titles'>Stack</div>");
  $("#stackOF .topBox").append("<input class='inputBox' type='text' placeholder='Add elements to the Stack'>");
  $("#stackOF .topBox").append("<div class='addRemButtons'></div>");
  $("#stackOF .addRemButtons").append("<button class='addButton' onclick='addToTheStack()'>ADD</button>");
  $("#stackOF .addRemButtons").append("<button class='remButton' onclick='removeFromTheStack()'>TAKE</button>");
  for(var i=0;i<10;i++){
      $('#stackOF .bottomBox').append('<div class="stackStep" />');
  }

}

$(document).ready(function(){
  stackTrigger();


});
