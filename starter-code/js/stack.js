// console.log("stacks here");

// function StackDataStructure() {
//   this.stackControl = [];
//   this.MAX_SIZE = 10;

//   this.isEmpty = function() {
//     if (this.stackControl.length === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   // Should have a method to check if we can push elements into the stack
//   this.canPush = function() {
//     if (this.stackControl.length < this.MAX_SIZE) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   this.push = function(newItem) {
//     //"Should return 'Stack Overflow' if the stack is full"
//     if (this.canPush()) {
//       this.stackControl.push(newItem);
//       return this.stackControl;
//     } else {
//       return "Stack Overflow";
//     }
//   };

//   this.pop = function() {
//     if (this.isEmpty()) {
//       return "Stack Underflow";
//     } else {
//       return this.stackControl.pop();
//     }
//   };
// }

$(document).ready(function() {
  var stack = new StackDataStructure(8);
  var container = $(".stack__container--stack");
  //Count the Max number and display that many stacks
  createStacks(stack.MAX_SIZE);

  //I need take input -- ITERATION TWO
  //on ADD.click add one new stack item for every input using StackDataStructure.push
  var addButton = $("#stack-add");
  addButton.click(function() {
    stack.push(1);
    fillStack();
  });

  //on TAKE.click remove one item from the stack using StackDataStructure.pop

  function createStacks(stackSize) {
    var html = "";
    for (var i = 0; i < stackSize; i++) {
      html += `<div class='stack empty'></div>`;
    }
    // html += `<div class='stack'></div>`;
    container.append(html);
  }

  function fillStack() {
    var lastEmpty = $(
      "body > section > div > div.stack__container--stack .empty"
    );
    lastEmpty.last().addClass("full");
    lastEmpty.last().removeClass("empty");
  }
});
