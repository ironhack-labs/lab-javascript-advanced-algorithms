document.addEventListener('DOMContentLoaded', function () {
  var myStack = new StackDataStructure()
  var blockedAdd = false;
  var blockedTake = false;


  for (var i = 0; i < myStack.MAX_SIZE; i++) {
    var divStack = document.createElement('div');
    divStack.classList.add('grey');
    document.getElementById('stack-div-container').append(divStack)
  }
  $('#stack-add').click(function () {
    var addValue = $('#input-stack').val();
    if (myStack.canPush()) {
      myStack.push(addValue);
      containerStackArray(myStack.stackControl);
      blockedAdd = false;
    } else if (myStack.canPush() === false && blockedAdd === false) {
      var stackOverflowBox = document.createElement("div");
      stackOverflowBox.setAttribute("class", "hbox--warning");
      stackOverflowBox.textContent = "Stack Overflow";
      $("#stack-div-container").prepend(stackOverflowBox);
      blockedAdd = true;
    }
  })

  $('#stack-take').click(function () {

    if (myStack.isEmpty() === false ) {
      myStack.pop();
      containerStackArray(myStack.stackControl);
      blockedTake = false;
    } else if (myStack.isEmpty() && blockedTake === false) {
      var stackUnderflowBox = document.createElement("div");
      stackUnderflowBox.setAttribute("class", "hbox--warning");
      stackUnderflowBox.textContent = "Stack Overflow";
      $("#stack-div-container").last().append(stackUnderflowBox);
      blockedTake = true;
    }
  })

  function containerStackArray(array) {
    $('#stack-div-container').empty();
    for (var i = myStack.MAX_SIZE - 1; i >= 0; i--) {
      if (array[i] === undefined) {
        var divCreated = document.createElement('div');
        divCreated.classList.add('grey');
        $('#stack-div-container').append(divCreated)
      } else {
        var divCreatedText = document.createElement('div');
        divCreatedText.classList.add('blue');
        divCreatedText.textContent = array[i];
        $('#stack-div-container').append(divCreatedText);
      }
    }
  };
  
});

