var stack = new StackDataStructure();
stack.MAX_SIZE = 5;


function createStack() {
  var html = "";
  var index = 0;
  for (var i = 0; i < stack.MAX_SIZE; i++) {
    index = stack.MAX_SIZE - 1 - i;
    html += '<div class="element" id="stack' + index + '"></div>\n';
  }

  $("#dataStructure").html(html);
}

function addToStack() {
  var elementToAdd = document.getElementById("input-Data").value;
  var elementAdded = stack.push(elementToAdd);

  if (elementAdded === "Stack Overflow") {
    document.getElementsByClassName("error-overFlow")[0].style.visibility = "visible";

  } else {
    stack.stackControl.forEach(function(elem,index) {
      var div = document.getElementById(`stack${index}`);
      div.className = "element frontElement";
      div.innerText = stack.stackControl[index];
    });
  }
}

function takeToStack(){

    var contTake = stack.stackControl.length-1;
    var elementAdded = stack.pop();

  if (elementAdded === "Stack Underflow") {
    document.getElementsByClassName("error-underFlow")[0].style.visibility = "visible";

  } else {
    var div = document.getElementById(`stack${contTake}`);
    div.className = "element";
    div.innerText = "";
  }
}

// window.onload = function() {
//   var buttonAdd = document.getElementById("button-Add");
//   var buttonTake = document.getElementById("button-Take");
//   createStack();

//   buttonTake.onclick = takeToStack;
//   buttonAdd.onclick = addToStack;

  

// };
