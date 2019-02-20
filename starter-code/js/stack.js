
var stackDataContainer = $(".stack-data-container");
var qOverflow = '<div class="queue-overflow">O<br>v<br>e<br>r<br>f<br>l<br>o<br>w</div>';
var qUnderflow = '<div class="queue-underflow">U<br>n<br>d<br>e<br>r<br>f<br>l<br>o<br>w<br></div>';
var inputTop = document.getElementsByClassName("input-bottom");
var inputBot = document.getElementsByClassName("input-bottom");

function addQDivs (arg) {
  for (var i = 0; i < arg; i++) {
    $(stackDataContainer).append('<div class="stack-data-element"></div>');
  }
}

function addQueue (obj) {
  if(obj.canPush() === false) {
    $(stackDataContainer).prepend(qOverflow)
  }
  else {
    var inputVal = inputBot[0].value
    var satackSlots = document.getElementsByClassName("stack-data-element");
    var arrQSlots = [].slice.call(stackSlots);
    $(arrQSlots[arrQSlots.length-1]).toggleClass("fill-queue-element");
    $(arrQSlots[arrQSlots.length-1]).toggleClass("stack-data-element");
    $(arrQSlots[arrQSlots.length-1]).html(inputVal);
    obj.stackControl.push(inputVal)
  }
}

function takeQueue (obj) {
  if(obj.isEmpty() === true) {
    $(stackDataContainer).append(qUnderflow);
  }
  else {
    var stackSlots = document.getElementsByClassName("fill-stack-element");
    var arrQSlots = [].slice.call(stackSlots);
    var inputVal = $(arrQSlots[0]).html()
    obj.stackControl.shift(inputVal)
    $(arrQSlots[0]).toggleClass("fill-queue-element");
    $(arrQSlots[0]).toggleClass("stack-data-element");
    $(arrQSlots[0]).html("");
  }
}

$(document).ready(function(){
  stackDataStructure = new StackDataStructure(8);
  addSDivs(stackDataStructure.MAX_SIZE);

  $('.btn-add-stack').click(function () {
    console.log("He entrado");
  });

  $('.btn-take-stack').click(function () {
    console.log("He entrado");
  });

});