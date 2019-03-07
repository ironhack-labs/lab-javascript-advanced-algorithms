
 let queue = new QueueDataStructure();

 let controleQueue= false;
 let queueDiv = document.querySelector('#queue');
createEmptyDivsQueue(queue.MAX_SIZE);

 let btnAddQueue = document.querySelector('#btn-add-queue');
 let userInputQueue = document.querySelector('#queue-input');
 let btnTakeQueue = document.querySelector('#btn-take-queue');
 let popValueQueue = document.querySelector('#shift-value');


btnAddQueue.addEventListener('click', function(event) {

    
    if (userInputQueue.value == "") {

        alert("digite alguma coisa")
        return false;
    } else {

  popValueQueue.textContent = '';

  if (userInputQueue.value.trim()) {
    btnTakeQueue.disabled = false;
     let resQueue = queue.enqueue(userInputQueue.value);

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
}
});


btnTakeQueue.addEventListener('click', function() {


    
  btnAddQueue.disabled = false;

   let resQueue = queue.dequeue();

  if (resQueue === 'Queue Underflow') {
    let div = createDiv('queue-element queue-over-underflow');
    div.textContent = 'Underflow';
    queueDiv.prepend(div);

    popValueQueue.textContent = 'Queue UnderFlow!';
    event.target.disabled = true;
  } else {

    // if(!controleQueue){

    //     resQueue = queue.dequeue();
    //     controleQueue = true;
    // }

    popValueQueue.textContent = resQueue;
    renderQueue();
  }
});

function createDiv(classNames) {
   let div = document.createElement('div');
  div.className = classNames;
  return div;
}

function createEmptyDivsQueue(amountOfDiv) {
  for (let i = 0; i <= amountOfDiv -1 ; i++) {
     let div = createDiv('queue-element queue-element-empty div-queue btn');
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