$(function() {
  var item = document.getElementById("item");
  var add = document.getElementById("add");
  var remove = document.getElementById("remove");
  var empty = document.getElementById("under");
  var full = document.getElementById("over");

  myStack = new StackDataStructure();

  add.onclick = function() {
    var element = item.value;
    if (element !== "") {
      if (myStack.stackControl.length == myStack.MAX_SIZE) {
        full.classList.remove("hide");
      } else {
        document.getElementById(`b${myStack.stackControl.length + 1}`).innerHTML = `${element}`;
        document.getElementById(`b${myStack.stackControl.length + 1}`).classList.add("fullbox");
        myStack.push(element);

        if (myStack.stackControl.length != 0) {
          empty.classList.add("hide");
        }
      }
    }
  };

  remove.onclick = function() {
    if (myStack.stackControl.length === 0) {
      empty.classList.remove("hide");
    } else {
      
      document.getElementById(`b${myStack.stackControl.length}`).textContent = "";
      console.log(document.getElementById(`b${myStack.stackControl.length}`).textContent)
      document.getElementById(`b${myStack.stackControl.length}`).classList.remove("fullbox");
      myStack.pop();
      if (myStack.stackControl.length != myStack.MAX_SIZE) {
        full.classList.add("hide");
      }
    }
    
  };
});
