var myStack = new StackDataStructure();
var addToTheStack = function () {
  myStack.push($("#stackOF .inputBox").attr("value"));
  stackFiller();
};


  var stackCounter = 0;

var stackFiller = function () {
  stackCounter = 0;
  var currentStep = $(".stackStep")[stackCounter];

  console.log(currentStep);
  currentStep.attr(".filledBox");
  return stackCounter += 1;
};

var stackEmptier = function () {

  var currentStep = $(".stackStep")[stackCounter];
  currentStep.addClass("filledBox");
  stackCounter -= 1;
};

function stackTrigger () {
  $("#stackOF").append("<div class='topBox'></div>");
  $("#stackOF").append("<div class='bottomBox'></div>");
  $("#stackOF .topBox").append("<div class='titles'>Stack</div>");
  $("#stackOF .topBox").append("<input class='inputBox' type='text' placeholder='Add elements to the Stack'>");
  $("#stackOF .topBox").append("<div class='addRemButtons'></div>");
  $("#stackOF .addRemButtons").append("<button class='addButton' onclick='addToTheStack()'>ADD</button>");
  $("#stackOF .addRemButtons").append("<button class='remButton'>TAKE</button>");
  for(var i=0;i<10;i++){
      $('#stackOF .bottomBox').append('<div class="stackStep" />');
  }

}

$(document).ready(function(){
  stackTrigger();


});
