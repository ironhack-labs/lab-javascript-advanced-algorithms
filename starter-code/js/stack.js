function generateStack(config){

  let valueRangeInput = document.getElementById(config.valueRangeInput);
  let valueRangeLabel = document.getElementById(config.valueRangeLabel);
  let addBtn = document.getElementById(config.addBtnId);
  let takeBtn = document.getElementById(config.takeBtnId);
  let stackList = document.getElementById(config.stackList);

  let myStack = new StackDataStructure({maxsize:5});

  function updateRangeLabel(newVal) {
    valueRangeLabel.innerHTML = "Taille de la stack : " + newVal;
  }

  function updateStackMaxSize(newVal) {
    myStack.updateMaxSize(newVal)
    renderDom() // Re-render eveything cause the DOM doesnt reflect the stack anymore
  }

  function getNewValue() {
    return document.getElementById(config.newValueInput).value;
  }

  // When you need to empty the list and re-draw it based on the stack
  function renderDom() {
    stackList.innerHTML = "";
    myStack.stackControl.forEach(el => {
      stackList.innerHTML += `<li>${el}</li>`;
    })
  }

  function addToDom (newVal) {
    let text = document.createTextNode(newVal);
    let li = document.createElement('li');
    li.appendChild(text);
    stackList.appendChild(li);
  }

  function removeLastFromDom() {
    stackList.children[stackList.children.length - 1].remove();
  }

  addBtn.onclick = function () {
    if (myStack.canPush()) {
      let newVal = getNewValue();
      if (newVal === "") { return; }
      myStack.push(newVal)
      addToDom(newVal);
    }
  }

  takeBtn.onclick = function () {
    if (myStack.canPop()) {
      myStack.pop()
      removeLastFromDom();
    }
  }

  valueRangeInput.onchange = function() {
      let newMaxSize = valueRangeInput.valueAsNumber;
      updateRangeLabel(newMaxSize);
      updateStackMaxSize(newMaxSize);
  }

}

window.document.addEventListener("DOMContentLoaded", function() {
  generateStack({
    valueRangeInput : 'value-range-i',
    valueRangeLabel : 'value-range-l',
    newValueInput : 'new-value',
    addBtnId : 'add-value',
    takeBtnId : 'take-value',
    stackList : 'stack-list'
  })
})
