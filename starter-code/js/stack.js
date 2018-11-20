var stack = new StackDataStructure();

stack.stackControl = [];

function findParent(element, classSelector) {
  if (!element || element.classList.contains(classSelector)) {
    return element;
  } else {
    return findParent(element.parentNode, classSelector);
  }
}


var addButton = document.querySelector('.stack .add');

addButton.onclick = function() {
  var parent = findParent(this, 'stack');
  var input = parent.querySelector('input');
  var pushOnStack = stack.push(input.value);
  var content = '';
  var buttonEnabled = parent.querySelector('.take');
  buttonEnabled.removeAttribute('disabled');


  if (pushOnStack === 'Stack Overflow'){
    var overflow = parent.querySelector('.over');
    overflow.style.display = 'block';
    content = document.createTextNode(pushOnStack);
    overflow.innerHTML = '';
    overflow.appendChild(content);
    var buttonDisabled = parent.querySelector('.add');
    buttonDisabled.setAttribute('disabled', '');


  } else {
    var arrayElementToChange = parent.getElementsByClassName('empty');
    var elementToChange = arrayElementToChange[(arrayElementToChange.length-1)];
    elementToChange.classList.add('added');
    elementToChange.classList.remove('empty');
    content = document.createTextNode(stack.stackControl[(stack.stackControl.length-1)]);
    elementToChange.appendChild(content);

    if (stack.stackControl.length === 1) {
      var underflow = parent.querySelector('.under');
      underflow.style.display = 'none';
    }
  }
  input.value = '';
}


var takeButton = document.querySelector('.stack .take');

takeButton.onclick = function() {
  var parent = findParent(this, 'stack');
  var popFromStack = stack.pop();
  var content = '';
  var buttonEnabled = parent.querySelector('.add');
  buttonEnabled.removeAttribute('disabled');


  if (popFromStack === 'Stack Underflow'){
    var underflow = parent.querySelector('.under');
    underflow.style.display = 'block';
    content = document.createTextNode(popFromStack);
    underflow.innerHTML = '';
    underflow.appendChild(content);
    var buttonDisabled = parent.querySelector('.take');
    buttonDisabled.setAttribute('disabled', '');

  } else {
    var arrayElementToChange = parent.getElementsByClassName('added');
    var elementToChange = arrayElementToChange[0];
    elementToChange.classList.add('empty');
    elementToChange.classList.remove('added');
    elementToChange.innerHTML = '';

    var poppedElement = parent.querySelector('.popped-element');
    poppedElement.innerHTML = ''
    content = document.createTextNode(popFromStack);
    poppedElement.appendChild(content);

    if (stack.stackControl.length < stack.MAX_SIZE) {
      var overflow = parent.querySelector('.over');
      overflow.style.display = 'none';
    }
  }
}


