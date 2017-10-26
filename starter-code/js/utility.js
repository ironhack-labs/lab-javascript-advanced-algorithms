function focusInput(elementID) {
  document.getElementById(elementID).focus();
}

function createChildAndAppendChildToParent(element, parent, value, instance) {
  if (parent.children.length < instance.MAX_SIZE) {
    const child = document.createElement(element);
    child.classList.add("item");
    child.innerHTML = value;
    parent.appendChild(child);
  }
}

function removeLastChildFromParent(parent, dataStructure) {
  if (parent.children.length > 0) {
    if (dataStructure === "stack") {
      parent.removeChild(parent.lastChild);
    } else if (dataStructure === "queue") {
      parent.removeChild(parent.children[0]);
    }
  }
}
function updateStats() {
  sizeStack.innerHTML = stack.stackControl.length;
  maxSizeStack.innerHTML = stack.MAX_SIZE;
  sizeQueue.innerHTML = queue.queueControl.length;
  maxSizeQueue.innerHTML = queue.MAX_SIZE;
}
