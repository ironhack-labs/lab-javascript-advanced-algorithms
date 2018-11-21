document.addEventListener('DOMContentLoaded', function () {

  var myStack = new StackDataStructure()
  var blockedAdd = false;
  var blockedTake = false;


  for (var i = 0; i < myStack.MAX_SIZE; i++) {
    var divStack = document.createElement('div');
    divStack.classList.add('grey');
    $('#stack-div-container').append(divStack)
  }

  $('#stack-add').click(function () {
    var addValue = $('#input-stack').val();
    if (myStack.canPush()) {
      myStack.push(addValue);
      containerStackArray(myStack.stackControl);
      blockedAdd = false;
    } else if (myStack.canPush() === false && blockedAdd === false) {
      var stackOverflowBox = document.createElement("div");
      stackOverflowBox.setAttribute("class", "alert");
      stackOverflowBox.textContent = "Stack Overflow";
      $("#stack-div-container").prepend(stackOverflowBox);
      blockedAdd = true;
    }
  });

  $('#stack-take').click(function () {
    if (myStack.isEmpty() === false) {
      printTakeElement(myStack.stackControl);
      myStack.pop();
      containerStackArray(myStack.stackControl);
      blockedTake = false;
    } else if (myStack.isEmpty() && blockedTake === false) {
      var stackUnderflowBox = document.createElement("div");
      stackUnderflowBox.setAttribute("class", "alert");
      stackUnderflowBox.textContent = "Stack Underflow";
      $("#stack-div-container").last().append(stackUnderflowBox);
      blockedTake = true;
      printTakeElement()
    }
  });

  function containerStackArray(array) {
    $('#stack-div-container').empty();
    for (var i = myStack.MAX_SIZE - 1; i >= 0; i--) {
      var divCreated = document.createElement('div');
      if (array[i] === undefined) {
        divCreated.classList.add('grey');
        $('#stack-div-container').append(divCreated)
      } else {
        divCreated.classList.add('blue');
        divCreated.textContent = array[i];
        $('#stack-div-container').append(divCreated);
      }
    }
  };

  function printTakeElement(array){
    $("#stack-deleted").empty();
    var textNode = "Element removed :" + ' ' + array[myStack.stackControl.length - 1]
    $("#stack-deleted").append(textNode);
  }
});
