window.onload = () => {
  var stack = new StackDataStructure();
  var queue = new QueueDataStructure();

  var stackParent = document.getElementById("stack-column");
  var queueParent = document.getElementById("queue-column");
  render(stackParent); //function that renders cells
  render(queueParent); //function that renders cells
  var inputField = document.querySelectorAll("input"); //input fields
  var btnArray = document.getElementsByClassName("btn-primary"); //add buttons
  var btnArray2 = document.getElementsByClassName("btn-danger"); //take buttons

  for (var i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener("click", event => {
      if (event.currentTarget.dataset.owner === "stack") {
        if (inputField[0].value != null) {
          var val = inputField[0].value;
        } else {
          var val = undefined;
        }
        if (stack.canPush() === true) {
          stack.push(val);
          render(stackParent);
        } else if (stackParent.dataset.status === "no-alert") {
          GenCell(stackParent, "alert", "Stack Overflow");
          stackParent.dataset.status = 'alert'
        }
      } else {
        if (inputField[1].value != null) {
          var val = inputField[1].value;
        } else {
          var val = undefined;
        }
        if (queue.canEnqueue() === true) {
          queue.enqueue(val);
          render(queueParent);
        } else if (queueParent.dataset.status === "no-alert") {
          GenCell(queueParent, "alert", "Stack Overflow");
          queueParent.dataset.status = 'alert'
        }
      }
    });
  }
  for (var i = 0; i < btnArray2.length; i++) {
    btnArray2[i].addEventListener("click", event => {
      if (event.currentTarget.dataset.owner === "stack") {
        //stack take button
        if (stack.isEmpty() === false) {
          stack.pop();
          render(stackParent);
        } else if (stackParent.dataset.status === "no-alert") {
          GenCell(stackParent, "alert", "Stack Unerflow");
          stackParent.dataset.status = 'alert'
        }
      } else {
        if (queue.isEmpty() === false) {
          queue.dequeue();
          render(queueParent);
        } else if (queueParent.dataset.status === "no-alert") {
          GenCell(queueParent, "alert", "Stack Unerflow");
          queueParent.dataset.status = 'alert'
        }
      }
    });
  }

  function GenCell(node, label, txt) {
    let cell = document.createElement("div");
    cell.className = "cell" + " " + label;
    if (node === stackParent) {
      cell.classList.add("horizontal")
    }
    else {
      cell.classList.add("vertical")
    }
    if (txt) {
      if (txt != undefined) {
        cell.textContent = txt;
      }
    }
    if (label === "full") {
      if (node === stackParent) {
        node.appendChild(cell);
      } else {
        node.insertBefore(cell, queueParent.firstChild);
      }
    } else if (label === "alert") {
      if (txt === "Stack Overflow") {
        if (node === stackParent) {
          node.insertBefore(cell, stackParent.firstChild);
        } else {
          node.appendChild(cell);
        }
        node.dataset.status = "alert";
      } else {
        if (node === stackParent) {
          node.appendChild(cell);
        } else {
          node.insertBefore(cell, queueParent.firstChild);
        }
        node.dataset.status = "alert";
      }
    } else if (label === "empty") {
      if (node === stackParent) {
        node.appendChild(cell);
      } else {
        node.insertBefore(cell, queueParent.firstChild);
      }
    } else {
      if (node === stackParent) {
        node.insertBefore(cell, stackParent.firstChild);
      } else {
        node.appendChild(cell);
      }
    }
  }

  function render(node) {
    while (node.firstChild) {
      //clear the div
      node.firstChild.remove();
    }
    if (node === stackParent) {
      var emptyCells = stack.MAX_SIZE - stack.stackControl.length;
      for (i = 0; i < emptyCells; i++) {
        //re-render

        GenCell(node, "empty", undefined);
      }
      for (i = 0; i < stack.stackControl.length; i++) {
        GenCell(node, "full", stack.stackControl[i]);
      }
    } else {
      var emptyCells = queue.MAX_SIZE - queue.queueControl.length;
      for (i = 0; i < queue.queueControl.length; i++) {
        //re-render
        GenCell(node, "full", queue.queueControl[i]);
      }
      for (i = 0; i < emptyCells; i++) {
        GenCell(node, "empty", undefined);
      }
    }
  }
};