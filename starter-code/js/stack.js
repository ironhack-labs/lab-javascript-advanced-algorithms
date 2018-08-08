$(document).ready(function() {
  var stack = new StackDataStructure(8);
  var container = $(".stack__container--stack");
  //get the number of stacks, create them and add them to the stack container
  createStacks(stack.MAX_SIZE);
  function createStacks(stackSize) {
    var html = "";
    for (var i = 0; i < stackSize; i++) {
      html += `<div class='stack empty'></div>`;
    }
    container.append(html);
  }

  //when Add button is clicked add one new stack item is added
  //whenever the max limit is reached show stopper
  var displayFlow;
  var addButton = $("#stack-add");
  addButton.click(function() {
    if (stack.canPush()) {
      stack.push(1);
      fillStack();
      console.log(stack.stackControl.length);
    } else {
      var html = `<div class='stack flow'>STACK OVERFLOW</div>`;
      container.prepend(html);
      //disable button
      addButton.prop("disabled", true);
      //show warning for 2 seconds and enable the button again
      handleOverUnderFlow(addButton);
    }
  });

  function fillStack() {
    //find the last stack that is empty and fill it
    var lastEmpty = $(
      "body > section > div > div.stack__container--stack .empty"
    );
    lastEmpty.last().addClass("full");
    lastEmpty.last().removeClass("empty");
  }

  //when Take button is clicked one item from the stack is removed
  //whenever the min limit is reached show stopper
  var takeButton = $("#stack-take");
  takeButton.click(function() {
    if (!stack.isEmpty()) {
      stack.pop(1);
      emptyStack();
    } else {
      var html = `<div class='stack flow'>STACK UNDERFLOW</div>`;
      container.prepend(html);
      //disable button
      takeButton.prop("disabled", true);
      //show warning for 2 seconds and enable the button again
      handleOverUnderFlow(takeButton);
    }
  });

  //find the first item that is full and empty it
  function emptyStack() {
    var firstFull = $(
      "body > section > div > div.stack__container--stack .full"
    );
    firstFull.first().removeClass("full");
    firstFull.first().addClass("empty");
  }

  function handleOverUnderFlow(button) {
    clearTimeout(displayFlow);
    displayFlow = setTimeout(function() {
      //enable the button again
      button.prop("disabled", false);
      //and remove warning block
      $(".flow").remove();
    }, 2000);
  }
});
