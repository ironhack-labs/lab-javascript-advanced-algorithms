// create queue class
var queue = new QueueDataStructure();

/*************************************
 * Fill in stackDiv with empty divs
 *************************************/
var queueDiv = document.querySelector('#queue');
createEmptyDivsQueue(queue.MAX_SIZE);

var btnAddQueue = document.querySelector('#btn-add-queue');
var userInputQueue = document.querySelector('#queue-input');
var btnTakeQueue = document.querySelector('#btn-take-queue');
var popValueQueue = document.querySelector('#shift-value');

/*************************************
 * ADD button
 *************************************/
btnAddQueue.addEventListener('click', function(event) {
  popValueQueue.textContent = '';

  if (userInputQueue.value.trim()) {
    btnTakeQueue.disabled = false;
    var resQueue = queue.enqueue(userInputQueue.value);

    if (resQueue === 'Queue Overflow') {
      let div = createDiv('queue-element queue-over-underflow');
      div.textContent = 'Overflow';
      queueDiv.append(div);

      popValueQueue.textContent = 'Queue OverFlow!';
      event.target.disabled = true;
    } else {
      renderQueue();
    }
  }

  userInputQueue.value = '';
});

/*************************************
 * TAKE button
 *************************************/
btnTakeQueue.addEventListener('click', function() {
  btnAddQueue.disabled = false;

  var resQueue = queue.dequeue();

  if (resQueue === 'Queue Underflow') {
    let div = createDiv('queue-element queue-over-underflow');
    div.textContent = 'Underflow';
    queueDiv.prepend(div);

    popValueQueue.textContent = 'Queue UnderFlow!';
    event.target.disabled = true;
  } else {
    popValueQueue.textContent = resQueue;
    renderQueue();
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

function createEmptyDivsQueue(amountOfDiv) {
  for (let i = 1; i <= amountOfDiv; i++) {
    var div = createDiv('queue-element queue-element-empty');
    queueDiv.appendChild(div);
  }
}

function renderQueue() {
  queueDiv.innerHTML = '';

  queue.queueControl.forEach(function(element) {
    let div = createDiv('queue-element queue-element-fill');
    div.textContent = element;
    queueDiv.appendChild(div);
  });

  let remainder = queue.MAX_SIZE - queue.queueControl.length;
  createEmptyDivsQueue(remainder);
}
