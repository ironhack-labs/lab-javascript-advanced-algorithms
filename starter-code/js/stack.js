var stackDataContainer = $(".stack-data-container");
var sOverflow = '<div class="stack-overflow">Stack Overflow</div>'
var sUnderflow = '<div class="stack-underflow">Stack Underflow</div>'
var inputTop = document.getElementsByClassName("input-top");


function addSDivs (arg) {
  for (var i = 0; i < arg; i++) {
    $(stackDataContainer).append('<div class="stack-data-element"></div>');
  }
}

function addStack (obj) {
  if(obj.canPush() === false) {
    $(stackDataContainer).prepend(sOverflow)
  }
  else {
    var inputVal = inputTop[0].value
    var stackSlots = document.getElementsByClassName("stack-data-element");
    var arrSlots = [].slice.call(stackSlots);
    $(arrSlots[arrSlots.length-1]).toggleClass("fill-stack-element");
    $(arrSlots[arrSlots.length-1]).toggleClass("stack-data-element");
    $(arrSlots[arrSlots.length-1]).html(inputVal);
    obj.stackControl.push(inputVal)
  }
}

function takeStack (obj) {
  if(obj.isEmpty() === true) {
    $(stackDataContainer).append(sUnderflow)
  }
  else {
    var stackSlots = document.getElementsByClassName("fill-stack-element");
    var arrSlots = [].slice.call(stackSlots);
    var inputVal = $(arrSlots[0]).html()
    obj.stackControl.pop(inputVal)
    $(arrSlots[0]).toggleClass("fill-stack-element");
    $(arrSlots[0]).toggleClass("stack-data-element");
    $(arrSlots[0]).html("");
  }
}

$(document).ready(function(){
  stackDataStructure = new StackDataStructure(8);
  addSDivs(stackDataStructure.MAX_SIZE);

  $('.btn-add-stack').click(function () {
    addStack (stackDataStructure);
  });

  $('.btn-take-stack').click(function () {
    takeStack (stackDataStructure);
  });

});