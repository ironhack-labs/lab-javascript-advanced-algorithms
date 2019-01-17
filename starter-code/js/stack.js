// create stack class
var stack = new StackDataStructure();

/*************************************
 * Fill in stackDiv with empty divs
 *************************************/
var stackDiv = document.querySelector('#stack');
createEmptyDivs(stack.MAX_SIZE);

var btnAdd = document.querySelector('#btn-add');
var userInput = document.querySelector('#stack-input');
var btnTake = document.querySelector('#btn-take');
var popValue = document.querySelector('#pop-value');

/*************************************
 * ADD button
 *************************************/
btnAdd.addEventListener('click', function(event) {
  popValue.textContent = '';

  if (userInput.value.trim()) {
    btnTake.disabled = false;
    var res = stack.push(userInput.value);

    if (res === 'Stack Overflow') {
      let div = createDiv('stack-element stack-over-underflow');
      div.textContent = 'Stack Overflow';
      stackDiv.prepend(div);

      popValue.textContent = 'Stack OverFlow!';
      event.target.disabled = true;
    } else {
      render();
    }
  }

  userInput.value = '';
});

/*************************************
 * TAKE button
 *************************************/
btnTake.addEventListener('click', function() {
  btnAdd.disabled = false;

  var res = stack.pop();

  if (res === 'Stack Underflow') {
    let div = createDiv('stack-element stack-over-underflow');
    div.textContent = 'Stack Underflow';
    stackDiv.append(div);

    popValue.textContent = 'Stack UnderFlow!';
    event.target.disabled = true;
  } else {
    popValue.textContent = res;
    render();
  }
});

/*************************************
 * functions to create new element
 *************************************/
function createDiv(classNames) {
  var div = document.createElement('div');
  div.className = classNames;
  return div;
}

function createEmptyDivs(amountOfDiv) {
  for (let i = 1; i <= amountOfDiv; i++) {
    var div = createDiv('stack-element stack-element-empty');
    stackDiv.prepend(div);
  }
}

function render() {
  stackDiv.innerHTML = '';

  stack.stackControl.forEach(function(element) {
    let div = createDiv('stack-element stack-element-fill');
    div.textContent = element;
    stackDiv.prepend(div);
  });

  let remainder = stack.MAX_SIZE - stack.stackControl.length;
  createEmptyDivs(remainder);
}
