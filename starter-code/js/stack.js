// DOM ELEMENTS
var stack = new StackDataStructure();

var stackElem = document.getElementById("stackElem");

var addButt = document.getElementById("addButt");
var takeButt = document.getElementById("takeButt");
var userInput = document.getElementById("userInput").value;


// DOM FUNCTIONS

function fill() {
  if (stack.canPush()) {
    stackElem[stack.MAX_SIZE - stack.stackControl.length].innerHTML = userInput.value
  }
}

// DOM EVENTS
addButt.addEventListener("click", function() {
  userInput = innerHTML
  stack.push();
  stack.fill();
  counter++
});

takeButt.addEventListener("click", function() {
  stack.pop();
  stack.fill();
  counter--
});







// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML == "SPLIT") {
    printSplit();
  } else {
    chronometer.resetClick();
    splits.innerHTML = "";
  }
});


// counter

                                            [0][1]
// Max_Width - stackControl.length + 1      a   b c d e f g h

1   
2
3
4
5 d
6 c
7 b
8 a
