$(document).ready(function(){
  var stack = new StackDataStructure();
  var canAdd = true
  var takeElement
  var input = document.getElementById("stack-input")
  var element
  var elements = []
  var taker = 0

  // console.log(stack.MAX_SIZE)

  // Stack it
 function stackIt(){
    element = "stack" + stack.stackControl.length
    element = document.getElementById(element)
    element.firstChild.innerText = input.value
    element.className = "fill"
  }

  // Pop it
  function popIt(item){
    element = "take" + taker
    element = document.getElementById(element)
    element.firstChild.innerText = item
    element.className = "take-container"
    freeSpace(item)
  }

  // Free space
  function freeSpace(item){
    elements = document.getElementsByClassName("fill")
    var i = 0
    while(i < elements.length && elements[i].firstChild.innerText != item){
      i++
    }
    if(elements[i].firstChild.innerText === item){
      // console.log("sale " + item)
      elements[i].firstChild.innerText = ""
      elements[i].className = "element-container"
    } else {
      console.log("revisa " + item)
    }
  }

  // Bind the click event of each element to a function
  $('.add-stack').click(function () {
    // TODO: write some code here
    if(input.value){
      canAdd = stack.canPush()
      if(canAdd){
        stack.push(input.value)
        stackIt()
      } else {
        alert("Stack Overflow!")
      }
    }
    else {
      alert("Add element first ¬¬")
    }
    input.value = ""
  });

  $('.take-stack').click(function () {
    // TODO: write some code here
    takeElement = stack.pop()
    if(takeElement === "Stack Underflow"){
      alert(takeElement)
    } else {
      // console.log(takeElement)
      taker++
      if(taker === 6){
        taker = 1
      }
      popIt(takeElement)
    }
  });
});
