var queue = new QueueDataStructure();

queue.queueControl = [];

function findParent(element, classSelector) {
  if (!element || element.classList.contains(classSelector)) {
    return element;
  } else {
    return findParent(element.parentNode, classSelector);
  }
}


var addButton = document.querySelector('.queue .add');

addButton.onclick = function() {
  var parent = findParent(this, 'queue');
  var input = parent.querySelector('input');
  var pushOnQueue = queue.enqueue(input.value);
  var content = '';
  var buttonEnabled = parent.querySelector('.take');
  buttonEnabled.removeAttribute('disabled');

  if (pushOnQueue === 'Queue Overflow'){
    var overflow = parent.querySelector('.over');
    overflow.style.display = 'block';
    content = document.createTextNode(pushOnQueue);
    overflow.innerHTML = '';
    overflow.appendChild(content);
    var buttonDisabled = parent.querySelector('.add');
    buttonDisabled.setAttribute('disabled', '');

  } else {
    var arrayElementToChange = parent.getElementsByClassName('element');
    for (i = 0 ; i < queue.queueControl.length ; i++){

      var elementToChange = arrayElementToChange[queue.MAX_SIZE - i]; // considering underflow y overflow (both have '.element' class)

      elementToChange.classList.add('added');
      elementToChange.classList.remove('empty');
  
      elementToChange.innerHTML = '';
      content = document.createTextNode(queue.queueControl[i]);
      elementToChange.appendChild(content);
    }

    if (queue.queueControl.length === 1) {
      var underflow = parent.querySelector('.under');
      underflow.style.display = 'none';
    }
  }
  input.value = '';
}


var takeButton = document.querySelector('.queue .take');

takeButton.onclick = function() {
  var parent = findParent(this, 'queue');
  var popFromQueue = queue.dequeue();
  var content = '';
  var buttonEnabled = parent.querySelector('.add');
  buttonEnabled.removeAttribute('disabled');


  if (popFromQueue === 'Queue Underflow'){
    var underflow = parent.querySelector('.under');
    underflow.style.display = 'block';
    content = document.createTextNode(popFromQueue);
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
    content = document.createTextNode(popFromQueue);
    poppedElement.appendChild(content);

    if (queue.queueControl.length < queue.MAX_SIZE) {
      var overflow = parent.querySelector('.over');
      overflow.style.display = 'none';
    }
  }
}


