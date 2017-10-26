function focusInput(elementID) {
  document.getElementById(elementID).focus();
}

function createChildAndAppendChildToParent(element, parent, value) {
  const child = document.createElement(element);
  child.classList.add("item");
  child.innerHTML = value;
  parent.appendChild(child);
}

function removeLastChildFromParent(parent, dataStructure) {
  if (parent.childNodes.length > 0) {
    if (dataStructure === "stack") {
      parent.removeChild(parent.lastChild);
    } else if (dataStructure === "queue") {
      parent.removeChild(parent.childNodes[0]);
    }
  }
}
